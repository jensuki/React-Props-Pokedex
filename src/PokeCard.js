import './PokeCard.css';

const PokeCard = ({ id, name, type, base_experience }) => {
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="PokeCard">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>Type: {type}</p>
            <p>Exp: {base_experience}</p>
        </div>
    )
}

export default PokeCard;