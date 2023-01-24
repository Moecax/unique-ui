const scroll = document.getElementById("main-cont")
// const scroll = document.getElementsByClassName("main-container")
scroll.addEventListener("wheel", (event) =>{
event.preventDefault();
scroll.scrollLeft += event.deltaY *10 ;
})
