document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("response").innerText = "¿A que es difícil resistirse a mis encantos? ;)";

    // Lanzar confeti
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { x: 1, y: 0.5 }
    });
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { x: 0, y: 0.5 }
    });
});


document.getElementById("no").addEventListener("mouseover", function() {
    let maxX = window.innerWidth - this.offsetWidth; // Limita dentro de la ventana
    let maxY = window.innerHeight - this.offsetHeight; 

    let x = Math.random() * maxX-50; 
    let y = Math.random() * maxY-50; 

    this.style.position = "absolute"; // Asegura que se pueda mover
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

