// DEPENDENCIES




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

// USER INTERACTIONS 

document.querySelector("form").addEventListener("submit", handleFormSubmit);




// INITIALIZATION






