import './App.css';

export const Person = (props) => {
    return <div>
        <h1 className = "App-person-intro">
            Hi, my name is {props.name}!
        </h1>
        <img src = {props.img} alt = {props.name}/>
        <p>
            I am a rising {props.grade} at {props.college}.
        </p>
    </div>
}