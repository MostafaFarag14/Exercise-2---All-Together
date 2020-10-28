import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    text: ''
  }

  isDisabled = () => {
    return this.state.text.length > 0 ? false : true
  };

  handleSubmit = e => {
    const { user, addMessage } = this.props
    e.preventDefault();
    addMessage({ username: user.username , text: this.state.text })
  }

  handleChange = e => {
    const { value } = e.target
    this.setState(prevState => ({
      text: value
    }))
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.handleSubmit}>
        <input type="text" className="form-control" placeholder="Enter your message..."
          value={this.state.text}
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={this.isDisabled()}>SEND</button>
        </div>
      </form>
    )
  }
}
