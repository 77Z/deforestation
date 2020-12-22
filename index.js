var question = 1;

document.addEventListener("keydown", (e) => {
    //if (e.preventDefault()) { return; }
    var key = e.key || e.keyCode;

    document.getElementById("no-input").innerText = "";

    if (key == "Enter") {
        switch (question) {
            case 1:
                if (document.getElementById("guess-1").value == "") {
                    yell();
                } else if (document.getElementById("guess-1").value == "5.25 billion" || document.getElementById("guess-1").value == "5,250,000,000" || document.getElementById("guess-1").value == "5250000000") {
                    //Correct
                    document.getElementById("trees-cut-question").innerHTML = "<h1>Correct! Good Job!</h1>";
                    document.getElementById("content-1").style.display = "none";
                    document.getElementById("content-2").style.display = "block";
                    question++;
                } else {
                    //Incorrect
                    document.getElementById("trees-cut-question").innerHTML = "<h1>Nope :/ 5.25 billion trees are cut down each year, crazy right?</h1>";
                    document.getElementById("content-1").style.display = "none";
                    document.getElementById("content-2").style.display = "block";
                    question++;
                }
                break;
            case 2:
                if (document.getElementById("guess-2").value == "") {
                    yell();
                } else if (document.getElementById("guess-2").value == "1.5 billion" || document.getElementById("guess-2").value == "1,500,000,000" || document.getElementById("guess-2").value == "1500000000") {
                    //Correct
                    document.getElementById("carbon-released-question").innerHTML = "<h1>CoRrEcT!</h1>";
                    document.getElementById("content-2").style.display = "none";
                    document.getElementById("content-3").style.display = "block";
                    question++;
                } else {
                    //Incorrect
                    document.getElementById("carbon-released-question").innerHTML = "<h1>Not Quite, 1.5 billion tons of are released</h1>";
                    document.getElementById("content-2").style.display = "none";
                    document.getElementById("content-3").style.display = "block";
                    question++;
                }
                break;
            case 3:
                if (document.getElementById("guess-3").value == "") {
                    yell();
                } else if (document.getElementById("guess-3").value == "1.5 billion" || document.getElementById("guess-3").value == "1,500,000,000" || document.getElementById("guess-3").value == "1500000000") {
                    //Correct
                    document.getElementById("palm-oil-land-question").innerHTML = "<h1>CoRrEcT!</h1>";
                    document.getElementById("content-3").style.display = "none";
                    document.getElementById("content-4").style.display = "block";
                    question++;
                } else {
                    //Incorrect
                    document.getElementById("palm-oil-land-question").innerHTML = "<h1>Incorrect. 877 thousand acres </h1>";
                    document.getElementById("content-3").style.display = "none";
                    document.getElementById("content-4").style.display = "block";
                    question++;
                }
                break;
        }
        //document.getElementById("content-1").style.display = "none";
    }
});

function yell() {
    document.getElementById("no-input").innerText = "You gotta guess something!";
}