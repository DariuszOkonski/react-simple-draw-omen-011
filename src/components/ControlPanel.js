import React from 'react';

class ControlPanel extends React.Component {
  state = {
    input: '',
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    })
  }

  handleClick = () => {
    this.props.clickNewOmen(this.state.input);

    this.setState({
      input: '',
    })
  }

  render() {
    return (
      <div className="control-panel">
        <div>
          <button
            onClick={this.props.clickSeeOmen}
          >See omen</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Add new omen..."
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button
            onClick={this.handleClick}
          >Add omen</button>
        </div>
      </div>
    );
  }
}

export default ControlPanel;