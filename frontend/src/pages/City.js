import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class City extends React.Component {

    constructor(props) {
        super(props)
        // console.log(props)
        
        this.state = {
            city: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/cities/'+this.props.params.city)
            .then(response => this.setState(response.data.response))
    }

    componentDidUpdate() {
        // console.log(this.props.params.city)
    }
    
    render() { 
        console.log(this.state.cityName)
        
        return (
        <div className="element mt-36">
            
            <img src={`/assets/cities/city${this.state.image}.jpg`} />
            <h1> {this.state.cityName} </h1>

            <Link to="/cities"> back to cities </Link>
        </div>)
    }
}
 
export default City;