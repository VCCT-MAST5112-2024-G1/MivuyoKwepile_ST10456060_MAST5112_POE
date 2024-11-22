import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, MenuItem } from './RootStackParams';

type FilterScreenProp = StackNavigationProp<RootStackParamList, 'Filter'>;

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

export default function FilterScreen({ navigation }: { navigation: FilterScreenProp }) {
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const filterByCourse = (course: string) => {
    const filtered = menuItems.filter((item) => item.course === course);
    setFilteredItems(filtered);
    setSelectedCourse(course);
  };

  const resetFilter = () => {
    setFilteredItems(menuItems);
    setSelectedCourse(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu</Text>

      {/* Filter Buttons */}
      <View style={styles.filterButtons}>
        {['Drink', 'Starter', 'Main', 'Dessert'].map((course) => (
          <Button
            key={course}
            title={course}
            onPress={() => filterByCourse(course)}
            color={selectedCourse === course ? 'blue' : 'gray'}
          />
        ))}
      </View>

      {/* Reset Button */}
      <Button title="Reset Filter" onPress={resetFilter} color="red" />

      {/* Filtered List */}
      <FlatList
        data={filteredItems}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuText}>{`${item.dishName} - $${item.price}`}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Back Button */}
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  menuItem: {
    padding: 10,
    marginVertical: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
