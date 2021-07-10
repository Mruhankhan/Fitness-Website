require('dotenv').config();
const fs = require('fs')
const { json } = require('express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

function messageBmi(bmi)
{
    if (bmi <= 0){
      return null
    }
    if (bmi < 18.5)
    {
        return "underweight";
    }
    if (18.5 <= bmi && bmi <= 24.9)
    {
        return "healthy";
    }
    if (25 <= bmi && bmi <= 29.9)
    {
        return "overweight";
    }
    if (bmi > 30)
    {
        return "obesity";
    }
}

app.use(express.static('public'));

app.set('view engine', 'ejs');

const port  = process.env.PORT | 8000;

app.listen(port, () => {
  console.log(`Server starting on port ${port}...`);
}); 


 app.get('/', (req, res) => {
   const message = "..."
   res.render('index', {message});
 });

app.post('/', (req, res) => {
  console.log(req.body)
  const bmi = (req.body.weight) / ((req.body.height / 100)**2)
  console.log(`With weight ${req.body.weight} kg and height ${req.body.height} cm Your BMI is${bmi}`)
  const message = messageBmi(bmi)
  console.log(message)
  res.render("index", {message});
});

//const j = JSON.parse(fs.readFileSync('./weights.json'))
//console.log(j)