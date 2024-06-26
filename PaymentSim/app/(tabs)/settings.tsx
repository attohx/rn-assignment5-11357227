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

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.linkContainer} onPress={() => handlePress('Language')}>
        <Text style={styles.link}>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkContainer} onPress={() => handlePress('My Profile')}>
        <Text style={styles.link}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkContainer} onPress={() => handlePress('Contact Us')}>
        <Text style={styles.link}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkContainer} onPress={() => handlePress('Change Password')}>
        <Text style={styles.link}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkContainer} onPress={() => handlePress('Privacy Policy')}>
        <Text style={styles.link}>Privacy Policy</Text>
      </TouchableOpacity>
      <View style={styles.themeContainer}>
        
        <Text style={styles.themeText}>Theme</Text>
        
        <Switch
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align items to the left
    padding: 20,
  },
  linkContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,

  },
  link: {
    fontSize: 18,
    color: 'black', // Set font color to black
    marginTop: 30,

  },
  themeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    width: '100%', // Ensure it takes the full width of the container
  },
  themeText: {
    fontSize: 18,
    color: 'black',
    flex: 1, // Make the text take up the remaining space
  },
});
