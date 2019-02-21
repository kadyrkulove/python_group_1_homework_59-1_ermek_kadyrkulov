import React, {Component, Fragment} from 'react';

class Main extends Component {
    shouldComponentUpdate(nextProps){
    return  nextProps.film !== this.props.film
    }
    render() {
        console.log(this.props.film)
        return (
          <Fragment>
              <input type="text" onChange={(event)=> this.props.change(event)} value={this.props.film}/>
              <button onClick={(index)=> this.props.remove(index)}>X</button>
          </Fragment>
      );
  }
}

export default Main;