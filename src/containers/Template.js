import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
//import our soon to be created NavDrawer
import NavDrawer from '../components/NavDrawer'
import {Header} from '../styled/Template'
import Main from '../styled/Main'

injectTapEventPlugin()

class Template extends Component {

  render () {
    return (
      <MuiThemeProvider>
        <div>
          {/*Add our NavDrawer to our component*/}
          <NavDrawer/>
          <Header>
            TicTacToeBOT
            </Header>
          <Main>
            {this.props.children}
          </Main>
        </div>
    </MuiThemeProvider>
    )
  }
}

export default Template
