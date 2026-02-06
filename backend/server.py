from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from datetime import datetime, timezone
import os

# Load .env file for local development
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

# =============================================================================
# FASTAPI APP INITIALIZATION
# =============================================================================
app = FastAPI(title="Bokle AI API")

# =============================================================================
# CORS MIDDLEWARE - MUST BE IMMEDIATELY AFTER app = FastAPI()
# =============================================================================
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://bokle.in",
        "https://www.bokle.in",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =============================================================================
# DATABASE CONNECTION
# =============================================================================
MONGO_URL = os.environ.get("MONGO_URL") or os.environ.get("MONGODB_URL") or os.environ.get("DATABASE_URL")
DB_NAME = os.environ.get("DB_NAME", "bokle_ai")

if not MONGO_URL:
    print("WARNING: No MongoDB URL provided. Set MONGO_URL environment variable.")
    client = None
    db = None
    enquiries_collection = None
else:
    client = MongoClient(MONGO_URL)
    db = client[DB_NAME]
    enquiries_collection = db["enquiries"]

# =============================================================================
# MODELS
# =============================================================================
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

# =============================================================================
# API ROUTES
# =============================================================================
@app.get("/")
def root():
    return {"status": "ok", "service": "Bokle AI API", "version": "1.0.0"}

@app.get("/api/health")
def health_check():
    db_status = "connected" if client else "not configured"
    return {"status": "healthy", "service": "Bokle AI API", "database": db_status}

@app.post("/api/submit-inquiry")
def submit_inquiry(inquiry: InquiryRequest):
    if not enquiries_collection:
        raise HTTPException(status_code=503, detail="Database not configured")
    
    if not inquiry.name or not inquiry.email:
        raise HTTPException(status_code=400, detail="Name and Email are required.")
    
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
    if not enquiries_collection:
        raise HTTPException(status_code=503, detail="Database not configured")
    
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
    if not enquiries_collection:
        raise HTTPException(status_code=503, detail="Database not configured")
    
    from bson import ObjectId
    try:
        result = enquiries_collection.delete_one({"_id": ObjectId(enquiry_id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Enquiry not found")
        return {"success": True, "message": "Enquiry deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete enquiry: {str(e)}")
