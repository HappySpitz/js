let container = document.createElement('div');
container.classList.add('box');

let h1 = document.createElement('h1');
h1.classList.add('title');
h1.innerText = 'Post-details';

let url = new URL(location.href);
let id = url.searchParams.get("id");

let div = document.createElement('div');
div.classList.add('elements');

fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(response => response.json())
    .then(valuePost => {
        for (const info in valuePost) {
            const divInfo = document.createElement('div');
            divInfo.classList.add('postInfo')
            if (typeof valuePost[info] !== 'object') {
                divInfo.innerText = `${info}: ${valuePost[info]}`
            } else {
                for (const key in valuePost[info]) {
                    const divInfoKey = document.createElement('div');
                    if (typeof valuePost[info][key] !== 'object') {
                        divInfoKey.innerText = `${key}: ${valuePost[info][key]}`
                    } else {
                        divInfoKey.innerText = `${key}:`
                        for (const element in valuePost[info][key]) {
                            const elementInfoKey = document.createElement('div');
                            if (typeof valuePost[info][key][element] !== 'object') {
                                elementInfoKey.innerText = `${element}: ${valuePost[info][key][element]}`
                            }
                            divInfoKey.append(elementInfoKey)
                        }
                    }
                    divInfo.append(divInfoKey)
                }
            }
            div.append(divInfo)
        }

        let buttonComments = document.createElement('button');
        buttonComments.innerText = ('comments');
        buttonComments.classList.add('btn')
        div.appendChild(buttonComments);
        buttonComments.onclick = function (e) {
            fetch('https://jsonplaceholder.typicode.com/post/' + id + '/comments')
                .then(response => response.json())
                .then(valueComments => {
                    const comments = document.createElement('div');
                    comments.classList.add('boxComments')
                    for (const info of valueComments) {
                        const divInfo = document.createElement('div');
                        divInfo.classList.add('comment');
                        divInfo.innerText = `Comment: ${info.body}`;
                        comments.append(divInfo);
                        buttonComments.disabled = true;
                    }
                    div.append(comments)
                })
        }
    })
container.append(h1, div);
document.body.append(container)