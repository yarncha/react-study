import React, { useState } from 'react';
import "./App.css";

function Modal() {
  // 모달창
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

function App() {
  // states
  let [postName, setPostName] = useState(['1번째 글', '2번째 글', '3번째 글']);   // 게시글 이름
  let [likeNum, setLikeNum] = useState([0, 0, 0]);    // 게시글의 좋아요 개수
  let [visible, setVisiblity] = useState(false);      // 모달창 나타내기 여부

  function changeName(indexOfPost) {
    // postNum번째 게시글의 이름을 바꿔줌
    let newPostName = [...postName];
    newPostName[indexOfPost] = 'e';
    setPostName(newPostName);
  }

  function doLike(indexOfLike) {
    // 좋아요 개수를 하나 눌러줌
    let newLike = [...likeNum];
    newLike[indexOfLike]++;
    setLikeNum(newLike);
  }

  function sortPostsByName() {
    // 게시글 이름에 따라 정렬
    let newPostName = [...postName];
    newPostName.sort();
    setPostName(newPostName);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>Mini Blog</div>
      </div>

      {
        postName.map(function (posts) {
          // postName에 저장된 게시글들을 반복문으로 나타내주는 부분
          return (
            <div className="list">
              <h3>{posts}<span onClick={() => { doLike(0) }}>👍</span>{likeNum[0]}</h3>
              <p>2월 7일 발행</p>
              <hr />
            </div>
          )
        })
      }

      <button onClick={() => { changeName(0) }}>Change first post's name</button><br />
      <button onClick={() => { sortPostsByName(0) }}>Sort Posts</button>
      <button onClick={() => { setVisiblity(!visible) }}>Open/Close Modal</button>

      {
        // visible이 true일 경우 modal창을 보여줌
        visible === true
          ? <Modal />
          : null
      }
    </div>
  );
}

export default App;