function changeShoeImg(url){
    document.getElementById("shoe-initial").src=url
}

function changeKyrie(url){
    document.getElementById("Kyrie-initial").src=url
}


const menuToggle = document.querySelector(".menutoggle")
const barMenu = document.querySelector(".menuActions")

menuToggle.onclick = () => {
	menuToggle.classList.toggle("active");
	barMenu.classList.toggle("active");
     


}


