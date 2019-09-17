import React from 'react'
import {Link} from "react-router-dom";

class Home2 extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div>
                home2

                <Link to={'/login'}>
                    跳转
                </Link>
            </div>
        )
    }
}

export default Home2