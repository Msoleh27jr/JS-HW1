let card = document.querySelector(".box")
let Flagimg = document.createElement("img")
let photo = document.createElement("img")
let div = document.createElement("div")
let bigDiv = document.createElement("div")
let Right = document.createElement("div")
////////////////////////
let h1 = document.createElement("h1")
let surnameAsk = document.createElement("p")
let surname = document.createElement("p")
let nameAsk = document.createElement("p")
let names = document.createElement("p")
let FnameAsk = document.createElement("p")
let Fname = document.createElement("p")
let infoAsk = document.createElement("p")
let info = document.createElement("p")
let id = document.createElement("p")
let idAsk = document.createElement("p")

h1.innerHTML = "Republic of Tajikistan"

surnameAsk.innerHTML = "Surname"
nameAsk.innerHTML = "Name"
FnameAsk.innerHTML = "Father's Name"
infoAsk.innerHTML = "Information"

surname.innerHTML = "Rahmonov"
names.innerHTML = "Emomali"
Fname.innerHTML = "Sharifovich"
info.innerHTML = "Man / TJK / Dushanbe / 1952-10-05"

id.innerHTML = "ID: A0561546"
idAsk.innerHTML = "І DTJKA054055601231564GYIY5678TYFFG3500126288840<< <br> 0907068HHKFJHGFOOO04087МЗ4051З4ТЈК<<<<<<<<<<<<5 <br><<<<< RAHMONOV<<1EMOMALI <<<<<<"
id.classList.add("id")
idAsk.classList.add("askId")

h1.classList.add("h1")

surnameAsk.classList.add("ask")
nameAsk.classList.add("ask")
FnameAsk.classList.add("ask")
infoAsk.classList.add("ask")

surname.classList.add("info")
names.classList.add("info")
Fname.classList.add("info")
info.classList.add("info")

Right.append(h1 , surnameAsk , surname , nameAsk , names , FnameAsk , Fname , infoAsk , info)

photo.src = "https://t3.ftcdn.net/jpg/00/56/15/46/360_F_56154683_1wEwhUzZCR0Px7suc1u1e4t6Ac6Lje8a.jpg"
Flagimg.src = "https://st4.depositphotos.com/1128918/70569/i/450/depositphotos_705691428-stock-photo-flag-tajikistan-tajik-flag-fabric.jpg"
Flagimg.style.width = "40px"
Flagimg.style.height = "20px"
photo.style.width = "50px"
card.classList.add("card")
card.append(bigDiv , idAsk)
bigDiv.append(div , Right)
bigDiv.style.display = "flex"
div.append(Flagimg , photo , id)
div.classList.add("card-body")
console.log(card);

