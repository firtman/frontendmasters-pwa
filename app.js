var notes = [];

// Registering all the event handlers when the page loads
document.addEventListener("DOMContentLoaded", event => {
    if (localStorage.getItem("notes")) {
        notes = JSON.parse(localStorage.getItem("notes"));
    }
    renderNotes();
 
    document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        const note = document.querySelector("textarea").value;
        if (note.length==0) {
            alert("You didn't input any content");
        } else {
            notes.push(note);
            renderNotes();
            save();
            document.querySelector("textarea").value = "";
        }
    });


    document.querySelector("#btnLearn").addEventListener("click", event => {
        location.href = "https://frontendmasters.com";
    })

    let bipEvent = null;
    window.addEventListener("beforeinstallprompt", event => {
        event.preventDefault();
        bipEvent = event;
    })

    document.querySelector("#btnInstall").addEventListener("click", event => {
        if (bipEvent) {
            bipEvent.prompt();
        } else {
            // incompatible browser, your PWA is not passing the criteria, the user has already installed the PWA
            //TODO: show the user information on how to install the app
            alert("To install the app look for Add to Homescreen or Install in your browser's menu");
        }
    })

    document.querySelector("#btnShare").addEventListener("click", event => {
        let notesString = "";
        for (let note of notes) {
            notesString += note + " | "
        }
        navigator.share({
            title: "Codepad",
            text: notesString
        })
    })
})

// Render the notes on the DOM
function renderNotes() {
    const ul = document.querySelector("#notes");
    ul.innerHTML = "";
    notes.forEach( (note, index) => {
        // Create the note LI
        const li = document.createElement("li");
        li.innerHTML = note;
        // Delete element for each note
        const deleteButton = document.createElement("a");
        deleteButton.innerHTML = '<span class="icon">delete</span>';
        deleteButton.addEventListener("click", event => {
            if (confirm("Do you want to delete this note?")) {
                notes.splice(index, 1);
                renderNotes();
                save();
            }
        });
        li.appendChild(deleteButton);
        ul.appendChild(li);
    })
}


function save() {
    localStorage.setItem("notes", JSON.stringify(notes));
}