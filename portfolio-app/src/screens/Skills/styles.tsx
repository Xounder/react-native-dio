import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },

  listSkillContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 20,
    width: '80%',
    gap: 10,
  }, 

  skillContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  }, 

  skillText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    padding: 15,
    paddingHorizontal: 40,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  }
});