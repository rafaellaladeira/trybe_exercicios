import React from "react";

class Pokemon extends React.Component {
    render(){
        const { name, type, averageWeight, image } = this.props;
        return(
            <div>
                {Data}
            </div>
        )
    }
}

export default Pokemon;