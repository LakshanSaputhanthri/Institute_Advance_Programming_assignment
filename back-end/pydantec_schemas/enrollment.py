from pydantic import BaseModel
from datetime import datetime


class EnrollmentBase(BaseModel):
   pass

class EnrollmentCreate(EnrollmentBase):
    enrollment_id=int
    student_id=int
    class_id=int

class Enrollment(EnrollmentBase):
    enrollment_id:int
    student_id=int
    class_id=int
    created_at:datetime
    updated_at:datetime
    
    
    class config:
        orm_mode:True
    