import React, { Component } from 'react';

export default class Input extends Component {

  render() {
    return (
      <section>
        <input placeholder='Enter your guess'
               type='number'
               onChange={ e => this.props.handle(e) }
               value={this.props.value}/>
        <button onClick={ e => this.props.submit(e) }>
          Submit
        </button>
        <button onClick={ e => this.props.clear(e) }>
          Clear
        </button>
      </section>
    );
  }
}