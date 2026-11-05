document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
            form.reset();
        });
    }

    const gameTitle = document.getElementById('gameTitle');
    const gameDescription = document.getElementById('gameDescription');
    const startGame = document.getElementById('startGame');
    const mode = new URLSearchParams(window.location.search).get('mode');
    const games = {
        duo: {
            title: 'Дует захисту',
            description: 'Кооперативна місія для 1–2 гравців: знаходьте шахрайські сигнали та захищайте цифровий простір.',
        },
        squad: {
            title: 'Командний протокол',
            description: 'Динамічна місія для 2–6 гравців: розподіліть ролі й зупиніть загрозу разом.',
        },
    };

    if (gameTitle && gameDescription) {
        const selectedGame = games[mode] || games.duo;
        gameTitle.textContent = selectedGame.title;
        gameDescription.textContent = selectedGame.description;
    }

    if (startGame) {
        startGame.addEventListener('click', () => {
            startGame.textContent = 'Сесію створено ✓';
            startGame.disabled = true;
        });
    }
});