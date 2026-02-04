from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from datetime import datetime, timezone
import os

app = FastAPI(title="Bokle AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.environ.get("DB_NAME", "bokle_ai")

client = MongoClient(MONGO_URL)
db = client[DB_NAME]
enquiries_collection = db["enquiries"]

class InquiryRequest(BaseModel):
    name: str
    email: str
    domain: str = ""
    description: str = ""

class InquiryResponse(BaseModel):
    id: str
    name: str
    email: str
    domain: str
    description: str
    created_at: str

@app.get("/api/health")
def health_check():
    return {"status": "healthy", "service": "Bokle AI API"}

@app.post("/api/submit-inquiry")
def submit_inquiry(inquiry: InquiryRequest):
    if not inquiry.name or not inquiry.email:
        raise HTTPException(status_code=400, detail="Name and Email are required.")
    
    # Create enquiry document
    enquiry_doc = {
        "name": inquiry.name,
        "email": inquiry.email,
        "domain": inquiry.domain,
        "description": inquiry.description,
        "created_at": datetime.now(timezone.utc)
    }
    
    try:
        result = enquiries_collection.insert_one(enquiry_doc)
        return {"success": True, "message": "Enquiry saved successfully.", "id": str(result.inserted_id)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to save enquiry: {str(e)}")

@app.get("/api/enquiries")
def get_enquiries():
    try:
        enquiries = list(enquiries_collection.find().sort("created_at", -1))
        result = []
        for enq in enquiries:
            result.append({
                "id": str(enq["_id"]),
                "name": enq.get("name", ""),
                "email": enq.get("email", ""),
                "domain": enq.get("domain", ""),
                "description": enq.get("description", ""),
                "created_at": enq.get("created_at", datetime.now(timezone.utc)).isoformat() if enq.get("created_at") else ""
            })
        return {"enquiries": result, "total": len(result)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch enquiries: {str(e)}")

@app.delete("/api/enquiries/{enquiry_id}")
def delete_enquiry(enquiry_id: str):
    from bson import ObjectId
    try:
        result = enquiries_collection.delete_one({"_id": ObjectId(enquiry_id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Enquiry not found")
        return {"success": True, "message": "Enquiry deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete enquiry: {str(e)}")
