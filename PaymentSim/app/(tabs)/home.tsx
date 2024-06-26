import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const cardDetails = [
  { id: '1', cardNumber: '1234 5678 9110 8888', cardholder: 'Eric Atsu', expiration: '12/24', cvv: '1234', cardType: 'Mastercard' },
];

const transactionsData = [
  { id: '1', name: 'Apple', category: 'Entertainment', amount: '-$5.99', profilePicture: 'https://img.icons8.com/?size=100&id=30840&format=png&color=000000' },
  { id: '2', name: 'Spotify', category: 'Music', amount: '-$12.99', profilePicture: 'https://img.icons8.com/?size=100&id=63316&format=png&color=000000' },
  { id: '3', name: 'Money Transfer', category: 'Transaction', amount: '$300', profilePicture: 'https://img.icons8.com/?size=100&id=89791&format=png&color=000000' },
  { id: '4', name: 'Groceries', category: 'Transaction', amount: '-$88', profilePicture: 'https://img.icons8.com/?size=100&id=7U2B6zgb7PMv&format=png&color=000000' },
];

export default function Tab() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/122324996?v=4' }}
          style={styles.profileImage}
        />
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome Back,</Text>
          <Text style={styles.userName}>Eric Atsu</Text>
        </View>
        <Icon name="search-outline" size={30} style={styles.icon} />
      </View>

      <View style={styles.quickAccess}>
        <FlatList
          data={cardDetails}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardNumber}>{item.cardNumber}</Text>
              <Text style={styles.cardholder}>{item.cardholder}</Text>
              <View style={styles.cardFooter}>
                <View style={styles.cardFooterLeft}>
                  <Text style={styles.label}>Expiry:</Text>
                  <Text style={styles.value}>{item.expiration}</Text>
                  <Text style={styles.label}>CVV:</Text>
                  <Text style={styles.value}>{item.cvv}</Text>
                </View>
                <Image
                  source={{ uri: 'https://img.icons8.com/?size=100&id=13610&format=png&color=000000' }}
                  style={styles.cardTypeImage}
                />
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.roundIcon}>
          <Icon name="arrow-up-outline" size={50} color="#808080" />
          <Text style={styles.iconText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundIcon}>
          <Icon name="arrow-down-outline" size={50} color="#808080" />
          <Text style={styles.iconText}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundIcon}>
          <Icon name="cash-outline" size={50} color="#808080" />
          <Text style={styles.iconText}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundIcon}>
          <Icon name="cloud-upload-outline" size={50} color="#808080" />
          <Text style={styles.iconText}>TopUp</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactions}>
        <View style={styles.transactionsHeader}>
          <Text style={styles.sectionTitle}>Transactions</Text>
          <Text style={styles.seeAllText}>See All</Text>
        </View>
        <FlatList
          data={transactionsData}
          renderItem={({ item }) => (
            <View style={styles.transactionCard}>
              <Image
                source={{ uri: item.profilePicture }}
                style={styles.transactionProfileImage}
              />
              <View style={styles.transactionCardContent}>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionName}>{item.name}</Text>
                  <Text style={styles.transactionCategory}>{item.category}</Text>
                </View>
                <Text style={[
                  styles.transactionAmount,
                  item.amount === '$300' && styles.blueAmount
                ]}>
                  {item.amount}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  welcomeText: {
    fontSize: 18,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icon: {
    marginHorizontal: 10,
  },
  quickAccess: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 1,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
    width: '100%',
    height: 200,
    justifyContent: 'center',
    position: 'relative',
  },
  cardNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardholder: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    textAlign: 'left',
    marginTop: 15,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  cardFooterLeft: {
    flexDirection: 'row',
    alignItems: 'left',
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginRight: 5,
  },
  value: {
    fontSize: 14,
    color: '#444',
    marginRight: 15,
  },
  cardTypeImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  transactions: {
    marginTop: 5,
    width: '100%',
    paddingHorizontal: 20,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 16,
    color: '#007AFF',
  },
  transactionCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    height: 70,
  },
  transactionProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
  transactionCardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionCategory: {
    fontSize: 14,
    color: '#888',
  },
  transactionAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    minWidth: 80,
  },
  blueAmount: {
    color: 'blue',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 5,
  },
  roundIcon: {
    alignItems: 'center',
    marginHorizontal: 20, // Increased space between icons
  },
  iconText: {
    fontSize: 14,
    color: '#808080',
    marginTop: 5,
  },
});
