# Serverside File Upload API

## Overview
A Node.js Express backend API for handling file uploads using Multer. Supports uploading photos and CV/resume files.

## Project Structure
- `index.js` - Main Express server with file upload endpoint
- `multer.config.js` - Multer configuration for file handling
- `uploads/` - Directory where uploaded files are stored (created automatically)

## Tech Stack
- Node.js 20
- Express 5.x
- Multer 2.x for file uploads
- CORS enabled

## API Endpoints
- `POST /uploadingFiles` - Upload photos (max 2) and CV (max 1)
  - Fields: `photo`, `cv`

## Running Locally
The server runs on port 5000 and binds to 0.0.0.0 for Replit compatibility.

## Environment Variables
- `PORT` - Server port (defaults to 5000)
