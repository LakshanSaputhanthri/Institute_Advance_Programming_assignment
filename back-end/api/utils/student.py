from sqlalchemy.orm import Session
from db.models.student import Student
from pydantec_schemas.student import StudentCreate

#create student
def create_student(db:Session,student:StudentCreate):
    db_student=Student(email=student.email,first_name=student.first_name,last_name=student.last_name,phone_number=student.phone_number,address=student.address,grade=student.grade)
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student

#delete student
def delete_student(db:Session,student_id:int):
    delete_row=db.query(Student).filter(Student.id==student_id).delete()
    db.commit()
    return delete_row

#get all students
def get_students(db:Session,skip:int=0,limit:int=100):
    return db.query(Student).offset(skip).limit(limit).all()

#get student using student_id
def get_student(db:Session,student_id:int):
    return db.query(Student).filter(Student.id==student_id).first()

#get student using email
def get_student_by_email(db:Session,student_email:str):
    return db.query(Student).filter(Student.email==student_email).first()