from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import csv
import os
from datetime import datetime

app = FastAPI(title="Bokle AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

CSV_FILE = os.path.join(os.path.dirname(__file__), "leads.csv")

# Initialize CSV with headers if it doesn't exist
def initialize_csv():
    if not os.path.exists(CSV_FILE):
        with open(CSV_FILE, 'w', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(['Timestamp', 'Name', 'Email', 'Domain', 'Description'])

initialize_csv()

class InquiryRequest(BaseModel):
    name: str
    email: str
    domain: str = ""
    description: str = ""

@app.get("/api/health")
def health_check():
    return {"status": "healthy", "service": "Bokle AI API"}

@app.post("/api/submit-inquiry")
def submit_inquiry(inquiry: InquiryRequest):
    if not inquiry.name or not inquiry.email:
        raise HTTPException(status_code=400, detail="Name and Email are required.")
    
    timestamp = datetime.utcnow().isoformat()
    
    try:
        with open(CSV_FILE, 'a', newline='') as f:
            writer = csv.writer(f)
            writer.writerow([timestamp, inquiry.name, inquiry.email, inquiry.domain, inquiry.description])
        return {"success": True, "message": "Lead saved successfully."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to save lead: {str(e)}")
