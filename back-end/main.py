from fastapi import FastAPI
from api import student

app = FastAPI()
app.include_router(student.router,tags=["Student"])

from db.db_setup import engine
from db.models import student 
student.Base.metadata.create_all(bind=engine)

