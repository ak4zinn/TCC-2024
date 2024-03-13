window.sr = ScrollReveal({reset: true});

sr.reveal('.titulo', { duration:2000});

sr.reveal('.container-cafes-especiais', { duration:2000});

sr.reveal('.titulo-cafes-especiais', { duration:2000, rotate:{
    x: 70, y: 0, z: 0
}});

sr.reveal('.card-coffee', { duration:2000, rotate:{
    x: 70, y: 0, z: 0
}});


const ssn = document.getElementById("ssn");
const current = document.getElementById("current");

ssn.oninput = (event) => {
  current.textContent = ssn.value;
};