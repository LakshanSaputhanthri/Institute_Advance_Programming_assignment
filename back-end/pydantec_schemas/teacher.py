from pydantic import BaseModel
from datetime import datetime


class TeacherBase(BaseModel):
    email:str

class TeacherCreate(TeacherBase):
    first_name:str
    last_name:str
    address:str
    phone_number:int

class Teacher(TeacherBase):
    id:int
    created_at:datetime
    updated_at:datetime
    first_name:str
    last_name:str
    address:str
    phone_number:int
    
    class config:
        orm_mode:True
    