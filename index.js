require('dotenv').config();
const express = require('express');
const app = express();


app.use(express.static('public'));

app.set('view engine', 'ejs');

const port  = process.env.PORT | 8000;

app.listen(port, () => {
  console.log(`Server starting on port ${port}...`);
}); 


app.get('/', (req, res) => {
  res.render('index');
});


app.post('/results', (req, res) =>{
  let bmi = req.body['height'] / req.body['weight']**2
  console.log(req)
  console.log(bmi)
  res.render('results')
})


app.get('/quiz', (req, res) => {

  res.render('quiz');
});
