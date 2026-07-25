from routes import app

from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:5173",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],      
    allow_headers=["*"], 
)
