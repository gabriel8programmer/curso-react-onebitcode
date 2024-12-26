
export default function Game({ title, cover, onRemove }) {
    return (
        <div>
            <img src={cover} alt={`Capa do Jogo: (${title})`} />
            <div>
                <h2>{title}</h2>
                <button onClick={onRemove}>Remover</button>
            </div>
        </div>
    )
}