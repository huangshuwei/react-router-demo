import React from 'react'
import {Link} from "react-router-dom";

class Home1 extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div>
                home1
                
                <Link to={'/login'}/>
            </div>
        )
    }
}

export default Home1