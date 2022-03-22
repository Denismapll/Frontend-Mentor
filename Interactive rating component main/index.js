const ratingBut = document.querySelectorAll(".ratingButtons");
const submit = document.getElementById("submit");
const cont1 = document.querySelector(".container")
const cont2 = document.querySelector(".container2")
const valor = document.querySelector(".finalRate")

var rating = 3

ratingBut.forEach((btn, i)=>{
    ratingBut[i].addEventListener("click", ()=> {

        ratingBut.forEach((but)=>{
            if(but.classList.contains("activeBut") == true){
                but.classList.remove("activeBut")
            }
        })

        btn.classList.add("activeBut")
        let rate = i + 1;
        rating = rate;
        // console.log("button number: "+ rating)
    })
})

submit.addEventListener("click", changeScreen)

function changeScreen(){

    cont1.style.display = "none";
    cont2.style.display = "flex";

    valor.innerHTML = "You selected " + rating + " out of 5"
}