var answers = ["d","b","c","d","c","c","a","b","c","a","b","d","d","b","d","d","a","a","d","c","a","b","a","b","a","b","a","b","a","c","b","a","b","b","c"]
    tot = answers.length;

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
    if (getScore() > 0)
    {
    for (let i = 0; i < tot; i++) {
        document.getElementById("myresults1").innerHTML = answers.join(" , ");
        //console.log(answers[i]);
        //document.writeln(answers[i])
      }
    }
    else
    {
        document.getElementById("myresults1").innerHTML= "Give answer first" 
    }
}
