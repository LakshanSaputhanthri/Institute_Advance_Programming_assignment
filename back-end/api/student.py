from typing import Optional,List

import fastapi
from  fastapi import Depends,HTTPException
from sqlalchemy.orm import Session


from pydantec_schemas.student import Student,StudentCreate
from db.db_setup import get_db
from api.utils.student import create_student,get_student,get_students,get_student_by_email,delete_student


router=fastapi.APIRouter()


    
@router.get("/students",response_model=List[Student])
async def get_students_api(skip:int=0,limit:int=100,db:Session=Depends(get_db)):
    students=get_students(db,skip=skip,limit=limit)
    return students

@router.get("/students/{id}")
async def get_student_by_id_api(id:int,db:Session=Depends(get_db)):
    student=get_student(db,student_id=id)
    if student==None:
        raise HTTPException(status_code=404,detail="Student Not found")
    return student

@router.delete("/students/{id}")
async def delete_student_by_id_api(id:int,db:Session=Depends(get_db)):
    student=get_student(db,student_id=id)
    if student==None:
        raise HTTPException(status_code=404,detail="Student Not found")
    return  delete_student(db,student_id=id)

@router.post("/student")
async def create_students_api(student:StudentCreate,db:Session=Depends(get_db)):
    db_student=get_student_by_email(db=db,student_email=student.email)
    if db_student:
        raise HTTPException(status_code=400,detail="This email already exist")
    return create_student(db=db,student=student)
