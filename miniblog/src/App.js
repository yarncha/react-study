import React, { useState } from 'react';
import "./App.css";

function App() {
  let [postName, setPostName] = useState(['1번째 글', '2번째 글', '3번째 글']);
  let [likeNum, setLikeNum] = useState(0);

  function changeName(postNum) {
    let newPostName = [...postName];
    newPostName[postNum] = 'e';
    setPostName(newPostName);
  }

  function sortPosts() {
    let newPostName = [...postName];
    newPostName.sort();
    setPostName(newPostName);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div>
      </div>

      <div className="list">
        <h3>{postName[0]}<span onClick={() => { setLikeNum(likeNum + 1) }}>👍</span>{likeNum}</h3>
        <p>2월 7일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{postName[1]}<span>👍</span>{likeNum}</h3>
        <p>2월 7일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{postName[2]}<span>👍</span>{likeNum}</h3>
        <p>2월 7일 발행</p>
        <hr />
      </div>

      <button onClick={() => { changeName(0) }}>change first post name</button><br />
      <button onClick={() => { sortPosts(0) }}>Sort Posts</button>

      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;
