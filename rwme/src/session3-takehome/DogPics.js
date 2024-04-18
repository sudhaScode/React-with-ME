import React from "react";
import styles from './DogPics.module.css';
import axios from "axios";
import Dog from "./Dog.js";

class DogPics extends React.Component {
    constructor() {
        super();
        this.state = {
            breed: "random",
            image: ""
        }
        this.onClickHandler = this.onClickHandler.bind(this)
    }
    onHandler = (event) => {
        this.setState((prevState, prevProps) => ({ breed: event.target.value }), async () => {
            let URL = "https://dog.ceo/api/breed/husky/images/random"
            if (this.state.breed !== "random") {
                URL = `https://dog.ceo/api/breed/${this.state.breed}/images/random`
            }
            const data = await this.onFetchDog(URL);
            this.setState(() => ({ image: data.message }))
            console.log(data)
        })
        // console.log(this.state.breed)
    }
    async onClickHandler() {
        let URL = "https://dog.ceo/api/breed/husky/images/random"
        if (this.state.breed !== "random") {
            URL = `https://dog.ceo/api/breed/${this.state.breed}/images/random`
        }
        const data = await this.onFetchDog(URL);
        this.setState(() => ({ image: data.message }))

    }
    onFetchDog = async (URL) => {
        const response = await axios.get(URL);
        return await response.data

    }
    async componentDidMount() {
        let URL = "https://dog.ceo/api/breed/husky/images/random"
        const data = await this.onFetchDog(URL);
        this.setState(() => ({ image: data.message }))
        //console.log(this.state.image)
    }


    render() {
        return (
            <div className={styles.container}>
                <div className={styles['dog-pics']}>
                    <div className={styles.dropdown}>
                        <label htmlFor="dog-breed">Select a breed:</label>
                        <select id="dog-breed" name="dog-breed" onChange={this.onHandler}>
                            <option value="random" >Random</option>
                            <option value="beagle">Beagle</option>
                            <option value="boxer">Boxer</option>
                            <option value="dalmatian">Dalmatian</option>
                            <option value="husky">Husky</option>
                        </select>
                    </div>
                    <img src={this.state.image} alt={this.state.breed} />
                    <button onClick={this.onClickHandler}>Next</button>
                </div>
            </div>

        );

    }


}

export default DogPics;