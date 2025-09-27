import styles from './Button.module.css'

function Button (){
    const handleClick = () => {
        console.log("OUCH !")        
    }
    const handleClick2 = (name) => {
        console.log(`${name}, Stop clicking me`)
        alert(`${name}, Stop clicking me`)        
    }


     const handleClick3 = (e) => {
        console.log(e)
     }
     const handleClick4 = (e) => {
        e.target.textContent = "OUCH !";
     }

    return (
        <>
        <hr />
        <button onClick={handleClick}>
           <h1>Click Me 🥹</h1> 
        </button>
        <hr />
        <br />
        <button  onClick={()=> handleClick2("Brooo")}>
           <h1  >DND Me 🤢</h1> 
        </button>
        <hr />
        <button onDoubleClick={(e)=>{handleClick4(e)}}>
           <b> e Parameter</b>
        </button>
        <hr />
        </>
    )
}
export default Button;
