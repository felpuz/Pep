// Detecta o scroll e troca a imagem da seção parallax
window.addEventListener('scroll', function() {
    const parallaxImage = document.getElementById('parallaxImage');
    const scrollPosition = window.scrollY; // Posição de rolagem

    // Troca a imagem com base na rolagem
    if (scrollPosition > 300) {
        parallaxImage.style.backgroundImage = "url('imagem/six.jpg')";
    } else {
        parallaxImage.style.backgroundImage = "url('https://via.placeholder.com/1920x1080?text=Imagem+1')";
    }
});
