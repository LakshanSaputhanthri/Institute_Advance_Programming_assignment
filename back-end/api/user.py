from typing import Optional,List
import fastapi
from pydantic import BaseModel

router=fastapi.APIRouter()

students=[]

class User(BaseModel):
    first_name=str
    last_name=str
    email=str
    user_name=str
    password=str

  
    
