from sqlalchemy.orm import Session
from db.models.attendance import Attendance
from pydantec_schemas.attendance import AttendanceCreate

#create Attendance
def create_attendance(db:Session,attendance:AttendanceCreate):
    db_attendance=Attendance(student_id=attendance.subject_id,class_id=attendance.class_id,isPresent=attendance.isPresent)
    db.add(db_attendance)
    db.commit()
    db.refresh(db_attendance)
    return db_attendance

#delete student
# def delete_student(db:Session,student_id:int):
#     delete_row=db.query(Student).filter(Student.id==student_id).delete()
#     db.commit()
#     return delete_row

#get all students
# def get_students(db:Session,skip:int=0,limit:int=100):
#     return db.query(Student).offset(skip).limit(limit).all()

#get student using student_id
# def get_student(db:Session,student_id:int):
#     return db.query(Student).filter(Student.id==student_id).first()

#get student using email
# def get_student_by_email(db:Session,student_email:str):
#     return db.query(Student).filter(Student.email==student_email).first()