from flask import Flask, request, render_template, redirect     # Flask 웹 프레임워크에서 필요한 클래스와 함수를 임포트
import pymysql                                                  # Python의 MySQL 클라이언트 라이브러리인 pymysql을 임포트해서 Python에서 MySQL 데이터베이스와 연결 가능하게 한다

app = Flask(__name__)                                           # Flask 애플리케이션 객체를 생성 / __name__ 변수는 현재 실행 중인 스크립트의 이름을 나타냄

import json                                                     # JSON 데이터를 처리하기 위한 내장 라이브러리인 json을 임포트

with open('config.json', 'r') as file:                          # 'config.json' 파일을 읽기 모드('r')로 열고 이 파일 핸들을 file 변수에 할당 / with 문은 파일을 안전하게 열고 닫는 데 사용
    db_config = json.load(file)                                 # json.load(file)을 사용해 'config.json' 파일의 내용을 파이썬 딕셔너리로 읽어온다.

# 연결 함수
def get_db():
    return pymysql.connect(**db_config)

# 루트 URL로 접속할 때 실행되는 함수로, index.html 템플릿 파일을 렌더링하여 반환
@app.route('/')
def index():
    return render_template('index.html')

# URL로 접속할 때 실행되는 함수로, form.html 템플릿 파일을 렌더링하여 반환
@app.route('/form')
def form():
    return render_template('form.html')

@app.route('/apply', methods=['POST'])       # URL에 대한 POST 요청을 처리하는 함수를 정의
def apply():                                 # URL로 POST 요청이 올 때 실행되는 함수
 Name = request.form['Name']                 # HTML 폼으로부터 전송된 데이터를 각 변수에 할당 / Name 변수에는 폼의 'Name' 필드에 입력된 값을 저장
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


