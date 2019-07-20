import React from 'react'

class Smurf extends React.Component {
    constructor(props){
        super(props)
    }

    render() { 
        return (
            <section className = 'smurf'>
                <p>{this.props.name} Smurf</p>
                <p>Age: {this.props.age} smurf years old</p>
                <p>Height: {this.props.height}</p>
            </section>
            )
    }
}

export default Smurf;