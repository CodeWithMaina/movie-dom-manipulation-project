// Wait for the page to load before running the script
document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#movie-list ul");
  const forms = document.forms;

  // Handle click events on the movie list
  list.addEventListener("click", function (e) {
    // Delete movie when delete button is clicked
    if (e.target.className === "delete") {
      const li = e.target.parentElement.parentElement;
      li.parentNode.removeChild(li);
    }

    // Edit movie when edit button is clicked
    else if (e.target.className === "edit") {
      const li = e.target.parentElement.parentElement;
      const movieNameSpan = li.querySelector(".name");
      const currentName = movieNameSpan.textContent;

      // Create input field for editing
      const input = document.createElement("input");
      input.type = "text";
      input.value = currentName;
      movieNameSpan.replaceWith(input);

      // Change Edit button to Save button
      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      saveBtn.classList.add("save");

      // Style the save button
      saveBtn.style.cssText = `
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        margin-left: 8px;
        transition: background-color 0.3s;
      `;

      // Add hover effects to save button
      saveBtn.addEventListener("mouseenter", () => {
        saveBtn.style.backgroundColor = "#45a049";
      });
      saveBtn.addEventListener("mouseleave", () => {
        saveBtn.style.backgroundColor = "#4CAF50";
      });

      e.target.replaceWith(saveBtn);
    }

    // Save changes when save button is clicked
    else if (e.target.className === "save") {
      const li = e.target.parentElement.parentElement;
      const input = li.querySelector("input[type='text']");
      const newName = input.value.trim();

      if (!newName) {
        alert("Please enter a movie name!");
        return;
      }

      // Create new movie name display
      const movieNameSpan = document.createElement("span");
      movieNameSpan.classList.add("name");
      movieNameSpan.textContent = newName;
      input.replaceWith(movieNameSpan);

      // Change back to Edit button
      const editBtn = document.createElement("span");
      editBtn.textContent = "Edit";
      editBtn.classList.add("edit");
      e.target.replaceWith(editBtn);
    }
  });

  // Add new movie form
  const addMovieForm = forms["add-movie"];
  addMovieForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userInput = addMovieForm
      .querySelector('input[type="text"]')
      .value.trim();

    if (!userInput) {
      alert("Please enter a movie name!");
      return;
    }

    // Create new movie list item
    const li = document.createElement("li");
    const movieName = document.createElement("span");
    const buttonDiv = document.createElement("div");
    const editBtn = document.createElement("span");
    const deleteBtn = document.createElement("span");

    // Set up the new movie item
    movieName.textContent = userInput;
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    // adding margin right to our new edit button
    editBtn.style.cssText = `
      margin-right: 8px
      `;

    // Add classes for styling
    movieName.classList.add("name");
    buttonDiv.classList.add("buttonDesign");
    editBtn.classList.add("edit");
    deleteBtn.classList.add("delete");

    // add everything to the document
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);
    li.appendChild(movieName);
    li.appendChild(buttonDiv);
    list.appendChild(li);

    // Clear the form
    addMovieForm.reset();
  });
});
