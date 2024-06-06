// DEPENDENCIES

const returnHome = document.getElementById('goBack');



// DATA

let storedBlogs = localStorage.getItem("blogs");
let blogs = storedBlogs ? JSON.parse(storedBlogs) : [];

// let newBlog = JSON.parse(localStorage.getItem('blogs'));


localStorage.getItem(storedBlogs);


console.log(storedBlogs);


// FUNCTIONS




function homeRedirect () {
    window.location.href="index.html";

}

// USER INTERACTIONS

returnHome.addEventListener('click', () => {
    homeRedirect()

});



// INITIALIZATION













