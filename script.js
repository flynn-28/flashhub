document.addEventListener("DOMContentLoaded", () => {
    const gameList = document.getElementById("games");
    const gamePlayer = document.getElementById("player");
    const gameTitle = document.getElementById("title");
    const fullscreenBtn = document.getElementById("fullscreenToggle");

    fetch('games.json')
        .then(response => response.json())
        .then(games => {
            games.forEach(game => {
                const gameItem = document.createElement("button");
                gameItem.textContent = game.name;
                gameItem.onclick = () => playGame(game.name, game.path);
                gameList.appendChild(gameItem);
            });
        });

    function playGame(name, path) {
        gameTitle.textContent = name;
        gamePlayer.innerHTML = `<embed src="${path}" width="100%" height="100%"></embed>`;
    }

    fullscreenBtn.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            gamePlayer.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });
});
