import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../Adapter/Navigation/screenTypes';
import CommonHeader from '../Components/CommonHeader';
import { BlankSpace } from '../../Hooks/BlankSpace';

const Chatlist = () => {
  const navigation = useNavigation();

  // Sample chat list data
  const chatData = [
    {
      id: '1',
      name: 'Alice',
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: '2',
      name: 'Bob',
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: '3',
      name: 'Charlie',
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  ];

  // Render each chat item
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() =>
        navigation.navigate(Screens.ChatScreen, {
          userId: item.id,
          userName: item.name,
          userPic: item.img,
        })
      }
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={{ uri: item.img }}
          style={{
            resizeMode: 'contain',
            height:45,
            width:45,
            borderRadius: 50,
          }}
        />
        <BlankSpace width={15}/>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderHeader = () => {
    return <CommonHeader header={'Chat List'} />;
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <BlankSpace height={100} />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <FlatList
          data={chatData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Chatlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 18,
  },
});
