import { useState } from "react"

export default function CommentForm({ addComment }) {

    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const clearInputs = () => {
        setEmail('')
        setComment('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email || !comment) {
            alert("É necessário adcionar um email e um comentário para enviar!")
            clearInputs()
            return
        }

        addComment({ email, comment })
        clearInputs()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="comment">Comentário</label>
                <textarea
                    name="comment"
                    id="comment"
                    rows={5}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </div>
            <button>Enviar Comentário</button>
        </form>
    )
}