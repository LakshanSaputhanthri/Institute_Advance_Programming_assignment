from pydantic import BaseModel
from datetime import datetime
from .student import Student


class EnrollmentBase(BaseModel):
    pass


class EnrollmentCreate(EnrollmentBase):
    student_id: int
    class_id: int


class Enrollment(EnrollmentBase):
    enrollment_id: int
    class_id: int
    student: Student
    created_at: datetime
    updated_at: datetime

    class config:
        orm_mode: True
