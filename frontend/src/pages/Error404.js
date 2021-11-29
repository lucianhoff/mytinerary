import React from 'react';
import "../style.css"
export default class Error404 extends React.Component {

    render () {
        return (<>
            <div className="my-26 flex justify-center align-center items-center sm:my-56 error404">
                <img src="./assets/err404.png" className="w-50 h-50"/>
            </div>
        </>)
    }
}