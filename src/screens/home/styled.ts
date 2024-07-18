import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },

  title: {
    marginBottom: 20,
    fontSize: 25,
  },

  button: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },

  buttonText: {
    fontSize: 20,
    color: '#000',
  },

  privatePage: {
    marginTop: 20,
    borderRadius: 10,
    fontSize: 18,
    color: '#000',
  },

  loggedUser: {
    width: '80%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    fontSize: 18,
  },
});
