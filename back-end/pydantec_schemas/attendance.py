from pydantic import BaseModel
from datetime import datetime


class AttendanceBase(BaseModel):
    pass

class AttendanceCreate(AttendanceBase):
    class_id:int
    student_id:int
    isPresent:bool

class Attendance(AttendanceBase):
    attendance_id:int
    created_at:datetime
    updated_at:datetime
    
    class config:
        orm_mode:True
    