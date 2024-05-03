// Opentab in about section
let aboutLinks = document.querySelectorAll('.about-links');
let aboutContents = document.querySelectorAll('.about-content');

function openTab(tabname) {
    for(aboutContent of aboutContents) {
        aboutContent.classList.remove('active-content');
    }
    for(aboutLink of aboutLinks) {
        aboutLink.classList.remove('active-link');
    }
    document.getElementById(tabname).classList.add('active-content');
    document.querySelector(`.${tabname}`).classList.add('active-link');
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw9gtV-sAp_jxhlavT6K80YX3LdBUcbWehOBbr_r3FrJBvzlqucSVHablbbWiFX6zol/exec' // add your own app script link here
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
