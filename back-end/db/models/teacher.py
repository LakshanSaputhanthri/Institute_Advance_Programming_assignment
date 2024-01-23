import enum
from sqlalchemy import Boolean,Column,ForeignKey,Integer,String,Enum,Text
from sqlalchemy.orm import relationship
from ..db_setup import Base
from .mixins import Timestamp
from fastapi import APIRouter

router = APIRouter()


class Teacher(Timestamp,Base):
    __tablename__="teachers"
    teacher_id=Column(Integer,primary_key=True,index=True)
    first_name=Column(String(100),unique=False,index=True,nullable=False)
    last_name=Column(String(100),unique=False,index=True,nullable=False)
    email=Column(String(100),unique=True,index=True,nullable=False)
    phone_number=Column(Integer,unique=False,index=True,nullable=False)
    address=Column(String(200),unique=False,index=True,nullable=False)
    
    classes=relationship("Class",back_populates="teacher")