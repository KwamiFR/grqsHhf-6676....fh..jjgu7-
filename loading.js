// Afficher le modal de chargement
document.addEventListener("DOMContentLoaded", function() {
    const loadingModal = document.getElementById("loading-modal");
    loadingModal.style.display = "flex"; // Afficher le modal
    document.body.style.overflow = "hidden"; // Désactiver le scroll

    // Simule le temps de chargement de 4 secondes
    setTimeout(() => {
        loadingModal.style.display = "none"; // Cacher le modal
        document.body.style.overflow = ""; // Réactiver le scroll
    }, 4000);
});