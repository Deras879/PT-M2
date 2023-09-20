import React from "react";

class Botones extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <button  onClick={() => alert(this.props.props.m1)}>Módulo 1</button>
                <button  onClick={() => alert(this.props.props.m2)}>Módulo 2</button>
            </div>
        )
    }
};

export default Botones;