const cards = document.querySelectorAll('.flashcard');
let current = 0;

cards.forEach(card => {
card.addEventListener('click', () => card.classList.toggle('flipped'));
});

function showCard(index) {
cards.forEach(c => c.style.display = 'none');
cards[index].style.display = 'block';
}

document.getElementById('next').addEventListener('click', () => {
current = (current + 1) % cards.length;
showCard(current);
});

document.getElementById('prev').addEventListener('click', () => {
current = (current - 1 + cards.length) % cards.length;
showCard(current);
});

showCard(current);