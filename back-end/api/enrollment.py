from typing import Optional,List

import fastapi
from  fastapi import Depends,HTTPException
from sqlalchemy.orm import Session


from pydantec_schemas.enrollment import Enrollment,EnrollmentCreate
from db.db_setup import get_db
from api.utils.enrollment import create_enrollment


router=fastapi.APIRouter()


    
# @router.get("/students",response_model=List[Student])
# async def get_students_api(skip:int=0,limit:int=100,db:Session=Depends(get_db)):
#     students=get_students(db,skip=skip,limit=limit)
#     return students

# @router.get("/students/{id}")
# async def get_student_by_id_api(id:int,db:Session=Depends(get_db)):
#     student=get_student(db,student_id=id)
#     if student==None:
#         raise HTTPException(status_code=404,detail="Student Not found")
#     return student

# @router.delete("/students/{id}")
# async def delete_student_by_id_api(id:int,db:Session=Depends(get_db)):
#     student=get_student(db,student_id=id)
#     if student==None:
#         raise HTTPException(status_code=404,detail="Student Not found")
#     return  delete_student(db,student_id=id)

@router.post("/enrollment")
async def create_attendance_api(enrollment:EnrollmentCreate,db:Session=Depends(get_db)):
    return create_enrollment(db=db,enrollment=enrollment)
