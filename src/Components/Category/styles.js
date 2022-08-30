import {StyleSheet} from 'react-native';

const styles = (category, selectedCategory) =>
  StyleSheet.create({
    linearWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginHorizontal: 5,
      padding: 1,
    },
    linear: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    bttn: {
      paddingHorizontal: 5,
      borderRadius: 10,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: category === selectedCategory ? 'transparent' : 'white',
    },

    centerView: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
    },
    colCenter: {flex: 1, alignItems: 'center'},
  });
export default styles;
