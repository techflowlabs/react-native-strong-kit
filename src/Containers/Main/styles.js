import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({

  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#fdffff',
    alignItems: 'center'
  },

  title: {
    fontSize: 19,
    fontWeight: '100',
    color: '#000',
    marginBottom: 25,
    textAlign: 'center'
  },

  btn: {
    height: 50,
    width: WIDTH / 2,
    marginTop: 25,
    backgroundColor: '#cecece'
  },

  row: {
    width : WIDTH / 1.25,
    height: HEIGHT,
    justifyContent: 'center',
  }

});


export default styles