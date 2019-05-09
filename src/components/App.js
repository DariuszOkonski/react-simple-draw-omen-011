import React from 'react';
import './App.css';
import Header from './Header';
import ControlPanel from './ControlPanel';
import Result from './Result';

const omensList = ["one", "two", "three"];

class App extends React.Component {
  state = {
    omens: [...omensList],
    omen: '',
  }

  handleSeeOmen = () => {
    if (this.state.omens.length === 0) {
      this.setState({
        omen: 'There is nothing to display'
      })
    } else {
      const index = Math.floor(Math.random() * this.state.omens.length);
      this.setState({
        omen: this.state.omens[index],
      })
    }
  }

  handleAddOmen = (input) => {
    if (input.length === 0) {
      alert('Input can not be empty');
      return;
    }

    const omens = [...this.state.omens];
    omens.push(input);

    alert('Added new omen: ' + input);

    this.setState({
      omens
    })
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <ControlPanel
          clickSeeOmen={this.handleSeeOmen}
          clickNewOmen={this.handleAddOmen}
        />
        <Result omen={this.state.omen} />
      </div>
    );
  }
}

export default App;