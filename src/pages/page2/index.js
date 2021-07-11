import React from 'react'
import { NavPageContainer } from 'react-windows-ui'

class Page2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {

    return (
    <NavPageContainer
      hasPadding
      animateTransition>

      <h1>Page 2</h1>
   
     
    </NavPageContainer>
  );
}
}

export default Page2