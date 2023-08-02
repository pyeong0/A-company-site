from flask import Flask, render_template
import pymysql

app = Flask(__name__)

@app.route('/')
def index():
    db_conn = pymysql.connect(host='localhost', user='your_mysql_user',
            password='your_mysql_password', database='testdb',
            autocommit=True, cursorclass=pymysql.cursors.DictCursor)
    with db_conn:
        db_cursor = db_conn.cursor()
        db_cursor.execute("SELECT * FROM users")
        users = db_cursor.fetchall()
    db_conn.close()

    return render_template('html/index.html', users=users)

if __name__ == "__main__":
    app.run(debug=True)