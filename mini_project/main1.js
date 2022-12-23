let container = document.createElement('div');
container.classList.add('box');

let h1 = document.createElement('h1');
h1.classList.add('title');
h1.innerText = 'User-details';

let url = new URL(location.href);
let id = url.searchParams.get("id");

let div = document.createElement('div');
div.classList.add('elements');

fetch('http://jsonplaceholder.typicode.com/users/' + id)
    .then(response => response.json())
    .then(value => {
        for (const info in value) {
            const divInfo = document.createElement('div');
            divInfo.classList.add('userInfo')
            if (typeof value[info] !== 'object') {
                divInfo.innerText = `${info}: ${value[info]}`
            } else {
                divInfo.innerText = `${info}:`
                for (const key in value[info]) {
                    const divInfoKey = document.createElement('div');
                    if (typeof value[info][key] !== 'object') {
                        divInfoKey.innerText = `${key}: ${value[info][key]}`
                    } else {
                        divInfoKey.innerText = `${key}:`
                        for (const element in value[info][key]) {
                            const elementInfoKey = document.createElement('div');
                            if (typeof value[info][key][element] !== 'object') {
                                elementInfoKey.innerText = `${element}: ${value[info][key][element]}`
                            }
                            divInfoKey.append(elementInfoKey)
                        }
                    }
                    divInfo.append(divInfoKey)
                }
            }
            div.append(divInfo)
        }

        let button = document.createElement('button');
        button.classList.add('btn')
        button.innerText = ('post of current user');
        div.appendChild(button);
        button.onclick = function (e) {
            fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
                .then(response => response.json())
                .then(value => {
                    const posts = document.createElement('div');
                    posts.classList.add('boxPosts')
                        for (const item of value) {
                            const divItem = document.createElement('div');
                            divItem.classList.add('post');
                            divItem.innerText = `Post: ${item.title}`;
                            const a = document.createElement('a');
                            a.classList.add('link');
                            a.innerText = '=> post-info <=';
                            id = `${item.id}`
                            a.href = 'post_details.html?id=' + id;
                            divItem.append(a);
                            posts.append(divItem)
                    }
                    div.append(posts)
                })
        }
    })
container.append(h1, div)
document.body.append(container)