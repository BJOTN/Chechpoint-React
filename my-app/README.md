Sviluppiamo un Pokédex usando l’API https://pokeapi.co.
Punti obbligatori:
1) Creiamo un campo di testo dove inserire il nome del Pokemon da cercare;
2) Tramite una chiamata GET a “https://pokeapi.co/api/v2/pokemon/{POKEMON_NAME}”
ricaviamo le informazioni necessarie;
3) Mettiamo a display le informazioni principali:
a) Immagine;
b) Nome;
c) Esperienza di base;
d) Abilità;
4) Se la chiamata restituisce un errore evitiamo di mandare in crash lo script, piuttosto
mettiamo in output un messaggio di errore a video per l’utente dando la possibilità di cercare un
altro Pokemon;
Punti opzionali:
Al click di un bottone "More info" da visualizzare contestualmente ai dati della scheda del
Pokemon vogliamo aggiungere le seguenti informazioni:
1) Egg group;
2) Colore;
3) Forma;
Effettuando una chiamata GET al link
"https://pokeapi.co/api/v2/pokemon-species/{POKEMON_ID}"