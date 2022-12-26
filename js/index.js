let api =  "https://jsonplaceholder.typicode.com/posts";

const container = document.querySelector("#container");

fetch(api)
    .then((data)=>{
        return data.json()
    })
    .then(data =>{
        data.forEach(data => {
            container.innerHTML += `<p class="bg-danger">${data.id}</p>
            <p class="bg-dark text-light">${data.userId}</p>
            <p class="bg-primary">${data.body}</p>`
        });
    })