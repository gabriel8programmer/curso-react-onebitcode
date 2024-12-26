import { useState } from "react";

export default function useStateCopier() {
    const [generatedPassword, setGeneratedPassword] = useState('')

    const generateNewPassword = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/`~";

        let password = ''

        for (let c = 0; c < 12; c++) {
            const randIndex = Math.floor(Math.random() * characters.length)
            password += characters[randIndex]
        }

        setGeneratedPassword(password)
    }

    return { generatedPassword, generateNewPassword }
}