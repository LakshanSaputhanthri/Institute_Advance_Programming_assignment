from sqlalchemy.orm import Session
from db.models.enrollment import Enrollment
from pydantec_schemas.enrollment import EnrollmentCreate

#create student
def create_enrollment(db:Session,enrollment:EnrollmentCreate):
    db_enrollment=Enrollment(student_id=enrollment.student_id,class_id=enrollment.class_id)
    db.add(db_enrollment)
    db.commit()
    db.refresh(db_enrollment)
    return db_enrollment

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