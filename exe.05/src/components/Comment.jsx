
export default function Comment({ email, comment, date }) {

    return (
        <div className="comment">
            <div><strong>{email}</strong></div>
            <div>{`Em ${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`}
            </div>
            <div>{comment}</div>
        </div>
    )
}