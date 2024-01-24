# class.py

import enum
from sqlalchemy import Column, ForeignKey, Integer, String, Enum, Text
from sqlalchemy.orm import relationship
from ..db_setup import Base
from .mixins import Timestamp
from .teacher import Teacher
from .subject import Subject

class Class(Timestamp, Base):
    __tablename__ = "class"
    class_id = Column(Integer, primary_key=True, index=True)
    teacher_id = Column(Integer, ForeignKey(Teacher.teacher_id), unique=False, index=True, nullable=False)
    subject_id = Column(Integer, ForeignKey(Subject.subject_id), unique=False, index=True, nullable=False)

    
    teachers = relationship("Teacher", back_populates="classes")
    subject = relationship("Subject", back_populates="classes", primaryjoin="Class.subject_id == Subject.subject_id")
    attendance=relationship("Attendance",back_populates="classes")
    enrollment=relationship("Enrollment",back_populates="classes")



