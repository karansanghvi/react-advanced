import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('Pure Component Render')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp

// !NOTE:
// 1. It implements shouldComponentUpdate with a shallow props and state comparison