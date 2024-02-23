from pydantic import BaseModel
from datetime import datetime


class ClassBase(BaseModel):
    pass


class ClassCreate(ClassBase):
    teacher_id: int
    subject_id: int
    class_name: str


class Class(ClassBase):
    class_id: int
    created_at: datetime
    updated_at: datetime
    teacher_id: int
    subject_id: int

    class config:
        orm_mode: True
