setTimeout(() => {
    console.log("This message is delayed by 2 seconds.");
  }, 2000);
  
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.body.innerHTML += `<h1>${data.title}</h1><p>${data.body}</p>`;
    });
  