from sqlalchemy.orm import Session
from db.models.subject import Subject
from pydantec_schemas.subject import SubjectCreate


# create subject
def create_subject(db: Session, subject: SubjectCreate):
    db_subject = Subject(subject_name=subject.subject_name)
    db.add(db_subject)
    db.commit()
    db.refresh(db_subject)
    return db_subject


# delete subject
def delete_subject(db: Session, subject_id: int):
    delete_row = db.query(Subject).filter(Subject.id == subject_id).delete()
    db.commit()
    return delete_row


# get all subject
def get_subjects(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Subject).offset(skip).limit(limit).all()
