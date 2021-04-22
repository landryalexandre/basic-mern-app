import React, { Component } from 'react';

class Home extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      list: [],
      userApi: new UserApi(this)
    }
  }

  componentDidMount() { 
    //console.log(this.state.userApi.state);
   }


  render() {
    const { list } = this.state;

    return (
    <div className="App">
      <h1>Project Home</h1>

    </div>
    );
  }
}
export default Home;