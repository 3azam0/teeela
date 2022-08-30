import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const styles = (templateId, itmId) =>
  StyleSheet.create({
    selectedTemplate: {
      marginVertical: 10,
      marginHorizontal: 5,
      borderRadius: 10,
      width: widthPercentageToDP(30),
      padding: 7,
      height: heightPercentageToDP(34),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: templateId === itmId ? '#EBFFFE' : 'transparent',
      borderWidth: templateId === itmId ? 1 : 0,
      borderColor: templateId === itmId ? '#60D3CF' : 'transparent',
    },
    img: {
      flex: 1,
      borderRadius: 5,
      width: widthPercentageToDP(27),
      heigh: heightPercentageToDP(27),
    },
  });
export default styles;
