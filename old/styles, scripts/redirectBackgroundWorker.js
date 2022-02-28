var counter = 3;

function CounterTick(){
    counter--;
    document.getElementById("counterElement").innerHTML = counter;
}

function RedirectToHomepage(){
    setInterval(CounterTick, 1000);
    console.log("redirect in 3000 millis...");
    setTimeout(function(){
                window.location = 'articles\\homepage\\index.html';
            }, 3000);
}
