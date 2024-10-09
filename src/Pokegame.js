import Pokedex from './Pokedex';

const Pokegame = () => {

    const pokemonList = [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]

    //randomly assign pokemon to two hands
    let hand1 = [];
    let hand2 = [...pokemonList];

    while (hand1.length < 4) { // loop until hand1 has 4 pokemon
        const randomIndex = Math.floor(Math.random() * hand2.length);
        const randomPokemon = hand2.splice(randomIndex, 1)[0];
        hand1.push(randomPokemon);
    }
    // for each pokemon, add its experience to the total starting from 0
    const totalExp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
    const totalExp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
        <div className="Pokegame">
            <h1>Pokegame</h1>
            <div className="hand">
                <Pokedex pokemon={hand1} totalExp={totalExp1} isWinner={totalExp1 > totalExp2} />
            </div>
            <div className="hand">
                <Pokedex pokemon={hand2} totalExp={totalExp2} isWinner={totalExp2 > totalExp1} />
            </div>
        </div>
    )
}

export default Pokegame;