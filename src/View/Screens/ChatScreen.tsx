import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Text,
  Image,
  ScrollView,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import CommonHeader from '../Components/CommonHeader';
import { useNavigation } from '@react-navigation/native';
import { useBehavior } from '../../Hooks/useBehaviour';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuContext } from 'react-native-popup-menu';

const ChatScreen = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  const behavior = useBehavior();

  const sendMessage = () => {
    console.log('Send message:', message);
    setMessage('');
    Keyboard.dismiss();
  };

  const renderHeader = () => (
    <CommonHeader
      name="John Doe"
      lastSeen="laste seen 2 hours ago"
      profilePic="https://randomuser.me/api/portraits/men/1.jpg"
      showBackButton={true}
      onBackPress={() => navigation.goBack()}
      showMenu={true}
      onMenuPress={() => setMenuVisible(true)}
      showName={true}
      showLastSeen={true}
    />
  );

   const onSelectMenuOption = (value: string) => {
    setMenuVisible(false);
    switch (value) {
      case 'settings':
        console.log('Settings selected');
        break;
      case 'export':
        console.log('Export selected');
        break;
      case 'clear':
        console.log('Clear chat selected');
       
        break;
    }
  };

  return (
    <MenuContext>
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={behavior}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
      >
        {renderHeader()}

         <Menu opened={menuVisible} onBackdropPress={() => setMenuVisible(false)}>
            <MenuTrigger />
            <MenuOptions>
              <MenuOption onSelect={() => onSelectMenuOption('settings')} text="Settings" />
              <MenuOption onSelect={() => onSelectMenuOption('export')} text="Export" />
              <MenuOption onSelect={() => onSelectMenuOption('clear')} text="Clear chat" />
            </MenuOptions>
          </Menu>

        <View style={styles.inner}>
          <ScrollView
            style={styles.chatContent}
            contentContainerStyle={styles.scrollContentContainer}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
          >
            <Text style={{ color: 'gray' }}>Chat messages here</Text>
          </ScrollView>

          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => console.log('Plus icon pressed')}
            >
              <Text style={styles.iconText}>＋</Text>
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              placeholder="Type a message.."
              value={message}
              onChangeText={setMessage}
              multiline
              blurOnSubmit={false}
              returnKeyType="done"
            />

            {message.trim().length > 0 ? (
              <TouchableOpacity style={styles.iconButton} onPress={sendMessage}>
                <Image
                  source={require('../../Assets/images/send.png')}
                  resizeMode="contain"
                  style={{ height: 25, width: 25 }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => console.log('Voice message')}
              >
                <Image
                  source={require('../../Assets/images/send.png')}
                  resizeMode="contain"
                  style={{ height: 25, width: 25 }}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
    </MenuContext>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  scrollContentContainer: {
    flexGrow: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  chatContent: {
    flex: 1,
    paddingHorizontal: 0,
  },
  inputContainer: {
    position: 'absolute', // Fix at bottom
    bottom: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    flex: 1,
    maxHeight: 100,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 16,
  },
  iconButton: {
    marginHorizontal: 6,
  },
  iconText: {
    fontSize: 24,
    color: 'green',
  },
});

export default ChatScreen;
