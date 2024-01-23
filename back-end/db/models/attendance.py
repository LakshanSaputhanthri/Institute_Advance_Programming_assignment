from .mixins import Timestamp
from ..db_setup import Base
from sqlalchemy import Column,Integer,ForeignKey
from .student import Student
from .classes import Class
from sqlalchemy.orm import relationship



class Attendance (Timestamp,Base):
    __tablename__="attendance"
    attendance_id = Column(Integer, primary_key=True, index=True)
    student_id=Column(Integer,ForeignKey(Student.student_id),nullable=False,index=True)
    class_id=Column(Integer,ForeignKey(Class.class_id),nullable=False,index=True)

    classes = relationship("Attendance", back_populates="attendance")
    student = relationship("Attendance", back_populates="attendance")