function deleteNote(noteId) {
    fetch("/delete", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ noteId: noteId }),
    })
    .then(response => {
        if (response.ok) {
            window.location.href = "/";
        } else {
            console.error('Failed to delete note');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function updateNote() {
    const noteId = document.getElementById('edit-note-id').value;
    const newContent = document.getElementById('edit-note-content').value;

    fetch("/update", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ noteId: noteId, content: newContent }),
    })
    .then(response => {
        if (response.ok) {
            window.location.href = "/";
        } else {
            console.error('Failed to update note');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
