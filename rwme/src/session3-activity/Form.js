import React from "react";


class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            newName: ""
        }
    }
    onInputChange = (e) => {
        this.setState((prevState) => ({ newName: `${e.target.value}` }))
    }
    onSubmitHandler = (event) => {
        
        event.preventDefault();
        console.log(event.target.me.value)
        const updatedElement = document.getElementById("updated");
        const newNameElement = document.getElementById("new-name")
        updatedElement.innerText += ` ${event.target.me.value}`;
        updatedElement.style.display = "block";
        newNameElement.style.display = "none"
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler} method="POST" action="/endpoint">
                <h1 id="new-name">New Name: {this.state.newName}</h1>
                <label >Name:
                    <input type="text" name="me" id="name" value={this.state.newName}
                        onChange={this.onInputChange} />
                </label>
                <input type="submit" value="Submit" />
                <h1 id="updated" style={{ display: "none" }}>Updated Name:</h1>
            </form>
        );
    }
}
export default Form;

/**
 displaying the input in textfiled controlled by a value atribute,
 can get the changed event value by onChange event listener 
 */