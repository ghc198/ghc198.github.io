let games = [];
fetch("config/games.json")
.then((response) => response.json())
.then((data) => {
    games = data;
    const container = document.getElementById("game-container");
    data.forEach((game) => {
                const gameb = document.createElement("a");
                gameb.href = "games/" + game.id + ".html";
                  gameb.className = "game-link container";
                  gameb.innerHTML = `
                  <div class="game-tile">
                    <img class="game-icon" src="/game-files/${game.id}/${game.imgSrc}" alt="icon" />
                    <p class="game-title">${game.title}</p>
                    </div>`;
                    container.appendChild(gameb);
                });
                //document.getElementById("loader").style.display = "none";
              })
              //.catch((error) => console.error("Error:", error));
      
            function searchGames() {
              const input = document.getElementById("search");
              const filter = input.value.toUpperCase();
              const container = document.getElementById("game-container");
              container.innerHTML = "";
              
              games
                .filter((game) => game.title.toUpperCase().includes(filter))
                .forEach((game) => {
                    
                const gameb = document.createElement("a");
                gameb.href = "games/" + game.id + ".html";
                gameb.className = "game-link container";
                gameb.innerHTML = `
                <div class="game-tile">
                <img class="game-icon" src="/wp-content/game-files/${game.id}/${game.imgSrc}" alt="icon" />
                <p class="game-title">${game.title}</p>
                </div>`;
            container.appendChild(gameb);
            
    });
}