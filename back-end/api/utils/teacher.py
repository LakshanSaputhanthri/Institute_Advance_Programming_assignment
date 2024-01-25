from sqlalchemy.orm import Session
from db.models.teacher import Teacher 
from pydantec_schemas.teacher import TeacherCreate

#create teacher
def create_teacher(db:Session,teacher:TeacherCreate):
    db_teacher=Teacher(email=teacher.email,first_name=teacher.first_name,last_name=teacher.last_name,phone_number=teacher.phone_number,address=teacher.address,nic_number=teacher.nic_number)
    db.add(db_teacher)
    db.commit()
    db.refresh(db_teacher)
    return db_teacher

#delete teacher
def delete_teacher(db:Session,teacher_id:int):
    delete_row=db.query(Teacher).filter(Teacher.teacher_id==teacher_id).delete()
    db.commit()
    return delete_row

#update teacher
def update_teacher(db:Session,updated_teacher:Teacher,teacher_id:int):
     existing_teacher = db.query(Teacher).filter(Teacher.teacher_id == teacher_id).first()
     if existing_teacher:
        for key, value in updated_teacher.dict().items():
            setattr(existing_teacher, key, value)
        db.commit()
        return existing_teacher

#get all teachers
def get_teachers(db:Session,skip:int=0,limit:int=100):
    return db.query(Teacher).offset(skip).limit(limit).all()

#get teacher using teacher_id
def get_teacher(db:Session,teacher_id:int):
    return db.query(Teacher).filter(Teacher.teacher_id==teacher_id).first()

#get teacher using email
def get_teacher_by_email(db:Session,teacher_email:str):
    return db.query(Teacher).filter(Teacher.email==teacher_email).first()