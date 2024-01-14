from fastapi import FastAPI
from api import student as student_api

from db.db_setup import engine
from db.models import student as student_model

app = FastAPI()
app.include_router(student_api.router,tags=["Student"])


student_model.Base.metadata.create_all(bind=engine)

