# Institute_Advance_Programming_assignment

Run Front end

cd front-end
yarn
yarn dev

 #for linux and mac users
 cd back-end
 python3 -m venv .venv                                          
 source .venv/bin/activate    
 uvicorn main.py
 uvicorn main:app --reload



 to migration
 alembic revision --autogenerate

 alembic upgrade head
 alembic downgrade base

# for windows user
 cd back-end
imstall possgress
download===>https://sbp.enterprisedb.com/getfile.jsp?fileid=1258792
install pg admin4
download===>  https://www.pgadmin.org/download/pgadmin-4-windows/
 python3 -m venv .venv
 Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
 python3 -m venv .venv
 pip install fastapi
 pip install uvicorn
 pip install sqlalchemy
 pip install psycopg2-binary



 uvicorn main:app --reload
