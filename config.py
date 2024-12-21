# config.py

DATABASE_CONNECTION_STRING = "Server=dimka\MSSQLSERVER01;Database=Duckbook;Integrated Security=True;"


import pyodbc

def get_db_connection():
    conn_str = r'DRIVER={ODBC Driver 17 for SQL Server};SERVER=DIMKA\MSSQLSERVER01;DATABASE=Duckbook;Trusted_Connection=yes;'
    conn = pyodbc.connect(conn_str)
    return conn

# Пример использования:
conn = get_db_connection()
cursor = conn.cursor()
cursor.execute("SELECT * FROM Users")
rows = cursor.fetchall()
for row in rows:
    print(row)
conn.close()
