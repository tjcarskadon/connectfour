import React from 'react';

const tfn = () => 3;
class Temp extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  changeCountTo10 () {
    this.setState({count: 10});
  }


  render() {
    <div> Stupid component for testing jest direct testing</div>
  }

}

export default Temp;
export { tfn };