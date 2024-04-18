import React from "react";

class Dog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: "",
            breed: "",
        }
    }
    componentDidMount() {
        this.setState((prevSate, prevProps) => ({
            image: prevProps.image,
            breed: prevProps.breed
        }))
        //  console.log("dog getting mount")
        //  console.log(this.props)
    }
    componentDidUpdate() {

        console.log("dog gettiing update");

    }

    render() {
        return (
            <img src={this.state.image} alt={this.state.breed} />
        );
    }


}
export default Dog;