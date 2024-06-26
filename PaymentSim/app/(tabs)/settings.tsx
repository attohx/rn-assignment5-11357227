import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

export default function Tab() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handlePress = (item) => {
    console.log(`Clicked on ${item}`);
  };

  const toggleTheme = () => {
    setIsDarkTheme((previousState) => !previousState);
  };

  // Define styles for light and dark themes
  const themeStyles = {
    light: StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start', // Align items to the left
        padding: 20,
        backgroundColor: '#ffffff', // Light background color
      },
      link: {
        fontSize: 18,
        color: 'black', // Light mode text color
        marginTop: 30,
      },
      themeText: {
        fontSize: 18,
        color: 'black',
        flex: 1, // Make the text take up the remaining space
      },
    }),
    dark: StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
        backgroundColor: '#121212', // Dark background color
      },
      link: {
        fontSize: 18,
        color: 'white', // Dark mode text color
        marginTop: 30,
      },
      themeText: {
        fontSize: 18,
        color: 'white',
        flex: 1,
      },
    }),
  };

  // Determine which theme to use based on isDarkTheme
  const currentTheme = isDarkTheme ? themeStyles.dark : themeStyles.light;
  
  return (
    <View style={currentTheme.container}>
      <TouchableOpacity style={styles.linkContainer} onPress={() => handlePress('Language')}>
        <Text style={currentTheme.link}>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkContainer} onPress={() => handlePress('My Profile')}>
        <Text style={currentTheme.link}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkContainer} onPress={() => handlePress('Contact Us')}>
        <Text style={currentTheme.link}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkContainer} onPress={() => handlePress('Change Password')}>
        <Text style={currentTheme.link}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkContainer} onPress={() => handlePress('Privacy Policy')}>
        <Text style={currentTheme.link}>Privacy Policy</Text>
      </TouchableOpacity>
      <View style={styles.themeContainer}>
        <Text style={currentTheme.themeText}>Theme</Text>
        <Switch
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linkContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  themeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
});
