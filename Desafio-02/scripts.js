function abrirModal(src) {
    const modal = document.getElementById('meuModal');
    const imagemModal = document.getElementById('imagem-modal');
    modal.style.display = "block";
    imagemModal.src = src;
    imagemModal.alt = "Imagem em tamanho completo";
}

function fecharModal() {
    const modal = document.getElementById('meuModal');
    modal.style.display = "none";
}
