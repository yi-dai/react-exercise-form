import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name:'',
    description:'',
    readTerm:'',
  };

  handleChange = (field, event) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(event);
    console.log(this.state.name);
    console.log(this.state.description);
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1 className="header">My Profile</h1>
        <label className="label">Name</label>
        <br />
        <input className="name" type="text" value={this.state.name} onChange={(evnet) => this.handleChange("name",event)} />
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
        <input className="Description" type="text" value={this.state.description} onChange={(evnet) => this.handleChange("description",event)} />
        <br />
        <input className="readTerm" type="checkbox" onChange={(evnet) => this.handleChange("readTerm",event)} /> I have read the terms of conduct
        <br />
        <input className="submit" type="submit" disabled={!this.state.name || !this.state.description || !this.state.readTerm} />
      </form>
    );
  }
}

export default MyProfile;


