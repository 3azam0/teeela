import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const TemplateDetailsScreen = ({navigation, route}) => {
  const {template} = route.params;

  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>
          {template.category}
        </Text>
        <Image
          source={{
            uri: template.thumbnail,
          }}
          style={{
            borderRadius: 5,
            width: widthPercentageToDP(80),
            height: heightPercentageToDP(40),
          }}
        />
      </View>
    </ScrollView>
  );
};

export default TemplateDetailsScreen;

const styles = StyleSheet.create({
  selectedTemplate: {
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    width: widthPercentageToDP(30),
    padding: 7,
    height: heightPercentageToDP(34),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
