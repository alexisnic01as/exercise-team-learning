

export const Person = (props) => {

    return <div style={{background: "green", height: "50vh"}}>
        <h1> 
          Hi my name is {props.name}
        </h1>
        <img src={props.pic} alt={props.name}/>
        <p style={{color: "red"}}>
          I am a rising {props.grade} studying {props.major} at {props.college}!
        </p>
    </div>
}