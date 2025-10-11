import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';

type CommonHeaderProps = {
  header?: string;
  name?: string;
  lastSeen?: string;
  profilePic?: string; // profile picture URL or undefined
  showBackButton?: boolean;
  onBackPress?: () => void;
  showMenu?: boolean;
  onMenuPress?: () => void;
  showName?: boolean;
  showLastSeen?: boolean;
};

const CommonHeader: React.FC<CommonHeaderProps> = ({
  header,
  name,
  lastSeen,
  profilePic,
  showBackButton = false,
  onBackPress,
  showMenu = false,
  onMenuPress,
  showName = false,
  showLastSeen = false,
}) => {
  return (
    <View style={styles.headerContainer}>
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Text style={styles.backText}>{'←'}</Text>
        </TouchableOpacity>
      )}

      {/* Render header title if given */}
      {header ? (
        <Text style={styles.headerTitle}>{header}</Text>
      ) : (
        <>
          {/* Show profile picture if URL provided */}
          {profilePic ? (
            <Image source={{ uri: profilePic }} style={styles.profilePic} />
          ) : null}

          <View style={styles.nameContainer}>
            {/* Conditionally show name */}
            {showName && name && <Text style={styles.nameText}>{name}</Text>}

            {/* Conditionally show last seen */}
            {showLastSeen && lastSeen && (
              <Text style={styles.lastSeenText}>{lastSeen}</Text>
            )}
          </View>
        </>
      )}

      {showMenu && (
        <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
          <Text style={styles.menuText}>{'⋮'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute', // Fixed at top
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#07fa40',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    zIndex: 1000,
    elevation: 1000,
  },
  backButton: {
    paddingHorizontal: 10,
    top: 15,
  },
  backText: {
    color: 'white',
    fontSize: 25,
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    top: Platform.OS === 'android' ? 15 : 0,
  },
  profilePic: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginHorizontal: 10,
    top: 15,
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    top: 15,
  },
  nameText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastSeenText: {
    color: 'white',
    fontSize: 12,
    top: 3,
  },
  menuButton: {
    paddingHorizontal: 10,
    top: 15,
  },
  menuText: {
    fontSize: 25,
    color: 'white',
  },
});

export default CommonHeader;
