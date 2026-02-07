
import React, { useState, useEffect } from 'react';
import { View } from '../App';
import { API_ENDPOINTS } from '../lib/api';

interface Enquiry {
  id: string;
  name: string;
  email: string;
  domain: string;
  description: string;
  created_at: string;
}

interface AdminProps {
  onNavigate: (view: View) => void;
}

const Admin: React.FC<AdminProps> = ({ onNavigate }) => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_ENDPOINTS.getEnquiries);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Fetch error:', response.status, errorText);
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      setEnquiries(data.enquiries || []);
    } catch (err) {
      console.error('Failed to fetch enquiries:', err);
      setError(err instanceof Error ? err.message : 'Failed to load enquiries. Please try refreshing.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enquiry?')) return;

    try {
      const response = await fetch(API_ENDPOINTS.deleteEnquiry(id), {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error(`Delete failed: ${response.status}`);
      }

      setEnquiries(enquiries.filter(e => e.id !== id));
    } catch (err) {
      console.error('Failed to delete:', err);
      alert('Failed to delete enquiry. Please try again.');
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-in">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            <span className="text-[#00FF41]">Enquiries</span> Dashboard
          </h1>
          <p className="text-white/40 mt-2">View and manage all form submissions</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => {
              const headers = ['ID', 'Name', 'Email', 'Domain', 'Description', 'Date'];
              const csvContent = [
                headers.join(','),
                ...enquiries.map(e => [
                  `"${e.id}"`,
                  `"${e.name.replace(/"/g, '""')}"`,
                  `"${e.email.replace(/"/g, '""')}"`,
                  `"${e.domain?.replace(/"/g, '""') || ''}"`,
                  `"${e.description?.replace(/"/g, '""') || ''}"`,
                  `"${new Date(e.created_at).toLocaleString()}"`
                ].join(','))
              ].join('\n');

              const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
              const link = document.createElement('a');
              link.href = URL.createObjectURL(blob);
              link.download = `bokle_enquiries_${new Date().toISOString().split('T')[0]}.csv`;
              link.click();
            }}
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-bold hover:bg-white/20 transition-all"
          >
            Dowload Responses (.csv)
          </button>
          <button
            onClick={fetchEnquiries}
            className="px-6 py-3 bg-[#00FF41]/10 border border-[#00FF41]/30 rounded-xl text-[#00FF41] font-bold hover:bg-[#00FF41]/20 transition-all"
          >
            Refresh
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="text-[#00FF41] text-xl animate-pulse">Loading enquiries...</div>
        </div>
      ) : error ? (
        <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400">
          {error}
        </div>
      ) : enquiries.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📭</div>
          <h3 className="text-2xl font-bold text-white/50">No enquiries yet</h3>
          <p className="text-white/30 mt-2">Submissions will appear here</p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="premium-glass p-6 rounded-2xl">
              <div className="text-3xl font-black text-[#00FF41]">{enquiries.length}</div>
              <div className="text-white/40 text-sm">Total Enquiries</div>
            </div>
            <div className="premium-glass p-6 rounded-2xl">
              <div className="text-3xl font-black text-[#00FF41]">
                {enquiries.filter(e => e.domain === 'Real Estate').length}
              </div>
              <div className="text-white/40 text-sm">Real Estate</div>
            </div>
            <div className="premium-glass p-6 rounded-2xl">
              <div className="text-3xl font-black text-[#00FF41]">
                {enquiries.filter(e => e.domain === 'Healthcare').length}
              </div>
              <div className="text-white/40 text-sm">Healthcare</div>
            </div>
          </div>

          {/* Table */}
          <div className="premium-glass rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-5 text-[#00FF41] font-bold text-sm uppercase tracking-wider">Name</th>
                    <th className="text-left p-5 text-[#00FF41] font-bold text-sm uppercase tracking-wider">Email</th>
                    <th className="text-left p-5 text-[#00FF41] font-bold text-sm uppercase tracking-wider">Domain</th>
                    <th className="text-left p-5 text-[#00FF41] font-bold text-sm uppercase tracking-wider">Description</th>
                    <th className="text-left p-5 text-[#00FF41] font-bold text-sm uppercase tracking-wider">Date</th>
                    <th className="text-left p-5 text-[#00FF41] font-bold text-sm uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((enquiry, index) => (
                    <tr
                      key={enquiry.id}
                      className={`border-b border-white/5 hover:bg-white/5 transition-colors ${index % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                    >
                      <td className="p-5 font-semibold">{enquiry.name}</td>
                      <td className="p-5 text-white/70">
                        <a href={`mailto:${enquiry.email}`} className="hover:text-[#00FF41] transition-colors">
                          {enquiry.email}
                        </a>
                      </td>
                      <td className="p-5">
                        <span className="px-3 py-1 bg-[#00FF41]/10 text-[#00FF41] rounded-full text-xs font-bold">
                          {enquiry.domain || 'N/A'}
                        </span>
                      </td>
                      <td className="p-5 text-white/50 max-w-xs truncate">{enquiry.description || '-'}</td>
                      <td className="p-5 text-white/40 text-sm">{formatDate(enquiry.created_at)}</td>
                      <td className="p-5">
                        <button
                          onClick={() => handleDelete(enquiry.id)}
                          className="text-red-400 hover:text-red-300 transition-colors text-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
