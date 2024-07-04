const express = require('express');
// http 모듈을 사용하고 있음

const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

// 전역 변수 : __dirname, __filename
// 전역 객체 : process


// 미들웨어 : 함수(express가 함수를 만들어 놓음), 자주 사용하는 기능들을 구현해 둔 함수
// get, post, delete, put, use, set, get(다른get : 값을 가져올때 사용한다), ...
// http://localhost:3000

// app.use(express.static(path.join(__dirname, '/public')))
// 공용폴더를 지정할 수 있음

app.get('/', (req, res) => { // 이렇게 하면 라우터가 걸린다.
    // res.writeHead(200, {'Content-Type': 'text/plain'})
    // res.write('Hello GET!');
    // res.end();
    // 이 세줄을 아래 한줄로 요약시킨것

    res.sendFile(path.join(__dirname, 'views', 'index.html')); // 파일을 알아서 찾아서 파일로 응답
    // res.send('Hello GET!')
})
app.post('/', (req, res) => {
    res.send('Hello POST!')
})
app.delete('/', (req, res) => {
    res.send('Hello DELETE!')
})
app.put('/', (req, res) => {
    res.send('Hello PUT!')
})
app.patch('/', (req, res) => {
    res.send('Hello PATCH!')
})

// 위에서부터 순서대로, 물이 중력에 의해 떨어지는 것처럼, 차례대로 내려오면서 확인한다. : 워터폴 방식
// localhost:3000/users
// localhost:3000/login
// localhost:3000/product
app.get('/user', (req, res)=>{
    console.log(req.url, req.method);
    res.send('/user');
})
app.get('/login', (req, res)=>{
    console.log(req.url, req.method);
    res.send('/login');
})
app.get('/product', (req, res)=>{
    console.log(req.url, req.method);
    // res.send('/product');
    res.sendFile(path.join(__dirname, 'views', 'product.html'))
})
app.get('/ha_swap', (req, res)=>{
    res.sendFile(path.join(__dirname, 'ha_swap', 'ha_swap.html'))
})

app.listen(port, () => {
    console.log(`SERVER ON, PORT NUM : ${port}`)
})