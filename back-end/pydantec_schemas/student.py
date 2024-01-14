from pydantic import BaseModel
from datetime import datetime
from enum import Enum


class StudentBase(BaseModel):
    email:str
    grade:int 

class StudentCreate(StudentBase):
    first_name:str
    last_name:str
    address:str
    phone_number:int

class Student(StudentBase):
    id:int
    created_at:datetime
    updated_at:datetime
    first_name:str
    last_name:str
    address:str
    phone_number:int
    
    class config:
        orm_mode:True
    