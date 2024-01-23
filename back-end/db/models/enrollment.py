from ..db_setup import Base
from .mixins import Timestamp
from sqlalchemy import Column,Integer,ForeignKey
from sqlalchemy.orm import relationship
from .student import Student
from .classes import Class

class Enrollment(Timestamp,Base):
    __tablename__="enrollment"
    enrollment_id=Column(Integer,primary_key=True,index=True)
    student_id=Column(Integer,ForeignKey(Student.student_id),index=True,nullable=False)
    class_id=Column(Integer,ForeignKey(Class.class_id),index=True,nullable=False)

    student=relationship("Student",back_populates="enrollment")
    classes=relationship("Class",back_populates="enrollment")