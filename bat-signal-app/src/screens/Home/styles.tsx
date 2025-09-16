import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    padding: 10,
  },

  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  contentForm: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
  },

  formContainer:{
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 10,
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  miniLogo : {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  button:{
    backgroundColor: 'black',
    padding: 15,
    minWidth: 280,
    borderRadius: 8,
  },

  textButton: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: "80%",
    gap: 8,
  },

  input: {
    width: "100%",
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 18,
  },
});