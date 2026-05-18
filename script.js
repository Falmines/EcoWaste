
document.addEventListener('DOMContentLoaded', function() {

    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    const zoomIn = document.getElementById('zoomIn');
    const zoomOut = document.getElementById('zoomOut');
    const closeModal = document.getElementById('closeModal');

    let scale = 1;

    // ambil semua gambar di legal section
    document.querySelectorAll('.legal-img-wrapper img').forEach(img => {
        img.style.cursor = "zoom-in";

        img.addEventListener('click', function () {
            modal.classList.add('active');
            modalImg.src = this.src;
            scale = 1;
            modalImg.style.transform = `scale(${scale})`;
        });
    });

    // zoom in
    zoomIn.addEventListener('click', () => {
        scale += 0.2;
        modalImg.style.transform = `scale(${scale})`;
    });

    // zoom out
    zoomOut.addEventListener('click', () => {
        scale = Math.max(0.5, scale - 0.2);
        modalImg.style.transform = `scale(${scale})`;
    });

    // close modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // klik background untuk close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

});
