# class.py

import enum
from sqlalchemy import Column, ForeignKey, Integer, String, Enum, Text
from sqlalchemy.orm import relationship
from ..db_setup import Base
from .mixins import Timestamp
from .teacher import Teacher
from .student import Student

class Class(Timestamp, Base):
    __tablename__ = "class"
    class_id = Column(Integer, primary_key=True, index=True)
    teacher_id = Column(Integer, ForeignKey(Teacher.teacher_id), unique=False, index=True, nullable=False)
    student_id = Column(Integer, ForeignKey(Student.student_id), unique=False, index=True, nullable=False)

    
    teacher = relationship("Teacher", back_populates="classes")
    student = relationship("Student", back_populates="classes")
    attendance=relationship("Attendance",back_populates="classes")
    enrollment=relationship("Enrollment",back_populates="classes")
    subject=relationship("Subject",back_populates="classes")



