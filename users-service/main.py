import os
import asyncpg
from fastapi import FastAPI

app = FastAPI()

async def get_db_connection():
    return await asyncpg.connect(
        user=os.getenv("DB_USER", "user"),
        password=os.getenv("DB_PASSWORD", "password"),
        database=os.getenv("DB_NAME", "ecommerce_db"),
        host=os.getenv("DB_HOST", "database"),
        port=os.getenv("DB_PORT", "5432")
    )

@app.get("/users")
async def get_users():
    conn = await get_db_connection()
    try:
        rows = await conn.fetch('SELECT * FROM "User"')
        return [dict(row) for row in rows]
    finally:
        await conn.close()
