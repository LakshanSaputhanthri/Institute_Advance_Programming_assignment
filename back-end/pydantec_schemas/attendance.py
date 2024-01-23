from pydantic import BaseModel
from datetime import datetime


class AttendanceBase(BaseModel):
    pass

class AttendanceCreate(AttendanceBase):
    class_id:int
    subject_id:int

class Attendance(AttendanceBase):
    attendance_id:int
    created_at:datetime
    updated_at:datetime
    subject_id:int
    
    class config:
        orm_mode:True
    