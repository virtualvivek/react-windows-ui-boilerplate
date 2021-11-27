import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppTheme, SplashScreen, NavBar, NavBarLink, TransitionToLeft } from 'react-windows-ui'
import Page0 from './pages/page0'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Img from './assets/mountain.jpg'

const App = () => {

  const [splash, setSplash] = useState(true);

  useEffect(() => {
   setSplash(false);
  }, [])

  return (
    <Router basename="react-windows-ui">

      <SplashScreen
        //duration={1000}
        isVisible={splash}
        title={"react-windows-ui-boilerplate"}
      />

      <AppTheme
        scheme="system"
      />

      <TransitionToLeft />
      {/*for registering right page transition*/}

      <NavBar 
        title="App Boilderplate"
      //mobileHasIcons={true}
        shadowOnScroll={true}>

        <h1>Pages</h1>
        <div className="app-hr"></div>

        <NavBarLink
          to="/"
          exact={true}
          text="Home"
          img={Img}
        />

        <NavBarLink
          to="/page1"
          text="Page1"
          icon={<i className="icons10-grid-2"></i>}
        />

        <NavBarLink
          to="/page2"
          text="Page2"
          icon={<i className="icons10-columns"></i>}
        />

      </NavBar>

      <Switch>
        <Route path="/" component={Page0}  exact />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Switch>

    </Router>
  )
}
    
export default App;