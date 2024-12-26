
import { useState } from "react"
import TextInput from "./TextInput"

export default function NewGameForm({ addGame }) {

    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')

    const clean = () => {
        setTitle('')
        setCover('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title || !cover) {
            alert("É Obrigatório um nome e uma capa para adcionar o novo Game!")
            clean()
            return
        }

        addGame({ title, cover })
        clean()
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                id="title"
                label="Titulo"
                value={title}
                setValue={setTitle}
            />
            <TextInput
                id="cover"
                label="Capa"
                value={cover}
                setValue={setCover}
            />
            <button>Adcionar</button>
        </form>
    )
}