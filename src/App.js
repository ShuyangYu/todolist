import React, {Component, Fragment} from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    }

    this.handleBtnClick = this.handleBtnClick.bind(this)
  }
  render() {
    return (
      <Fragment>
        {/* <div className={this.state.show ? 'show' : 'hide'}>Hello</div> */}
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          onEntered={(el) => {el.style.color='blue'}}
          appear={true}
        >{/* 可以实现dom的unmount*/}
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.handleBtnClick}>toggole</button>
      </Fragment>
    )
  }

  handleBtnClick() {
    this.setState(() => ({
      show: this.state.show ? false : true
    }))
  }
}

export default App