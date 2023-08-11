import { useState } from 'react'
import "./App07.css"
import React from 'react';

function getLottoColorClass(num) {
    if (num >= 1 && num <= 10) return "yellow";
    if (num >= 11 && num <= 20) return "blue";
    if (num >= 21 && num <= 30) return "red";
    if (num >= 31 && num <= 40) return "black";
    if (num >= 41 && num <= 45) return "green";
    return "";
  }
  

function App(){
  
  const [lottoNumbers, setLottoNumbers] = useState([])

  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const now = `${year}년 ${month}월 ${date}일 `

  return <div className="container">
    <div className="lotto">
      <h3><span>{now}</span>로또 번호 추첨</h3>
      <div className="numbers">
        {lottoNumbers.map((num, idx) => {
          return  <div className={`eachnum ${getLottoColorClass(num)}`} key={idx}>{num}</div>
        })}
      </div>
      <button onClick={() => {
        const lottoNumbers = []
        while(lottoNumbers.length < 6){
          let ran = Math.floor(Math.random() * 45) + 1
          if(lottoNumbers.indexOf(ran) === -1){
            lottoNumbers.push(ran)
          }
        }
        setLottoNumbers(lottoNumbers)
      }}>추첨</button>
      <button onClick={() => {
        setLottoNumbers([])
      }}>다시</button>
    </div>
</div>
}

export default App;