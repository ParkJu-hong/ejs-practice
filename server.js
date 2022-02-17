const express = require('express');
const app = express();

app.set('view engine', 'ejs');
// 아래와 같은 미들웨어를 사용하면 기본 디렉토리가 public부터 시작한다.
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    let testArr = [
        {title: '1', comment: '1'},
        {title: '2', comment: '2'},
        {title: '3', comment: '3'},
        {title: '4', comment: '4'},
    ]
    res.render('pages/index', {
        testArr : testArr
    });
})

app.post('/', (req, res) => {
    let isItOkay = 'isItOkay'; 
    res.render('pages/sidemain', {
        isItOkay : isItOkay
    });
})

app.listen(8080, ()=>{
    console.log(`Server on 8080`);
})