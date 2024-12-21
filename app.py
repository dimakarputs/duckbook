import pyodbc
from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

# Настройки подключения к базе данных
conn_str = 'Driver={ODBC Driver 17 for SQL Server};Server=dimka\\MSSQLSERVER01;Database=Duckbook;Integrated Security=True;'

# Функция для подключения к базе данных
def get_db_connection():
    conn = pyodbc.connect(conn_str)
    return conn

# Главная страница с формой
@app.route('/')
def profile():
    return render_template('profile.html')

# Обработка отправки формы
@app.route('/save', methods=['POST'])
def save_user():
    # Получаем данные из формы
    surname = request.form['user_surname']
    name = request.form['user_name']
    patronymic = request.form['user_patronymic']
    phone = request.form['user_mail']
    password = request.form['user_number']

    # Валидация данных (можно добавить дополнительные проверки)
    if not surname or not name or not patronymic or not phone or not password:
        return 'Все поля должны быть заполнены!'

    # Запись в базу данных
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO User (Lname, Fname, Nickname, Number, Password)
        VALUES (?, ?, ?, ?, ?)
    ''', (surname, name, patronymic, phone, password))
    conn.commit()
    cursor.close()
    conn.close()

    return redirect(url_for('profile'))  # Перенаправляем обратно на страницу профиля

if __name__ == '__main__':
    app.run(debug=True)

