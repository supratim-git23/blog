var answers = ["c","b","a","b","a","c","b","d","c","a","b","c","b","c","b","b","b","c","d","b","b","b","b","b","c"]
    tot = answers.length;

var user_ans =[];  

function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}
function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
    
        if (getCheckedValue("question" + i) === answers[i]) score += 1;
    return score;
    
}
function returnScore() 
{
    document.getElementById("myresults").innerHTML = "Your score is " + getScore() + "/" + tot;
    if (getScore() > 15)
    {        
        document.getElementById("myresults2").innerHTML = "Good";
    }
    else
    {
        document.getElementById("myresults2").innerHTML = "Please do better";
    }
}
 
function correctAns() 
{
  // generate the table of result
let resultsTable = '<table border="1"><tr><th>Question</th><th>Your Answer</th><th>Correct Answer</th></tr>';

for (let i = 0; i < tot; i++) {
    user_ans.push(getCheckedValue("question" + i) || "No Answer");
    const userAnswer = user_ans[i];
    const correctAnswer = answers[i];
    const isCorrect = userAnswer === correctAnswer;

    // Add a row to the table
    resultsTable += `<tr>
                        <td>Question ${i + 1}</td>
                        <td style="color: ${isCorrect ? 'black' : 'red'};">${userAnswer}</td>
                        <td>${correctAnswer}</td>
                     </tr>`;
}

resultsTable += '</table>';

// Display the results in the "results" div
document.getElementById("results").innerHTML = resultsTable;
}


function refreshRadioButtons() {
    // Select all radio buttons with the class 'refreshRadio'

    for (let i = 0; i < tot; i++) {

    const radios = document.getElementsByName("question" + i);

    // Iterate through each radio button and uncheck it
    radios.forEach(radio => {
        radio.checked = false;
    });
    }

    const div = document.getElementById("results");
    
    // Store the original HTML content of the div
    const originalContent = `
    <table border="1"><tr><th>Question</th><th>Your Answer</th><th>Correct Answer</th></tr>
    `;
    
    // Set the innerHTML of the div to the original content to refresh it
    div.innerHTML = originalContent;
    user_ans =[];  
}
