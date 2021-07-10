let buttonSubmit = document.getElementById('button-submit')
buttonSubmit.addEventListener('click', () => {
    console.log('clicked')
    let ageInput = document.getElementById('age')
    let heightInput = document.getElementById('height')
    let weightInput = document.getElementById('weight')
    if (ageInput.value === "1" && heightInput.value === "29" && weightInput.value === "21") //if the input is incorrect
    {
        alert("you are fit")
    }
    else //if the input is correct
    {
        window.location = "/quiz";
    }

})