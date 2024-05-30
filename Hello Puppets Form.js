

	//Radiobox submission function One
formElem = document.getElementById("formId");

	let radioSubmitButton = document.getElementById('submitAnswer');
radioSubmitButton.addEventListener('click' , function() {
let radioButtons = formElem.videogame_q;
for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
       value = radioButtons[i].value;
        document.getElementById('radioResults').textContent = radioButtons[i].value;   
    }
}
});


//Radiobox submission function Two
let radioSubmitButtonTwo = document.getElementById('submitAnswerTwo');
radioSubmitButtonTwo.addEventListener('click' , function() {
let radioButtonsTwo = formElem.puppets;
for (let i = 0; i < radioButtonsTwo.length; i++) {
    if (radioButtonsTwo[i].checked) {
       value = radioButtonsTwo[i].value;
        document.getElementById('radioResultsTwo').textContent = radioButtonsTwo[i].value;   
    }
}
});

//Radiobox submission function Three
let radioSubmitButtonThree = document.getElementById('submitAnswerThree');
radioSubmitButtonThree.addEventListener('click' , function() {
let radioButtonsThree = formElem.spells;
for (let i = 0; i < radioButtonsThree.length; i++) {
    if (radioButtonsThree[i].checked) {
       value = radioButtonsThree[i].value;
        document.getElementById('radioResultsThree').textContent = radioButtonsThree[i].value;   
    }
}
});

//Radiobox submission function Four
let radioSubmitButtonFour = document.getElementById('submitAnswerFour');
radioSubmitButtonFour.addEventListener('click' , function() {
let radioButtonsFour = formElem.year;
for (let i = 0; i < radioButtonsFour.length; i++) {
    if (radioButtonsFour[i].checked) {
       value = radioButtonsFour[i].value;
        document.getElementById('radioResultsFour').textContent = radioButtonsFour[i].value;   
    }
}
});

//Radiobox submission function Five
let radioSubmitButtonFive = document.getElementById('submitAnswerFive');
radioSubmitButtonFive.addEventListener('click' , function() {
let radioButtonsFive = formElem.dog;
for (let i = 0; i < radioButtonsFive.length; i++) {
    if (radioButtonsFive[i].checked) {
       value = radioButtonsFive[i].value;
        document.getElementById('radioResultsFive').textContent = radioButtonsFive[i].value;   
    }
}
});

//Radiobox submission function Six
let radioSubmitButtonSix = document.getElementById('submitAnswerSix');
radioSubmitButtonSix.addEventListener('click' , function() {
let radioButtonsSix = formElem.actorName;
for (let i = 0; i < radioButtonsSix.length; i++) {
    if (radioButtonsSix[i].checked) {
       value = radioButtonsSix[i].value;
        document.getElementById('radioResultsSix').textContent = radioButtonsSix[i].value;   
    }
}
});

//Radiobox submission function Seven
let radioSubmitButtonSeven = document.getElementById('submitAnswerSeven');
radioSubmitButtonSeven.addEventListener('click' , function() {
let radioButtonsSeven = formElem.passion;
for (let i = 0; i < radioButtonsSeven.length; i++) {
    if (radioButtonsSeven[i].checked) {
       value = radioButtonsSeven[i].value;
        document.getElementById('radioResultsSeven').textContent = radioButtonsSeven[i].value;   
    }
}
});

//Radiobox submission function Eight
let radioSubmitButtonEight = document.getElementById('submitAnswerEight');
radioSubmitButtonEight.addEventListener('click' , function() {
let radioButtonsEight = formElem.danger;
for (let i = 0; i < radioButtonsEight.length; i++) {
    if (radioButtonsEight[i].checked) {
       value = radioButtonsEight[i].value;
        document.getElementById('radioResultsEight').textContent = radioButtonsEight[i].value;   
    }
}
});

//Radiobox submission function Nine
let radioSubmitButtonNine = document.getElementById('submitAnswerNine');
radioSubmitButtonNine.addEventListener('click' , function() {
let radioButtonsNine = formElem.danger;
for (let i = 0; i < radioButtonsNine.length; i++) {
    if (radioButtonsNine[i].checked) {
       value = radioButtonsNine[i].value;
        document.getElementById('radioResultsNine').textContent = radioButtonsNine[i].value;   
    }
}
});

//Radiobox submission function Ten
let radioSubmitButtonTen = document.getElementById('submitAnswerTen');
radioSubmitButtonTen.addEventListener('click' , function() {
let radioButtonsTen = formElem.question_10;
for (let i = 0; i < radioButtonsTen.length; i++) {
    if (radioButtonsTen[i].checked) {
       value = radioButtonsTen[i].value;
        document.getElementById('radioResultsTen').textContent = radioButtonsTen[i].value;   
    }
}
});
