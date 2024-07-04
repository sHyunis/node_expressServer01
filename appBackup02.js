const express = require('express');
// http 모듈을 사용하고 있음

const app = express();
// const port = 3000;
const fs = require('fs');
const path = require('path');
const cors = require('cors');

// get, post, delete, put, use, get, set
app.set('port', 3000); // set : 초기화 하는 함수
// app.set('view-engine', 'pug'); // html대신에 pug를 불러온다는 의미

// use : 자주 사용하는 코드를 생략하여 전처리하도록 만들어 주는 코드 (후처리도 가능)
app.use((req, res, next)=>{ // use // 무엇인가 실행하기 전에 전처리하는 콜백, 미들웨어
    console.log(req.url, req.method); // 처리 후
    next(); // 다음것 실행(처리)
});
app.use(cors()); // use는 등록시켜주는 도구 // cors : origin이 달라도 서로 데이터를 주고 받을 수 있다.
// cors : 데이터를 교환할 수 있는 사이트를 제한도 가능

app.use(express.static(path.join(__dirname, '/public')))
// 공용폴더를 지정할 수 있음

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'views', 'index.html')); 
    // res.render(path.join(__dirname, 'views', 'index.pug')); // render가 .pug 확장자인 파일을 html으로 변환시켜준다.
    // render : pug => html로 바꿔어서 응답 (express가 해준다)
});

// 위에서부터 순서대로, 물이 중력에 의해 떨어지는 것처럼, 차례대로 내려오면서 확인한다. : 워터폴 방식
// localhost:3000/users
// localhost:3000/login
// localhost:3000/product
app.get('/user', (req, res)=>{
    res.send('/user');
})
app.get('/login', (req, res)=>{
    res.send('/login');
})
app.get('/product', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'product.html'))
})
app.get('/ha_swap', (req, res)=>{
    res.sendFile(path.join(__dirname, 'ha_swap', 'ha_swap.html'))
})


// app.get('/*', (req, res)=>{
//     res.send('404')
// })
// app.post('/*', (req, res)=>{
//     res.send('404')
// })
// app.delete('/*', (req, res)=>{
//     res.send('404')
// })
// app.put('/*', (req, res)=>{
//     res.send('404')
// })

// => 4개 처리 해야 하는 것을 use 한번으로 처리 가능 => 후처리

// 후처리 : 예외 처리등도 후처리함
app.use('/*', (req, res)=>{ // 모든 처리는 404 => 후처리
    res.send('404');
})


app.listen(app.get('port'), () => { // 여기서의 get은 set된 것을 가져온다는 의미
    console.log(`SERVER ON, PORT NUM : ${app.get('port')}`);
})