from pydantic import BaseModel
from datetime import datetime


class SubjectBase(BaseModel):
   subject_name:str

class SubjectCreate(SubjectBase):
    pass
    

class Subject(SubjectBase):
    id:int
    created_at:datetime
    updated_at:datetime
    
    
    class config:
        orm_mode:True
    