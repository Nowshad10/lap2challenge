const {getAllPosts, getPost, post} = require('./requests');

window.addEventListener('hashchange', update);
window.addEventListener('load', update);


const inputForm = document.getElementById('input-form')
inputForm.addEventListener('submit', post);

const form = document.getElementById('form');
const postContent = document.querySelector('#post');

async function update() {
    let hash = window.location.hash.substring(1);
    if (hash) {
        let data = await getPost(hash);
        form.classList.add("hidden");
        postContent.classList.remove("hidden")
        if (typeof data !== 'undefined') {
            document.querySelector("#post-title").textContent = data.title;
            document.querySelector("#post-name").textContent = `${data.author}`;
            document.querySelector("#post-body").textContent = data.body;
        } else {
            document.querySelector("#post-title").textContent = 'Post does not exist'
        }
    } else {
        document.querySelector("#post-title").textContent = "";
        document.querySelector("#post-name").textContent = "";
        document.querySelector("#post-body").textContent = "";
        form.classList.remove("hidden");
        postContent.classList.add("hidden");
        fadeClassChecker(document.querySelector('#title'))
        fadeClassChecker(document.querySelector('#author'))
        fadeClassChecker(document.querySelector('#body'))
    }
}

function fadeClassChecker(input) {
    let label = document.querySelector(`.label-${input.id}`);
    if(!input.value){
        label.classList.remove('fade');
        label.classList.add('fade-hidden');
    } else {
        label.classList.remove('fade-hidden');
        label.classList.add('fade');
    }
}

document.querySelector('.back-btn').addEventListener('click', () => {
    window.location.hash = ''
});

document.querySelector("#title").addEventListener('input', updateLabels)
document.querySelector("#author").addEventListener('input', updateLabels)

document.querySelector("#body").addEventListener('input', updateLabels)

function updateLabels(e) {
    fadeClassChecker(e.target)
};



