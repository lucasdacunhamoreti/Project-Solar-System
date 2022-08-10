import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import './PlanetCard.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="container-solarSytem" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets">
          {planets.map((planet) => {
            const { name, image } = planet;
            return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
          })}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
