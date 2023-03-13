/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    let post = '역삼 우동 맛집';
    // document.querySelector('h4').innerHTML = post;
    let [글제목 ,b] = useState(['여자 코트 추천','강남 우동 맛집','파이썬독학']);
    let [logo ,setLogo] = useState('ReactBlog');
    let [따봉,따봉변경] = useState(0);

    function 함수(){
        console.log(1);
    }

    /*
    destructuring 문법
    let num = [1,2];
    
    let [a,c] = [1,2];
    ===
    let a = num[0] -> 1
    let c = num[1] -> 2
    * */

    test
  return (
    <div className="App">
        <div className="black-nav">
            <h4>ReactBlog</h4>
        </div>
        <button onClick={ () => {
            let copy = [...글제목]
            copy.sort();
            b(copy);
        }}>가나다라마바사</button>
        <button onClick={() => {
            let copy = [...글제목];
            copy[0] = '여자 코트 변경';
            b(copy);

        }}>버튼</button>
        <div className="list">
            <h4>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1)} }>👍</span>{ 따봉 }</h4>
            <p>2월 17일 발행</p>
        </div>
        <div className="list">
            <h4>{ 글제목[1] }</h4>
            <p>2월 17일 발행</p>
        </div>
        <div className="list">
            <h4>{ 글제목[2] }</h4>
            <p>2월 17일 발행</p>
        </div>
        <h4>{ post }</h4>
    </div>
  );
}

export default App;
