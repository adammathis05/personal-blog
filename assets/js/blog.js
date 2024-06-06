// DEPENDENCIES

const returnHome = document.getElementById('goBack');
//break


//break


// DATA

let storedBlogs = localStorage.getItem("blogs");
let blogs = storedBlogs ? JSON.parse(storedBlogs) : [];

// let newBlog = JSON.parse(localStorage.getItem('blogs'));

function renderLastRegistered() {
    const renderNewBlog = localStorage.getItem(storedBlogs);
    
}




console.log(storedBlogs);


// FUNCTIONS
// break


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}



// break
function homeRedirect () {
    window.location.href="index.html";

}

// USER INTERACTIONS

returnHome.addEventListener('click', () => {
    homeRedirect()

});



// INITIALIZATION













