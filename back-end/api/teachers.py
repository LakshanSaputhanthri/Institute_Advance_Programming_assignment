from typing import Optional,List

import fastapi
from  fastapi import Depends,HTTPException
from sqlalchemy.orm import Session


from pydantec_schemas.teacher import Teacher,TeacherCreate
from db.db_setup import get_db
from api.utils.teacher import create_teacher,delete_teacher,get_teacher_by_email,get_teachers,get_teacher


router=fastapi.APIRouter()


    
@router.get("/teachers",response_model=List[Teacher])
async def get_teachers_api(skip:int=0,limit:int=100,db:Session=Depends(get_db)):
    teachers=get_teachers(db,skip=skip,limit=limit)
    return teachers

@router.get("/teachers/{id}")
async def get_teacher_by_id_api(id:int,db:Session=Depends(get_db)):
    teacher=get_teacher(db,teacher_id=id)
    if teacher==None:
        raise HTTPException(status_code=404,detail="Teacher Not found")
    return teacher

@router.delete("/teachers/{id}")
async def delete_teacher_by_id_api(id:int,db:Session=Depends(get_db)):
    teacher=get_teacher(db,teacher_id=id)
    if teacher==None:
        raise HTTPException(status_code=404,detail="Teacher Not found")
    return  delete_teacher(db,teacher_id=id)

@router.post("/teachers")
async def create_teacher_api(teacher:TeacherCreate,db:Session=Depends(get_db)):
    db_teacher=get_teacher_by_email(db=db,teacher_email=teacher.email)
    if db_teacher:
        raise HTTPException(status_code=400,detail="This email already exist")
    return create_teacher(db=db,teacher=teacher)
