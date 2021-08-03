import React, { useState } from 'react';
import "./App.css";

function Details(props) {
  // 상세 정보를 넣을 모달창
  return (
    <div className="modal">
      <h2>제목 : {props.postName[props.currentPostNum]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

function App() {
  // states
  let [postName, setPostName] = useState(['1번째 글', '2번째 글', '3번째 글']);   // 게시글 이름
  let [likeNum, setLikeNum] = useState([0, 0, 0]);          // 게시글의 좋아요 개수
  let [currentPostNum, setCurrentPostNum] = useState(0);    // 현재 누른 글의 번호
  let [visible, setVisiblity] = useState(false);            // 모달창 나타내기 여부
  let [inputData, setInputData] = useState('');              // 사용자가 input을 통해 입력한 값을 저장

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

  function addPost(nameOfPost) {
    // 새로운 글을 하나 만들어줌
    let newPostName = [...postName];
    newPostName.push(nameOfPost);
    setPostName(newPostName);

    let newLike = [...likeNum];
    newLike.push(0);
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
      
      <div className="publish">
        <h2>글 발행</h2>
        <input onChange={(e) => { setInputData(e.target.value) }}/>
        <button onClick={()=>{addPost(inputData)}}>저장</button>
      </div>

      {
        postName.map(function (posts, i) {
          // postName에 저장된 게시글들을 반복문으로 나타내주는 부분
          return (
            <div className="list" key={i}>
              <h3 onClick={() => { setCurrentPostNum(i) }}>{posts}<span onClick={() => { doLike(i) }}>👍</span>{likeNum[i]}</h3>
              <p>2월 7일 발행</p>
              <hr />
            </div>
          )
        })
      }

      {
        // visible이 true일 경우 modal창을 보여줌
        visible === true
          ? <Details postName={postName} currentPostNum={currentPostNum}></Details>
          : null
      }

      <button onClick={() => { changeName(0) }}>Change first post's name</button><br />
      <button onClick={() => { sortPostsByName(0) }}>Sort Posts</button>
      <button onClick={() => { setVisiblity(!visible) }}>Open/Close Modal</button>
    </div>
  );
}

export default App;