
function Button( {texto, valor, evento } : any)  {
   
    return (
        <button onClick={evento}>
            {texto} {valor}
        </button>
    );
}

export default Button;