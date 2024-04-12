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
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler} >
                <h1>New Name: {this.state.newName}</h1>
                <label >Name:
                    <input type="text" name="me" id="name" value={this.state.newName}
                        onChange={this.onInputChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Form;

/**
 displaying the input in textfiled controlled by a value atribute,
 can get the changed event value by onChange event listener 
 */