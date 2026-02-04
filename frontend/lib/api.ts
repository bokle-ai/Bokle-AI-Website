// API configuration for production deployment
// Uses VITE_API_BASE_URL environment variable for backend service URL

const getApiBaseUrl = (): string => {
  // In production, VITE_API_BASE_URL should point to the backend Railway service
  // e.g., https://bokle-backend.up.railway.app
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  
  if (baseUrl) {
    // Remove trailing slash if present
    return baseUrl.replace(/\/$/, '');
  }
  
  // Fallback for local development
  return '';
};

export const API_BASE_URL = getApiBaseUrl();

// API endpoints
export const API_ENDPOINTS = {
  submitInquiry: `${API_BASE_URL}/api/submit-inquiry`,
  getEnquiries: `${API_BASE_URL}/api/enquiries`,
  deleteEnquiry: (id: string) => `${API_BASE_URL}/api/enquiries/${id}`,
  health: `${API_BASE_URL}/api/health`,
};

// Generic fetch wrapper with error handling
export async function apiRequest<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`API Error [${response.status}]:`, errorText);
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
