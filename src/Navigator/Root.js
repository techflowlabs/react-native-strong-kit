import React, { Component } from 'react'
import {
    View
} from 'react-native'

import { SideMenu, List, ListItem } from 'react-native-elements'

const list = [
    {
        name: 'manuel',
        subtitle :'otero'
    }
]

class Root extends Component{
constructor () {
  super()
  this.state = {
    isOpen: false
  }
  this.toggleSideMenu = this.toggleSideMenu.bind(this)
}

onSideMenuChange (isOpen) {
  this.setState({
    isOpen: isOpen
  })
}

toggleSideMenu () {
  this.setState({
    isOpen: !this.state.isOpen
  })
}

render () {
  const MenuComponent = (
    <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
      <List containerStyle={{marginBottom: 20}}>
      {
        list.map((l, i) => (
          <ListItem
            roundAvatar
            onPress={() => console.log('Pressed')}
            avatar={""}
            key={i}
            title={l.name}
            subtitle={l.subtitle}
          />
        ))
      }
      </List>
    </View>
  )

  return (
    <SideMenu isOpen={this.state.isOpen} onChange={this.onSideMenuChange.bind(this)} menu={MenuComponent}>
      { this.props.childrens }
    </SideMenu>
  )
}

}


export default Root