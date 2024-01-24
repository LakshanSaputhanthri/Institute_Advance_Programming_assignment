from ..db_setup import Base
from sqlalchemy import Integer,Column,String
from .mixins import Timestamp
from sqlalchemy.orm import relationship

class Subject(Timestamp,Base):
    __tablename__="subject"
    subject_id=Column(Integer,primary_key=True,unique=True,index=True)
    subject_name=Column(String(50),unique=True,nullable=False,index=True)
    
    classes=relationship("Class",back_populates="subject")