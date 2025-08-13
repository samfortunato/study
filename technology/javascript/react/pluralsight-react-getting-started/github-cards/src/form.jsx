import React from 'react';

export class Form extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    userName: '',
  };

  async handleSubmit(evt) {
    evt.preventDefault();

    fetch(`https://api.github.com/users/${this.state.userName}`, { method: 'GET' })
      .then(res => res.json())
      .then((profile) => {
        this.props.addNewProfile(profile);
      });

    this.setState({ userName: '' });
  };

  handleChange(evt) {
    this.setState({ userName: evt.target.value });
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          placeholder="GitHub username"
          required
          onChange={this.handleChange}
        />
        <button>Add card</button>
      </form>
    );
  }

};
