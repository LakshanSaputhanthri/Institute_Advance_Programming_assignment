from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api import student as student_api
from api import teachers as teacher_api
from api import classes as class_api
from api import subject as subject_api
from api import enrollment as enrollment_api
from api import attendance as attendance_api


from db.db_setup import engine
from db.models import student as student_model
from db.models import teacher as teacher_model
from db.models import subject as subject_model
from db.models import enrollment as enrollment_model
from db.models import classes as class_model
from db.models import attendance as attendance_model


app = FastAPI(title="Student Attendance Management")

app.include_router(student_api.router, tags=["Student"])
app.include_router(teacher_api.router, tags=["Teacher"])
app.include_router(class_api.router, tags=["Class"])
app.include_router(subject_api.router, tags=["Subject"])
app.include_router(enrollment_api.router, tags=["Enrollment"])
app.include_router(attendance_api.router, tags=["Attendance"])


student_model.Base.metadata.create_all(bind=engine)
teacher_model.Base.metadata.create_all(bind=engine)
attendance_model.Base.metadata.create_all(bind=engine)
subject_model.Base.metadata.create_all(bind=engine)
enrollment_model.Base.metadata.create_all(bind=engine)
class_model.Base.metadata.create_all(bind=engine)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can replace "*" with a list of allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # You can replace "*" with a list of allowed HTTP methods
    allow_headers=["*"],  # You can replace "*" with a list of allowed HTTP headers
)
