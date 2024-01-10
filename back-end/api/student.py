from typing import Optional,List
import fastapi
from pydantic import BaseModel

router=fastapi.APIRouter()

students=[]

class Student(BaseModel):
    first_name: str
    last_name: str
    email: str
    phone_number: str
    address: str
    date_of_birth: str
    
@router.get("/students",response_model=List[Student])
async def get_students():
    return students
@router.post("/students",response_model=List[Student])
async def get_students():
    return students
@router.get("/students/{id}",response_model=List[Student])
async def get_students(id):
    return students
@router.put("/students/{id}",response_model=List[Student])
async def get_students():
    return students
@router.delete("/students/{id}",response_model=List[Student])
async def get_students():
    return students