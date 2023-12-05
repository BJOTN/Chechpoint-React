import {useState} from 'react'
export default function Pokemon(){
  const [pokemon, setPokemon] = useState('')
  const [pokemonData, setPokemonData] = useState(null)
  const [error, setError] = useState(null);
  const [dataSpeciesPokemon, setDataSpeciesPokemon]= useState(null);
  const [additional, setAdditional]= useState(false);

  const handleFetchPokemon = async()=>{
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await res.json();
      if (res.ok) {
        setPokemonData(data);
      }
      const resSpecies = await fetch(data.species.url)
      const dataSpecies = await resSpecies.json();
      console.log(dataSpecies)
      setDataSpeciesPokemon(dataSpecies);
    } catch (error) {
      console.log(error);
      setError('Il pokemon non esiste, cercare di nuovo')
    }
    
   
  }
   const handleMoreInfo = () => {
     setAdditional(true);
   };
  return (
    <>
      <input
        type="text"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      />
      <button onClick={handleFetchPokemon}>Generate pokemon</button>

      
      {pokemonData ? (
        <>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <h2>{pokemonData.name}</h2>
          <p>{pokemonData.base_experience}</p>
          <p>{pokemonData.abilities.map((ability)=>ability.ability.name).join(', ')}</p>
        
          <button onClick={handleMoreInfo}>More info</button>
          {additional && (
            <p>{dataSpeciesPokemon.color.name}</p>
          )}
        </>
        
      ): <p>{error}</p>}
    </>
  );
}