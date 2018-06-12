import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    menus: ["짜장면", "짬뽕", "볶음밥"],
    menu: null
  };

  //상태를 바꾸는 함수를 component에 내려준다.
  changeMenu = menu => {
    this.setState({
      menu: menu
    });
  };

  render() {
    return (
      <div>
        <MenuSelector
          menus={this.state.menus}
          menu={this.state.menu}
          onChangeMenu={this.changeMenu}
        />
      </div>
    );
  }
}

class MenuSelector extends React.Component {
  render() {
    const { menus, menu, onChangeMenu } = this.props;
    return (
      <div>
        {menus.map(item => (
          <button
            onClick={e => {
              onChangeMenu(item);
            }}
          >
            {item}
          </button>
        ))}
        <div>{menu && `${menu}를 선택하셨습니다.`}</div>
      </div>
    );
  }
}
export default App;
