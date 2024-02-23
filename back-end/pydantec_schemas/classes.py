from pydantic import BaseModel
from datetime import datetime
from .teacher import Teacher
from .subject import Subject


class ClassBase(BaseModel):

    class_name: str
    pass


class ClassCreate(ClassBase):
    teacher_id: int
    subject_id: int
    pass


class Class(ClassBase):
    class_id: int
    created_at: datetime
    updated_at: datetime
    teacher: Teacher
    subject: Subject

    class config:
        orm_mode: True
