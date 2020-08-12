import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name:'',
    description:'',
    readTerm:false,
  };
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  }

  handleReadTermChange  = () => {
    this.setState({
      readTerm:true,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault(event);
    console.log(this.state.name);
    console.log(this.state.description);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 className="header">My Profile</h1>
        <label className="label">Name</label>
        <br />
        <input className="name" type="text" value={this.state.name} onChange={this.handleNameChange} />
        <br />
        <label className="label">Gender</label>
        <br />
        <select className="gender">
          <option value="">Male</option>
          <option value="">Female</option>
        </select>
        <br />
        <label className="label">Description</label>
        <br />
        <input className="name" type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
        <br />
        <input className="readTerm" type="checkbox" onChange={this.handleReadTermChange} />I have read the terms of conduct
        <br />
        <input className="submit" type="submit" disabled={!this.state.name || !this.state.description || !this.state.readTerm} />
      </form>
    );
  }
}

export default MyProfile;


