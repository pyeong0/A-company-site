import React, { useEffect, useState } from 'react';
import axios from 'axios'

const App = () => {

  const [images, setImages] = useState([]);   // images: 불러온 강아지 이미지의 URL들을 저장하는 배열
  const [dogCount, setDogCount] = useState(1); // dogCount: 사용자가 원하는 강아지의 수를 저장하는 변수.  기본으로 1마리의 강아지를 가져옴.

  // useEffect 훅. 애플리케이션이 처음 로드될 때 1마리의 강아지 사진을 자동으로 불러옴.
  useEffect(() => {
    fetchDogs(dogCount);
  }, []);

  // 이 함수는 원하는 수(count)만큼의 강아지 사진을 API를 통해 불러옴. 불러온 사진의 URL들은 images 상태에 저장됨.
  const fetchDogs = async (count) => {
    try {
      const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${count}`)
      setImages(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <input 
        type="number" 
        value={dogCount} 
        onChange={(e) => setDogCount(e.target.value)}
        placeholder="강아지 수를 입력하세요"
      />
      <button onClick={() => fetchDogs(dogCount)}>
        이미지 가져오기
      </button> 
      <br />
      {images.map((image, index) => (                                        // images 상태에 저장된 강아지 사진 URL들을 map 함수를 사용하여 순회하면서 화면에 이미지 태그로 표시
        <img key={index} src={image} alt="랜덤 강아지 이미지" width="300" height="300" />
      ))}
    </>
  );
}

export default App;
