import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';
import './Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="container-missions">
          {missions.map((i, index) => {
            const { name, year, country, destination } = i;
            return (
              <MissionCard
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
                key={ index }
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Missions;
