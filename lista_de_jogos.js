const lista_de_jogos = [
    {
      "codigo": 1,
      "nome": "Astro Bot",
      "genero": "Plataforma / Acao-Aventura",
      "plataforma": "PS5",
      "preco": 70.00
    },
    {
      "codigo": 2,
      "nome": "Stellar Blade",
      "genero": "Acao-Aventura",
      "plataforma": "PS5",
      "preco": 70.00
    },
    {
      "codigo": 3,
      "nome": "Rise of the Rōnin",
      "genero": "RPG de Acao",
      "plataforma": "PS5",
      "preco": 70.00
    },
    {
      "codigo": 4,
      "nome": "Senua's Saga: Hellblade II",
      "genero": "Acao-Aventura / Hack and Slash",
      "plataforma": "Xbox Series X/S",
      "preco": 50.00
    },
    {
      "codigo": 5,
      "nome": "Indiana Jones and the Great Circle",
      "genero": "Aventura",
      "plataforma": "Xbox Series X/S",
      "preco": 70.00
    },
    {
      "codigo": 6,
      "nome": "Clockwork Revolution",
      "genero": "RPG de Acao",
      "plataforma": "Xbox Series X/S",
      "preco": 70.00
    },
    {
      "codigo": 7,
      "nome": "OD",
      "genero": "Terror de Sobrevivência",
      "plataforma": "Xbox Series X/S",
      "preco": 70.00
    },
    {
      "codigo": 8,
      "nome": "Marvel's Blade",
      "genero": "Acao",
      "plataforma": "Xbox Series X/S",
      "preco": 70.00
    },
    {
      "codigo": 9,
      "nome": "UFO 50",
      "genero": "Vários",
      "plataforma": "PC",
      "preco": 30.00
    },
    {
      "codigo": 10,
      "nome": "Donkey Kong Country Returns HD",
      "genero": "Plataforma",
      "plataforma": "Nintendo Switch",
      "preco": 60.00
    },
    {
      "codigo": 11,
      "nome": "Metroid Prime 4",
      "genero": "Aventura em 3D",
      "plataforma": "Nintendo Switch",
      "preco": 60.00
    },
    {
      "codigo": 12,
      "nome": "Luigi's Mansion 2 HD",
      "genero": "Aventura / Puzzle",
      "plataforma": "Nintendo Switch",
      "preco": 60.00
    },
    {
      "codigo": 13,
      "nome": "Paper Mario: The Thousand-Year Door",
      "genero": "RPG",
      "plataforma": "Nintendo Switch",
      "preco": 60.00
    },
    {
      "codigo": 14,
      "nome": "Hades II",
      "genero": "Roguelike",
      "plataforma": "Nintendo Switch",
      "preco": 30.00
    },
    {
      "codigo": 15,
      "nome": "Mario Kart World",
      "genero": "Corrida",
      "plataforma": "Nintendo Switch",
      "preco": 60.00
    },
    {
      "codigo": 16,
      "nome": "Kirby Air Riders",
      "genero": "Corrida / Acao",
      "plataforma": "Nintendo Switch",
      "preco": 60.00
    },
    {
      "codigo": 17,
      "nome": "Super Mario Party Jamboree",
      "genero": "Party Game",
      "plataforma": "Nintendo Switch",
      "preco": 60.00
    },
    {
      "codigo": 18,
      "nome": "Star Overdrive",
      "genero": "Acao / Aventura",
      "plataforma": "Nintendo Switch",
      "preco": 60.00
    },
    {
      "codigo": 19,
      "nome": "Tetris Forever",
      "genero": "Puzzle",
      "plataforma": "Nintendo Switch",
      "preco": 30.00
    },
    {
      "codigo": 20,
      "nome": "Dragon Quest 3 HD-2D Remake",
      "genero": "RPG",
      "plataforma": "Nintendo Switch",
      "preco": 60.00
    },
    {
      "codigo": 21,
      "nome": "MySims: Cozy Bundle",
      "genero": "SimulAcao",
      "plataforma": "Nintendo Switch",
      "preco": 40.00
    },
    {
      "codigo": 22,
      "nome": "Neva",
      "genero": "Aventura",
      "plataforma": "Nintendo Switch",
      "preco": 30.00
    },
    {
      "codigo": 23,
      "nome": "Shovel Knight: Shovel of Hope DX",
      "genero": "Plataforma",
      "plataforma": "Nintendo Switch",
      "preco": 30.00
    },
    {
      "codigo": 24,
      "nome": "Peglin",
      "genero": "Roguelike / Puzzle",
      "plataforma": "Nintendo Switch",
      "preco": 20.00
    },
    {
      "codigo": 25,
      "nome": "Pizza Tower",
      "genero": "Plataforma",
      "plataforma": "Nintendo Switch",
      "preco": 20.00
    },
    {
      "codigo": 26,
      "nome": "PowerWash Simulator: Shrek DLC",
      "genero": "SimulAcao",
      "plataforma": "Nintendo Switch",
      "preco": 10.00
    },
    {
      "codigo": 27,
      "nome": "Goat Simulator 3",
      "genero": "SimulAcao / Comédia",
      "plataforma": "Nintendo Switch",
      "preco": 30.00
    },
    {
      "codigo": 28,
      "nome": "SpongeBob SquarePants: The Patrick Star Game",
      "genero": "Acao / Aventura",
      "plataforma": "Nintendo Switch",
      "preco": 40.00
      },
      {
        "codigo": 29,
        "nome": "The Last of Us Part I",
        "genero": "Acao / Sobrevivência",
        "plataforma": "PS5",
        "preco": 70.00
      },
      {
        "codigo": 30,
        "nome": "Demon's Souls",
        "genero": "RPG de Acao / Soulslike",
        "plataforma": "PS5",
        "preco": 70.00
      },
      {
        "codigo": 31,
        "nome": "Ratchet & Clank: Rift Apart",
        "genero": "Plataforma / Acao",
        "plataforma": "PS5",
        "preco": 70.00
      },
      {
        "codigo": 32,
        "nome": "Gran Turismo 7",
        "genero": "Corrida / SimulAcao",
        "plataforma": "PS5",
        "preco": 70.00
      },
      {
        "codigo": 33,
        "nome": "Returnal",
        "genero": "Roguelike / Tiro",
        "plataforma": "PS5",
        "preco": 70.00
      },
      {
        "codigo": 34,
        "nome": "Hi-Fi Rush",
        "genero": "Ritmo / Acao",
        "plataforma": "Xbox Series X",
        "preco": 30.00
      },
      {
        "codigo": 35,
        "nome": "The Gunk",
        "genero": "Aventura / ExplorAcao",
        "plataforma": "Xbox Series X",
        "preco": 25.00
      },
      {
        "codigo": 36,
        "nome": "As Dusk Falls",
        "genero": "Interativo / Narrativo",
        "plataforma": "Xbox Series X",
        "preco": 30.00
      },
      {
        "codigo": 37,
        "nome": "Forza Motorsport (2023)",
        "genero": "Corrida / SimulAcao",
        "plataforma": "Xbox Series X",
        "preco": 70.00
      },
      {
        "codigo": 38,
        "nome": "Pentiment",
        "genero": "Narrativa / Aventura Histórica",
        "plataforma": "Xbox Series X",
        "preco": 20.00
      },
      {
        "codigo": 39,
        "nome": "Bayonetta 3",
        "genero": "Hack and Slash / Acao",
        "plataforma": "Nintendo Switch",
        "preco": 60.00
      },
      {
        "codigo": 40,
        "nome": "WarioWare: Move It!",
        "genero": "Minigames / Comédia",
        "plataforma": "Nintendo Switch",
        "preco": 50.00
      },
      {
        "codigo": 41,
        "nome": "Fire Emblem Engage",
        "genero": "RPG Tático",
        "plataforma": "Nintendo Switch",
        "preco": 60.00
      },
      {
        "codigo": 42,
        "nome": "Advance Wars 1+2: Re-Boot Camp",
        "genero": "Estratégia",
        "plataforma": "Nintendo Switch",
        "preco": 60.00
      },
      {
        "codigo": 43,
        "nome": "Famicom Detective Club",
        "genero": "Aventura / Mistério",
        "plataforma": "Nintendo Switch",
        "preco": 50.00
      },
      {
        "codigo": 44,
        "nome": "Xenoblade Chronicles 3",
        "genero": "JRPG",
        "plataforma": "Nintendo Switch",
        "preco": 60.00
      },
      {
        "codigo": 45,
        "nome": "Triangle Strategy",
        "genero": "RPG Tático",
        "plataforma": "Nintendo Switch",
        "preco": 60.00
      },
      {
        "codigo": 46,
        "nome": "Octopath Traveler II",
        "genero": "JRPG",
        "plataforma": "Nintendo Switch",
        "preco": 60.00
      },
      {
        "codigo": 47,
        "nome": "Live A Live",
        "genero": "JRPG / Remake",
        "plataforma": "Nintendo Switch",
        "preco": 60.00
      },
      {
        "codigo": 48,
        "nome": "The Legend of Zelda: Link’s Awakening",
        "genero": "Aventura / Acao",
        "plataforma": "Nintendo Switch",
        "preco": 60.00
      },
      {
        "codigo": 49,
        "nome": "Ring Fit Adventure",
        "genero": "Fitness / Aventura",
        "plataforma": "Nintendo Switch",
        "preco": 80.00
      }
    ]

export {lista_de_jogos}