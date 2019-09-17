import React from 'react'

class Login extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        const num = new Array(999).fill()

        return (

            <div>
                {
                    num.map(n => {
                        return <span>hdajshdasjhdasidhasidasiodiasdhiasohdas</span>
                    })
                }

                <div>sadasdasda</div>
            </div>


        )
    }
}

export default Login