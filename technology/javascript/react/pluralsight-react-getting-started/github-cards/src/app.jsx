import React from 'react';

import { Form } from './form';
import { CardList } from './card-list';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.addNewProfile = this.addNewProfile.bind(this);
  }

  state = {
    profiles: [],
  };

  addNewProfile(profile) {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profile]
    }));
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>

        <Form addNewProfile={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </>
    )
  }

}

export default App;
