import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('Regular Component Render')
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegComp

// !NOTE:
// 1. It does not implement the shouldComponentUpdate method. It always returns true by default