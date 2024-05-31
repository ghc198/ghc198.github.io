function getRandomSubtitle() {
    var subtitles = [
        "Hey there!",
        "This website exists",
        "One of the best game websites on the internet!",
        "Github rules!",
        "there will be no discord server",
        "You can use it on an iPad, but NOT on a phone"
    ]
    var randomIndex = Math.floor(Math.random() * subtitles.length);
    return subtitles[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomSubtitle();