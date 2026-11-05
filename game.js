document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('cfg-theme');

    const setTheme = (theme) => {
        const isLight = theme === 'light';
        document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
        if (themeToggle) {
            themeToggle.setAttribute('aria-pressed', String(isLight));
            themeToggle.setAttribute('aria-label', isLight ? 'Увімкнути темну тему' : 'Увімкнути світлу тему');
            themeToggle.querySelector('.theme-icon').textContent = isLight ? '☾' : '☼';
        }
    };

    setTheme(savedTheme || 'dark');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('cfg-theme', nextTheme);
            setTheme(nextTheme);
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