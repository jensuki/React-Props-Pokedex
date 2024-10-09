import PokeCard from './PokeCard';
import './Pokedex.css';

const Pokedex = ({ pokemon, totalExp, isWinner }) => {
    return (
        <div className="Pokedex">
            <div className="Pokedex-cards">
                {pokemon.map(p => (
                    <PokeCard
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        base_experience={p.base_experience}
                    />
                ))}
            </div>
            <p>Total Experience: {totalExp} </p>
            {isWinner ? <h3 className="Pokedex-winner">THIS HAND WINS!</h3> : ''}
        </div>
    )

}


export default Pokedex;