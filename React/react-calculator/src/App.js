import React, { Component } from "react";

class App extends Component {
  state = {
    outputNumber: 0
  };
  render() {
    return (
      <div>
        <h1>calculator</h1>
        <NumOutput number={this.state.outputNumber} />
        <CalcultorBtn />
      </div>
    );
  }
}

class NumOutput extends Component {
  render() {
    const { number } = this.props;
    return <div>{number}</div>;
  }
}

class CalcultorBtn extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <button>7</button>
              </td>
              <td>
                <button>8</button>
              </td>
              <td>
                <button>9</button>
              </td>
            </tr>
            <tr>
              <td>
                <button>4</button>
              </td>
              <td>
                <button>5</button>
              </td>
              <td>
                <button>6</button>
              </td>
            </tr>
            <tr>
              <td>
                <button>1</button>
              </td>
              <td>
                <button>2</button>
              </td>
              <td>
                <button>3</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
