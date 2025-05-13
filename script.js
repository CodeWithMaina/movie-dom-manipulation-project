// Checks if the html document has loaded
// This makes sure the html web is losded so that it can load the JS
document.addEventListener("DOMContentLoaded", function(){
    const list = document.querySelector("#movie-list ul")
    const forms = document.forms

    // delete a movie
    list.addEventListener("click", function(e){
        if (e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    })

    // add movies
    const addMovieForm = forms["add-movie"];
    addMovieForm.addEventListener("submit", function(e){
        e.preventDefault();
        const userInput = addMovieForm.querySelector('input[type="text"]').value;

        if(!userInput){
            alert("Please enter a movie name");
            return;
        }

    // Add a list to the movie list
    const li = document.createElement("li");
    const movieName = document.createElement("span")
    const deleteButton = document.createElement("span")

    // adding the content
    movieName.innerHTML = userInput;
    deleteButton.textContent = "Delete";

    // adding classes
    movieName.classList.add("name");
    deleteButton.classList.add("delete");

    // appanding child to parentNode
    li.appendChild(movieName);
    li.appendChild(deleteButton);

    list.appendChild(li);

    addMovieForm.reset()
    })

    
})
    


