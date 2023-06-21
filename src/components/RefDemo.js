import React, { Component } from 'react'

class RefDemo extends Component {

    constructor(props) {
      super(props)

    //   ?to create a ref
      this.inputRef = React.createRef()

    //   ?for callback ref
      this.cbRef = null
      this.setCbRef = (element) => {
        this.cbRef = element
      }
    }
    
    componentDidMount() {
        // ?below code used for the second step after the ref is created
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        // ?for callback ref
        if(this.cbRef) {
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <input type="text" name="" id="" ref={this.inputRef} />
        <br />
        <input type="text" name="" id="" ref={this.setCbRefRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefDemo
