import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render(){
        const { pokemon: { name, type, averageWeight, image }}= this.props;
        return(
            <div className="pokemon">
                <div >
                    <p> { name }</p>
                    <p> { type }</p>
                    <p>
                    {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
                </p>
                </div>
                <img src={ image } alt={ `${name} sprite` } />
            </div>
            );
        }
        }

export default Pokemon;

Pokemon.propTypes = {
    pokemons:PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string,
  })
}