require('dotenv').config();
const express = require('express');
const app = express();
let message = null

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


// app.get('/', (req, res) => {
//   res.render('index');
// });



app.get('/', (req, res) => {
  var bmi = 0
  bmi = (req.query['weight']) / ((req.query['height'] / 100)**2)
  console.log(`With weight ${req.query['weight']} kg and height ${req.query['height']} cm Your BMI is${bmi}`)
  console.log(messageBmi)
  message = messageBmi(bmi)
  console.log(message)
  res.render("index", {message});
});
