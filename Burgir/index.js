function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


const muges = () => {
    const mg = document.getElementById("muges")
    for (let i = 1; i<20; i++) {
        console.log(i)
        console.log(mg)
        const ne = document.createElement("img")
        ne.setAttribute('src', `https://picsum.photos/300/300?random=${i}`)
        mg.appendChild(ne)
    }
}

muges();