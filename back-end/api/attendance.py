from typing import Optional, List

import fastapi
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session


from pydantec_schemas.attendance import Attendance, AttendanceCreate
from db.db_setup import get_db
from api.utils.attendance import (
    create_attendance,
    get_attendance,
    get_attendance_By_class,
)


router = fastapi.APIRouter()


@router.get("/attendance", response_model=List[Attendance])
async def get_attendance_api(
    skip: int = 0, limit: int = 100, db: Session = Depends(get_db)
):
    students = get_attendance(db, skip=skip, limit=limit)
    return students


@router.get("/attendance/{class_id}")
async def get_attendance_by_id_api(id: int, db: Session = Depends(get_db)):
    student = get_attendance_By_class(db, class_id=id)
    if student == None:
        raise HTTPException(status_code=404, detail="Student Not found")
    return student


# @router.delete("/students/{id}")
# async def delete_student_by_id_api(id:int,db:Session=Depends(get_db)):
#     student=get_student(db,student_id=id)
#     if student==None:
#         raise HTTPException(status_code=404,detail="Student Not found")
#     return  delete_student(db,student_id=id)


@router.post("/attendance")
async def create_attendance_api(
    attendance: AttendanceCreate, db: Session = Depends(get_db)
):
    return create_attendance(db=db, attendance=attendance)
