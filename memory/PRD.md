# Bokle AI - Project Documentation

## Original Problem Statement
Run the connected chosen git repo and preview it without any errors.

## Architecture
- **Frontend**: React 19 + Vite + TypeScript + Three.js (port 3000)
- **Backend**: FastAPI (port 8001)
- **Database**: MongoDB (available but not actively used)

## What's Been Implemented
- [2026-01-04] Restructured project to work with Emergent platform
  - Moved source files to `/app/frontend/` directory
  - Created FastAPI backend server with lead submission API
  - Configured supervisor services
  - Both services running successfully

## Core Features
- Landing page with stunning space-themed design
- Multi-page SPA with navigation (Services, Use Cases, About, Book Call)
- Lead capture form with CSV storage
- 3D starfield background animation

## Tech Stack
- React 19.2.3
- Vite 6.2.0
- TypeScript 5.8.2
- Three.js for 3D effects
- FastAPI backend
- Tailwind CSS

## Next Action Items
- None - application running successfully

## Backlog
- P1: Add form submission to Book Call page
- P2: Connect to MongoDB for lead storage
- P3: Add email notifications for new leads
