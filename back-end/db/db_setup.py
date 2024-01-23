from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base


SQLALCHEMY_DATABASE_URL = "postgresql+psycopg2://postgres:userpassword@localhost:5432/AP_STD_ATTENDANCE"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={},future=True
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine,future=True)

Base = declarative_base()
Base.metadata.create_all(bind=engine)


def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()