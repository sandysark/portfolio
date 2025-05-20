// Declare variable to store navbar element
const navElement = document. document.getElementById('navbar')
// detect scroll event on document
document.addEventListener('scroll',function() {
    // console.log(window.scrollY)
    if(window.scrollY > 70) {
        // change navbar bg to blue
        navElement.style.backgroundColor = '#0779E4';
    } else{
        // chande navbar bg to transparent
        navElement .style.backgroundColor = 'transparent'; 

    }
})