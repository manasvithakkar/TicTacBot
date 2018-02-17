import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
//import MenuItem from 'material-ui/MenuItem'
//import FloatingActionButton from 'material-ui/FloatingActionButton'
//import Menu from 'material-ui/svg-icons/navigation/menu'
// {Link} from 'react-router'
import MenuLink from '../styled/MenuLink'
import {NavToggleButton} from '../styled/NavDrawer'
class NavDrawer extends Component {

  state = {
    open: true,
    width: 250
  }

  toggle = () => {
    this.setState( (prevState) => {
      return {
        open: !prevState.open
      }
    })
  }


  render () {
    return (
      <div>
      <NavToggleButton
        toggle={this.toggle}
        width={this.state.width}
        open={this.state.open}
      />
        <Drawer
          open={this.state.open}
          width={this.state.width}
        >
          <div
            style={{
              height: '100px',
              backgroundColor: 'salmon'
            }}
          >
            Login Component
          </div>
          <Divider/>

          <MenuLink
            to={'/'}
            onTouchTap={this.toggle}
            primaryText={'Play'}
          />
          <MenuLink
            to={'/profile'}
            onTouchTap={this.toggle}
            primaryText={'Profile'}
          />


        </Drawer>

      </div>
    )
  }
}

export default NavDrawer
