import React from 'react'
import {connect} from 'react-redux'
import {addSmurf} from '../actions/index'
import Dashboard from './Dashboard';

class SmurfForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: 0,
            height: '',
        }
    }

    handleChange = e =>  {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    postSmurf = e => {
        e.preventDefault()

        const {name, age, height} = this.state

        this.props.addSmurf(this.state)

        this.setState({
            name: '',
            age: 0,
            height: ''
        })
    }

    render() {
        const {name, age, height} = this.state

        return (
            <section className = 'addForm'>
                <h2>Add a Smurf to the village!</h2>
                <form onSubmit = {this.postSmurf}>
                    <input
                        type = 'string'
                        name = 'name'
                        placeholder = "New smurf's name"
                        value = {name}
                        onChange = {this.handleChange}
                        required
                    />
                    <br/>
                    <input
                        type = 'number'
                        name = 'age'
                        placeholder = "New smurf's age"
                        value = {age}
                        onChange = {this.handleChange}
                        required
                    />
                    <br/>
                    <input
                        type = 'string'
                        name = 'height'
                        placeholder = "New smurf's height in cm"
                        value = {height}
                        onChange = {this.handleChange}
                        required
                    />
                    <br/>
                    <button type = 'submit'>Add Smurf!</button>
                </form>
                <Dashboard/>
            </section>
        )
    }
}

const mapDispatchToProps = {
    addSmurf
}

export default connect(null,mapDispatchToProps)(SmurfForm);