from sqlalchemy.orm import Session
from db.models.classes import Class 
from pydantec_schemas.classes import Class,ClassCreate

#create class
def create_class(db:Session,classs:ClassCreate):
    db_class=classs(teacher_id=classs.teacher_id)
    db.commit()
    db.refresh(db_class)
    return db_class

#delete teacher
# def delete_teacher(db:Session,teacher_id:int):
#     delete_row=db.query(Teacher).filter(Teacher.id==teacher_id).delete()
#     db.commit()
#     return delete_row

#get all teachers
def get_classes(db:Session,skip:int=0,limit:int=100):
    return db.query(Class).offset(skip).limit(limit).all()

#get teacher using teacher_id
# def get_teacher(db:Session,teacher_id:int):
#     return db.query(Teacher).filter(Teacher.id==teacher_id).first()

#get teacher using email
# def get_teacher_by_email(db:Session,teacher_email:str):
#     return db.query(Teacher).filter(Teacher.email==teacher_email).first()