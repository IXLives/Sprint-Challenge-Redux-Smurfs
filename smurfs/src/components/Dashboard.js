import React from 'react'
import {Link} from 'react-router-dom'


function Dashboard() {
    return (
        <section className = 'dashboard'> 
            <Link to = '/smurfs'>Smurfs Village</Link><br/><br/>
            <Link to = '/form'>Add a newcomer to the village</Link>
        </section>
       
    )
}

export default Dashboard