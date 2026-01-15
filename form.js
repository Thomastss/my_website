function toggleForm() {
    const card = document.getElementById('contactCard');
    if (card.style.display === 'flex') {
        card.style.display = 'none';
    } else {
        card.style.display = 'flex';
    }
}
