// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementsByClassName("modalButton")[0];

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
  console.log('page is hooked up')
btn.onclick = function() {
  console.log('pressed');
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
