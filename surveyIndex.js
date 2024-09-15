document.addEventListener('DOMContentLoaded', () => {

    const traits = document.querySelectorAll('.trait:not(.empty)');

    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    traits.forEach(trait => {
        trait.addEventListener('click', () => {
            const traitName = trait.getAttribute('data-trait');
            const description = trait.getAttribute('data-description');

            const isPositive = trait.classList.contains('positive');

            modalTitle.textContent = traitName;
            modalDescription.textContent = description;

            modal.classList.remove('positive', 'negative');

            modal.classList.add(isPositive ? 'positive' : 'negative');

            modal.classList.add('show');
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.classList.remove('show');
        }
    });
});
