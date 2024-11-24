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