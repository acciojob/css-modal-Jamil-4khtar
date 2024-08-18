//your JS code here. If required.
var modal = document.querySelector('.modal'); // The modal itself
var openModalButton = document.getElementById('openModal'); // The button to open the modal
var closeModalButton = document.querySelector('.close-modal'); // The button to close the modal

// When the user clicks on the button, open the modal
openModalButton.addEventListener('click', function() {
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeModalButton.addEventListener('click', function() {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});