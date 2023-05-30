# sploot

step 1 : npm i
step 2: npm run start or npm run dev

curl --location 'localhost:8000/api/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Divya",
    "age": 24,
    "email": "divya13@gmail.com",
    "password": "divya@123"
}'


curl --location 'localhost:8000/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "divya@gmail.com",
    "password": "divya@123"
}'


curl --location 'localhost:8000/api/users/userdetails' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpdnlhQGdtYWlsLmNvbSIsImlhdCI6MTY4NTQ4NjI4NSwiZXhwIjoxNjg1NDg5ODg1fQ.tKhIQCGGmX8sQPMNJ_bXbiBgj9o5bTJY3IVmanGi0lE' \
--data ''


curl --location 'localhost:8000/api/users/64760605daed736f6b27605c/articles' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpdnlhQGdtYWlsLmNvbSIsImlhdCI6MTY4NTQ4NjI4NSwiZXhwIjoxNjg1NDg5ODg1fQ.tKhIQCGGmX8sQPMNJ_bXbiBgj9o5bTJY3IVmanGi0lE' \
--header 'Content-Type: application/json' \
--data '{
    "title":"Article Name",
    "description":"The two most important attributes of good articles are clarity and relevance."
}'


curl --location 'localhost:8000/api/articles' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpdnlhbmlnYW0xMzFAZ21haWwuY29tIiwiaWF0IjoxNjg1NDgxOTQ5LCJleHAiOjE2ODU0ODU1NDl9.skocEfbq4ada84xgG0atW6j9Zn7HNW-Yv8M06704R'


curl --location --request PUT 'localhost:8000/api/users/64760605daed736f6b27605c' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpdnlhbmlnYW0xMzFAZ21haWwuY29tIiwiaWF0IjoxNjg1NDg1MDAyLCJleHAiOjE2ODU0ODg2MDJ9.SrKtkgZcwGPHUW4VDWhkDj4DWUjVPcmmfnh8QKRh7nc' \
--header 'Content-Type: application/json' \
--data '{
    "name":"divya",
    "age":"24"
}'
