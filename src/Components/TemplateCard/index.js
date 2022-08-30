import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const TemplateCard = ({style, onPress, item, template}) => {
  const styling = styles(template?.id, item.id);

  return (
    <TouchableOpacity onPress={onPress} style={styling.selectedTemplate}>
      <Image
        source={{
          uri: item.thumbnail,
        }}
        style={styling.img}
      />
      <Text style={{marginTop: 10}}>{item.sku}</Text>
    </TouchableOpacity>
  );
};

export default TemplateCard;
TemplateCard.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,
  item: PropTypes.object,
};

TemplateCard.defaultProps = {
  title: {},
  style: {},
  onPress: () => {},
};
