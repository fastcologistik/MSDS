const information = document.getElementById('information');

fetch("errorPage.json")
.then(response=> response.json())
.then(data=>{
    information.textContent = data.error.page
})