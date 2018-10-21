import React from "react";
import ReactDOM from "react-dom";

class DashboardEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      user_pic: "",
      user_bio: "",
      user_name: ""
    };
  }

  submit = () => {
    console.log("submitted");
  };

  render() {
      const {toggleEdit} = this.props
    return (
      <div>
        <form onSubmit={this.submit}>
          <input type="text" placeholder="username" /> <br></br>
          <input type="text" placeholder="bio" /><br></br>
          <input type="text" placeholder="profile pic" /><br></br>

          <button onClick={this.submit}>submit</button>
          <button onClick={toggleEdit}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default DashboardEdit; 