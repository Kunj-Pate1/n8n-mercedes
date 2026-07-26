# n8n Analytics Dashboard

A small full-stack dashboard for analyzing n8n workflow execution logs.

The application has two parts:

- A FastAPI backend that reads workflow execution logs and calculates analytics.
- A React frontend that fetches and displays those analytics.

The project is deployed with:
- Frontend: Vercel
- Backend: Render

---

## Demo

Frontend:
https://n8n-mercedes.vercel.app/

Backend:
https://n8n-analytics-mha2.onrender.com/

Analytics API:

```
GET /api/n8n-analytics
```

Example:

```
https://n8n-analytics-mha2.onrender.com/api/n8n-analytics
```

---

## Features

### Backend

- Built with FastAPI
- Uses mock n8n workflow execution logs from a JSON file
- Calculates:
  - Workflow success rate
  - Number of failed executions
  - Average execution duration
- Provides analytics through a REST API
- Configured with CORS for frontend communication


### Frontend

- Built with React and Vite
- Displays analytics in a simple dashboard
- Fetches latest data using the "Sync Logs" button
- Includes loading and error states during API requests


---

## Running Locally

### Backend

Navigate to the backend folder:

```bash
cd backend
```

Create and activate a virtual environment:

```bash
python -m venv venv
```

Windows:

```bash
venv\Scripts\activate
```

Linux/macOS:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file:

```env
FRONTEND_URL=http://localhost:5173
```

Start the API:

```bash
uv run fastapi dev main.py                                                  
```

The API will be available at:

```
http://localhost:8000
```

Swagger documentation:

```
http://localhost:8000/docs
```

---

### Frontend

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:8000
```

Start the development server:

```bash
npm run dev
```

The frontend will run at:

```
http://localhost:5173
```

---

## Environment Variables : Local 

The project uses environment variables to manage frontend and backend configuration.

### Frontend

`.env`

```env
VITE_API_URL=http://localhost:8000
```

This URL points the frontend to the backend API.

For production, this value is updated to the deployed Render backend URL.

---

### Backend

`.env`

```env
FRONTEND_URL=http://localhost:5173
```

This URL is used for CORS configuration to allow requests from the frontend application.

For production, this value is updated to the deployed Vercel frontend URL.

---

## Deployment

The project uses GitHub as the source repository.

Deployment flow:

1. Code is pushed to the main branch.
2. GitHub Actions runs the configured workflow checks.
3. Vercel automatically deploys frontend changes.
4. Render automatically redeploys backend changes.

Environment variables and deployment credentials are managed outside the codebase.

---

## Note

I didn't add authentication since it was not part of the requirements. The focus was on configuring CORS to allow requests only from the deployed frontend. The API endpoint is still accessible if someone has the URL. For a production application, I would add authentication or use a serverless function to secure it.
