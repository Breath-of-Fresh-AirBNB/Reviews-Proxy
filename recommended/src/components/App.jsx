/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PlacesToStay from './PlacesToStay';
import ThingsToDo from './ThingsToDo';
import ExploreOtherOptions from './ExploreOtherOptions';
import sampleHomes from './sampleHomes';
import sampleActivities from './sampleActivities';
import GlobalStyle from './globalStyle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homes: sampleHomes,
      activities: sampleActivities,
      destinations: sampleHomes[0].relatedDestinations,
    };
  }

  componentDidMount(path) {
    axios.get(`http://localhost:3003/homes/${path}`)
      .then((homes) => {
        const listings = homes.data.slice(0, 12);
        this.setState({
          homes: listings,
        });
      });
    axios.get(`http://localhost:3003/activities/${path}`)
      .then((activities) => {
        const activitiesList = activities.data;
        this.setState({
          activities: activitiesList,
        });
      });
  }

  componentDidUpdate(path) {
    this.componentDidMount(path);
  }

  render() {
    const { homes, activities, destinations } = this.state;
    return (
      <div className="recommended">
        <Container>
          <GlobalStyle />
          <PlacesToStay
            homes={homes}
          />
          <ThingsToDo
            activities={activities}
          />
          <ExploreOtherOptions
            destination={homes[0].destination}
            destinations={destinations}
          />
        </Container>
      </div>
    );
  }
}

export default App;
