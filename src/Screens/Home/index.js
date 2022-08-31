import React, {useState, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useFetchTemplatesQuery} from '@Services/api';
import {Category, TemplateCard} from '@Components';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const {data, isSuccess, isLoading, isFetching, error} =
    useFetchTemplatesQuery();
  const [category, setCategory] = useState(null);
  const [templates, setTemplates] = useState(null);
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    if (data) {
      setCategory(data[0]?.category);
      setTemplates(data[0]?.products);
    }
  }, [data]);
  const renderTemplate = ({item}) => {
    return (
      <TemplateCard
        item={item}
        template={template}
        style={{
          backgroundColor: template?.id === item.id ? '#EBFFFE' : 'transparent',
          borderWidth: template?.id === item.id ? 1 : 0,
          borderColor: template?.id === item.id ? '#60D3CF' : 'transparent',
        }}
        onPress={() => {
          setTemplate(item);
        }}
      />
    );
  };
  const renderCategory = ({item}) => {
    return (
      <Category
        onPress={() => {
          setCategory(item.category);
          setTemplate(null);
          setTemplates(item.products);
        }}
        item={item}
        category={category}
      />
    );
  };
  return (
    <>
      <ScrollView style={{flex: 1}}>
        <View>
          {(isLoading || isFetching) && <ActivityIndicator />}
          {!isSuccess ? <Text></Text> : <Text></Text>}
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderCategory}
          style={{marginHorizontal: 10}}
          contentContainerStyle={{
            minWidth: '100%',
            marginVertical: 10,
            alignItems: 'center',
          }}
        />
        <FlatList
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          data={templates}
          renderItem={renderTemplate}
          style={{marginHorizontal: 10}}
          contentContainerStyle={{
            minWidth: '100%',

            alignItems: 'center',
          }}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TemplateDetails', {template: template});
        }}
        disabled={!template}
        style={[
          styles.selectedBttn,
          {backgroundColor: !template ? 'grey' : '#13C3BD'},
        ]}>
        <Text style={{color: '#fff', fontSize: 20}}>
          Confirm wrapping selection
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;
