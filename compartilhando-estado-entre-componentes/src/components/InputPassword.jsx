
export default function Input(props) {
    return (
        <input
            type="number"
            min={1}
            id='passwordLength'
            value={props.passwordLength}
            onChange={(e) => props.setPasswordLength(e.target.value)}
        />
    )
}