window.addEventListener('scroll', function () {
    let sobreMi = this.document.getElementById('sobreMi');
    let posicionSobreMi = sobreMi.getBoundingClientRect().top;
    console.log(posicionSobreMi);
})