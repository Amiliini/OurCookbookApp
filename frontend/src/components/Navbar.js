import React from "react";
import { List, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    let navStyle = {
      height: 120,
      backgroundColor: "lightblue",
    };
    return (
      <div style={navStyle}>
        <Header>CookBook App</Header>
        <List>
          <List.Item>
            <Link to="/">Recipe List</Link>
          </List.Item>
          <List.Item>
            <Link to="/form">Add new recipe</Link>
          </List.Item>
        </List>
      </div>
    );
  }
}
