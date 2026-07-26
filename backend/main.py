from fastapi import FastAPI
from routes import router
from util import check_updates,on_file_changed
import asyncio

from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager


@asynccontextmanager
async def lifespan(app: FastAPI):

    await on_file_changed()

    task = asyncio.create_task(check_updates())

    try:
        yield
    finally:
        task.cancel()
        try:
            await task
        except asyncio.CancelledError:
            pass

app = FastAPI(lifespan=lifespan)

origins = [
    "http://localhost:5173",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],      
    allow_headers=["*"], 
)

app.include_router(router)


