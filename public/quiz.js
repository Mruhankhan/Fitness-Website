function questionOutput(questionName)
{
    var radios = document.getElementsByName(`${questionName}-question`);
    var output;
    for (var i = 0; i < radios.length; i++)
    {
        if (radios[i].checked)
        {
            var selector = "label[for=" + radios[i].id + "]";
            var label = document.querySelector(selector);
            text = label.innerHTML
            output = [i, text];
            break;
        }
    }
    return output
}

function outputQuiz()
{
    let output = {
        "exercise" : questionOutput("exercise"), 
        "mental" : questionOutput("mental"), 
        "alcohol" : questionOutput("alcohol"), 
        "smoke" : questionOutput("smoke"), 
        "social" : questionOutput("social"), 
    };
    return output
}



