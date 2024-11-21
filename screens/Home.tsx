import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, MenuItem } from './RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

// Updated menu items with three items per course
const menuItems: MenuItem[] = [
  { dishName: 'Ouzo', description: 'Anise-flavored aperitif', course: 'Drink', price: '5.00' },
  { dishName: 'Retsina', description: 'Resin wine', course: 'Drink', price: '8.00' },
  { dishName: 'Frappe', description: 'Greek iced coffee', course: 'Drink', price: '3.50' },

  { dishName: 'Tzatziki', description: 'Yogurt with cucumber and garlic', course: 'Starter', price: '6.00' },
  { dishName: 'Dolmadakia', description: 'Grapevine leaves stuffed with rice', course: 'Starter', price: '7.00' },
  { dishName: 'Spanakopita', description: 'Spinach pie wrapped in phyllo pastry', course: 'Starter', price: '5.50' },

  { dishName: 'Moussaka', description: 'Layered eggplant and minced meat', course: 'Main', price: '12.00' },
  { dishName: 'Souvlaki', description: 'Grilled meat skewers', course: 'Main', price: '10.00' },
  { dishName: 'Pastitsio', description: 'Baked pasta with meat sauce', course: 'Main', price: '11.00' },

  { dishName: 'Baklava', description: 'Sweet pastry with nuts and honey', course: 'Dessert', price: '4.00' },
  { dishName: 'Galaktoboureko', description: 'Custard in phyllo pastry', course: 'Dessert', price: '5.00' },
  { dishName: 'Kadaifi', description: 'Shredded pastry with nuts', course: 'Dessert', price: '4.50' },
];

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Greek Menu</Text>
        
        {['Drink', 'Starter', 'Main', 'Dessert'].map((course) => (
          <View key={course}>
            <Text style={styles.sectionTitle}>{course}s</Text>
            <FlatList
              data={menuItems.filter(item => item.course === course)}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ViewMenu', { menuItems });
                  }}
                >
                  <View style={styles.menuItem}>
                    <Text>{`${item.dishName} - $${item.price}`}</Text>
                    <Text>{item.description}</Text>
                  </View>
                </TouchableOpacity>
              )}
              scrollEnabled={false} // Disable FlatList scrolling since it's inside a ScrollView
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  menuItem: {
    padding: 10,
    marginVertical: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});
