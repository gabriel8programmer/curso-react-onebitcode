import { useState } from "react"

export default function useCommentsCollection() {

    const [comments, setComments] = useState([])

    const addComment = ({ email, comment }) => {
        const id = Math.floor(Math.random() * 1000000)
        const date = new Date()
        const newComment = { id, email, comment, date }
        setComments(state => [...state, newComment])
    }

    return { comments, addComment }
}