import React, { Component } from "react";
import Colunm from "../Colunm/Colunm";
import Header from "../Header/Header";

class Board extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header/>
        <Colunm />
      </div>
    );
  }
}

export default Board;
