import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
 },
 image: {
    flex: 1,
    justifyContent: "center"
  },

  img:{
    position: 'absolute',
    alignSelf: 'center',
    top:40,
    left:80,
  },

  btnSign : {
    position: 'absolute',
    right: 0,
    top:150,
},

btnSkip: {
    position: 'absolute',
    left: 0,
    top:150,
},

  btns: {
    position: 'absolute',
    bottom: 25,
    width: '70%',
    alignSelf: 'center',
  },


  btn1: {
    backgroundColor: `#dcdcdc`,

    marginTop: 10,
  },

  btn2: {
    backgroundColor: `#cd5c5c`,
  },

})