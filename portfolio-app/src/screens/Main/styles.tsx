import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    height: '100%',
  },

  socialContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },

  socialButton: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    padding: 10,
    paddingHorizontal: 32,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 8,
  },

  socialButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  }
});