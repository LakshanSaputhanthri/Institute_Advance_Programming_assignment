import enum
from sqlalchemy import Boolean,Column,ForeignKey,Integer,String,Enum,Text
from sqlalchemy.orm import relationship
from ..db_setup import Base
from .mixins import Timestamp
from fastapi import APIRouter

router = APIRouter()
# class Grade(Enum):
#     grade_1 = 1
#     grade_2 = 2
#     grade_3 = 3
#     grade_4 = 4
#     grade_5 = 5
#     grade_6 = 6
#     grade_7 = 7
#     grade_8 = 8
#     grade_9 = 9

class Student(Timestamp,Base):
    __tablename__="students"
    id=Column(Integer,primary_key=True,index=True)
    first_name=Column(String(100),unique=False,index=True,nullable=False)
    last_name=Column(String(100),unique=False,index=True,nullable=False)
    email=Column(String(100),unique=True,index=True,nullable=False)
    phone_number=Column(Integer,unique=False,index=True,nullable=False)
    address=Column(String(200),unique=False,index=True,nullable=False)
    # grade=Column(Enum(Grade))