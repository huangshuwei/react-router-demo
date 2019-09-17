import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './left-menu.scss'

class LeftMenu extends React.PureComponent {

    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div className={'left-menu'}>
                <ul>
                    <li>
                        <Link to="/home/home1/a">home-home1-a</Link>
                    </li>
                    <li>
                        <Link to="/home/home1/b">home-home1-b</Link>
                    </li>
                    <li>
                        <Link to="/home/home2">home2</Link>
                    </li>
                    <li>
                        <Link to="/order/order1">order1</Link>
                    </li>
                    <li>
                        <Link to="/order/order2">order2</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LeftMenu