import enum
from sqlalchemy import Boolean,Column,ForeignKey,Integer,String,Enum,Text
from sqlalchemy.orm import relationship
from ..db_setup import Base
from .mixins import Timestamp
from fastapi import APIRouter

router = APIRouter()


class User(Timestamp,Base):
    __tablename__="users"
    id=Column(Integer,primary_key=True,index=True)
    first_name=Column(String(100),unique=False,index=True,nullable=False)
    last_name=Column(String(100),unique=False,index=True,nullable=False)
    email=Column(String(100),unique=True,index=True,nullable=False)
    user_name=Column(String(100),unique=True,index=True,nullable=False)
    password=Column(String(100),unique=False,index=True,nullable=False)
