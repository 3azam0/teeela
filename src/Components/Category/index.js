import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './styles';

const Category = ({style, onPress, item, category}) => {
  const styling = styles(item.category, category);

  return (
    <LinearGradient
      start={{x: 0.7, y: 0}}
      end={{x: 0.5, y: 0.7}}
      colors={
        item.category !== category ? ['grey', 'grey'] : ['#FCDB89', '#B481CF']
      }
      style={styling.linearWrapper}>
      <LinearGradient
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        colors={['#F1C0D5', '#DBF2F2']}
        style={styling.linear}>
        <TouchableOpacity
          activeOpacity={1}
          style={styling.bttn}
          onPress={onPress}>
          <Text
            style={{
              color: item.category == category ? '#6F58B5' : '#1D1D1D',
              alignSelf: 'center',

              fontSize: 14,
            }}>
            {item.category}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </LinearGradient>
  );
};

export default Category;
Category.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,
  item: PropTypes.object,
};

Category.defaultProps = {
  item: {},
  style: {},
  onPress: () => {},
};
