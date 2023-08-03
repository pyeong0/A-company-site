from flask import Flask, request, render_template, redirect
import pymysql

app = Flask(__name__)

import os

db_config = {
    'host': os.getenv('DB_HOST', 'localhost'),
    'port': int(os.getenv('DB_PORT', 3306)),
    'user': os.getenv('DB_USER', 'root'),
    'password': os.getenv('DB_PASSWORD', '53955395'),
    'database': os.getenv('DB_DATABASE', 'myweb')
}

# 연결 함수
def get_db():
    return pymysql.connect(**db_config)

# connection = pymysql.connect(**db_config)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/form')
def form():
    return render_template('form.html')

@app.route('/apply', methods=['POST'])
def apply():
 Name = request.form['Name']
 Hp = request.form['Hp']
 Mail_address = request.form['Mail_address']
 Portfolio_url = request.form['Portfolio_url']
 Residence = request.form['Residence']
 Introduce = request.form['Introduce']
 
 # 데이터베이스에 연결하고 커서 생성
 connection = get_db()
 cursor = connection.cursor()

 # DB에 저장
 cursor.execute("INSERT INTO applicant_info (Name, Hp, Mail_address, Portfolio_url, Residence, Introduce) VALUES (%s, %s, %s, %s, %s, %s)", (Name, Hp, Mail_address, Portfolio_url, Residence, Introduce))

 # 변경사항 커밋
 connection.commit()
 
 # 커서 및 연결 닫기
 cursor.close()
 connection.close()
 
 # 지원 성공 페이지로 리다이렉션
 return redirect('/success') 

@app.route('/success')
def success():
  return "지원이 성공적으로 완료되었습니다! 지원해주셔서 감사합니다."

if __name__ == "__main__":
    app.run(debug=True)


