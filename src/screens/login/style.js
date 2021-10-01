import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  
  },

  btnBack: {
  
    position:'absolute',
   
    left: 0,
  },

  head: {

    backgroundColor: `#cd5c5c`,
    height: '28%',
    justifyContent: 'center',
  },
  headerText: {
    marginTop: 10,
    marginLeft: 20,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },

  inp: {
    marginTop: 50,
    width: '90%',
    alignSelf: 'center',
  },

  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },

  label: {
    margin: 8,
  },

  btns: {
    marginTop: 70,
    width: '70%',
    alignSelf: 'center',
  },

  btn1: {
    backgroundColor: `#dcdcdc`,

    marginTop: 20,
  },

  btn2: {
    backgroundColor: `#cd5c5c`,
  },
});
