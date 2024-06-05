// DEPENDENCIES
// const themeSwitcher = document.querySelector('#theme-switcher');
// const container = document.querySelector('.container');

// const modeToggle = document.getElementById('toggle');
// const body = document.body;

// DATA




// FUNCTIONS
function handleFormSubmit (event) {
    event.preventDefault();
    const userName = document.querySelector("#username").value;
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    if (!userName || !title || !content) {
        const errorEl = document.querySelector("#error");
        errorEl.textContent = "Please complete all fields"
        setTimeout(function(){
            errorEl.textContent = "";
        },3000)
    } else {
        const blogData= {
            userName:userName, title:title, content:content
        }
        handleSaveBlog(blogData);
        handleRedirect();
    }
}

function handleSaveBlog (blogData) {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.push(blogData);
    localStorage.setItem("blogs",JSON.stringify(blogs));

}

function handleRedirect () {
    window.location.href="blog.html";

}


// modeToggle.addEventListener('click', () => {

//     // are we in dark mode?
//         // yes? remove dark mode styles & add light mode styles
//         // not? remove light mode styles & add dark mode styles

//     body.classList.toggle('dark-mode');
//     body.classList.toggle('light-mode');
// });

// USER INTERACTIONS 

document.querySelector("form").addEventListener("submit", handleFormSubmit);




// INITIALIZATION






