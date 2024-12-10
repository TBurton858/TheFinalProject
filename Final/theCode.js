//This function will add sound to the page
function addSound()
{
    //Create a new audio HTML element
    var soundElem = document.createElement("audio");
    //Nickname/shortcut to the play button
    var btnPlay = document.getElementById("btnPlay");
    //Nickname/shortcut to the pause button
    var btnPause = document.getElementById("btnPause");

    //Set up the id = "audioSound" attribute on our audio element
    soundElem.setAttribute("id", "audioSound");

    //Set up the src = "us-lab-background.mp3"
    //src = source = the file name
    soundElem.setAttribute("src", "us-lab-background.mp3");

    //Add the audio element that we just created to the HTML page
    document.body.appendChild(soundElem);

    //Un-hide the play and pause buttons
    btnPlay.hidden = false;
    btnPause.hidden = false;
}

//Set up the function to play the sound
function playSound()
{
    //Set up a nickname/shortcut to the audio element that we created in the addSound() function
    var audio = document.getElementById("audioSound");
    //Start playing the audio
    audio.play();
    //Log the playing started to the console because of sound issues on this computer
    console.log("sound playing");
}

//Set up the function to pause the playing of the sound
function pauseSound()
{
    //Set up a nickname/shortcut to the audio element that we created in the addSound() function
    var audio = document.getElementById("audioSound");
    //Pause the playing of the sound
    audio.pause();
    //Log the playing paused to the console because of sound issues on this computer
    console.log("sound stoped");
}