from sqlalchemy.orm import Session
from db.models.classes import Class as ClassModel
from db.models.subject import Subject as SubjectModel
from db.models.teacher import Teacher as TeacherModel

from pydantec_schemas.classes import ClassCreate, Class


# create class
def create_class(db: Session, classes: ClassCreate):
    db_class = ClassModel(
        teacher_id=classes.teacher_id,
        subject_id=classes.subject_id,
        class_name=classes.class_name,
    )
    db.add(db_class)  # Add the instance to the session
    db.commit()
    db.refresh(db_class)
    return db_class


# get all classes
def get_classes(db: Session, skip: int = 0, limit: int = 100):

    classes = (
        db.query(ClassModel)
        .join(ClassModel.teacher)
        .join(ClassModel.subject)
        .offset(skip)
        .limit(limit)
        .all()
    )

    return classes


# get teacher using teacher_id
# def get_teacher(db:Session,teacher_id:int):
#     return db.query(Teacher).filter(Teacher.id==teacher_id).first()

# get teacher using email
# def get_teacher_by_email(db:Session,teacher_email:str):
#     return db.query(Teacher).filter(Teacher.email==teacher_email).first()
