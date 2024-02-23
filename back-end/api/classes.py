from typing import Optional, List

import fastapi
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session


from db.db_setup import get_db
from api.utils.classes import create_class, get_classes, get_class_by_class_id

from pydantec_schemas.classes import ClassCreate, Class


router = fastapi.APIRouter()


@router.get("/class", response_model=List[Class])
async def get_class_api(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    classes = get_classes(db, skip=skip, limit=limit)
    print(classes)
    return classes


@router.post("/class")
async def create_class_api(classes: ClassCreate, db: Session = Depends(get_db)):
    return create_class(db=db, classes=classes)


# @router.post("/class")
# async def create_teacher_api(teacher:TeacherCreate,db:Session=Depends(get_db)):
#     db_teacher=get_teacher_by_email(db=db,teacher_email=teacher.email)
#     if db_teacher:
#         raise HTTPException(status_code=400,detail="This email already exist")
#     return create_teacher(db=db,teacher=teacher)


@router.get("/class/{id}")
async def get_teacher_by_id_api(id: int, db: Session = Depends(get_db)):
    teacher = get_class_by_class_id(db, class_id=id)
    if teacher == None:
        raise HTTPException(status_code=404, detail="Teacher Not found")
    return teacher


# @router.delete("/teachers/{id}")
# async def delete_teacher_by_id_api(id:int,db:Session=Depends(get_db)):
#     teacher=get_teacher(db,teacher_id=id)
#     if teacher==None:
#         raise HTTPException(status_code=404,detail="Teacher Not found")
#     return  delete_teacher(db,teacher_id=id)
