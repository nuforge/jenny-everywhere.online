console.log('Hello World! 😁')

function fetch_story() {
    let storyHTML = ''
    fetch("story.md")
        .then((result) => result.text())
        .then((text) => {
            storyHTML = marked.parse(text)
            document.getElementById('story-body').innerHTML = storyHTML
            console.log(storyHTML)
        })
        .catch((e) => console.error(e));
}

function randomAvatar(maxValue) {
    return (Math.floor(Math.random() * maxValue) + 1).toString().padStart(2, 0)
}

function toggleSocialButton(objButton) {
    objButton.classList.toggle('state-off');

}