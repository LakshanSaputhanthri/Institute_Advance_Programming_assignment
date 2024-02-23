from pydantic import BaseModel
from datetime import datetime
from .student import Student
from .classes import Class


class AttendanceBase(BaseModel):
    pass


class AttendanceCreate(AttendanceBase):
    class_id: int
    student_id: int
    isPresent: bool


class Attendance(AttendanceBase):
    attendance_id: int
    created_at: datetime
    updated_at: datetime
    student: Student
    classes: Class

    class config:
        orm_mode: True
