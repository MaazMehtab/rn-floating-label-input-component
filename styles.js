import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  rootContainer: {
    padding: 10,
    borderRadius: 10,
  },
  lable: {
    position: 'absolute',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'normal',
    paddingTop: 15,
    paddingLeft: 5,
    height: 35,
  },
  textAreaView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 12,
  },
  textAreaInput: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'normal',
    paddingLeft: 5,
    height: 98,
  },
  leftIcon: {
    alignSelf: 'center',
    marginTop: 2,
    marginLeft: 5,
    marginRight: 5,
    height: 18,
    width: 18,
  },
  rightIcon: {
    alignSelf: 'center',
    marginTop: 2,
    marginLeft: 5,
    marginRight: 5,
    height: 18,
    width: 18,
  },
  messageText: {
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 3,
  },
});
