import {StyleSheet} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

 const styles =StyleSheet.create({
  selectedBttn:       {
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(10),
    backgroundColor: '#13C3BD',
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: 20,
  },
});
export default styles