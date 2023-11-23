
const Button = ({callback, color, text}) => {
    return <button onClick={callback} style={{color: color}}>{text}</button>
}

export default Button