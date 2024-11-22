import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, MenuItem } from './RootStackParams';
import { MenuContext } from '../App';


type AddDishScreenProp = StackNavigationProp<RootStackParamList, 'AddDish'>;

export default function AddDishScreen({ navigation }: { navigation: AddDishScreenProp }) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [dishName, setDishName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [course, setCourse] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const addOrUpdateMenuItem = () => {
    const newMenuItem: MenuItem = { dishName, description, course, price };

    if (editingIndex !== null) {
      const updatedItems = [...menuItems];
      updatedItems[editingIndex] = newMenuItem;
      setMenuItems(updatedItems);
      setEditingIndex(null);
    } else {
      setMenuItems([...menuItems, newMenuItem]);
    }

    setDishName('');
    setDescription('');
    setCourse('');
    setPrice('');
  };

  const editMenuItem = (index: number) => {
    const item = menuItems[index];
    setDishName(item.dishName);
    setDescription(item.description);
    setCourse(item.course);
    setPrice(item.price);
    setEditingIndex(index);
  };

  const deleteMenuItem = (index: number) => {
    const updatedItems = menuItems.filter((_, i) => i !== index);
    setMenuItems(updatedItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Menu</Text>
      <TextInput
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Course (starter, main, dessert)"
        value={course}
        onChangeText={setCourse}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title={editingIndex !== null ? 'Update Dish' : 'Add Dish'} onPress={addOrUpdateMenuItem} />

      <FlatList
        data={menuItems}
        renderItem={({ item, index }) => (
          <View style={styles.menuItem}>
            <Text>{`${item.dishName} (${item.course}) - $${item.price}`}</Text>
            <Text>{item.description}</Text>
            <View style={styles.buttonRow}>
              <Button title="Edit" onPress={() => editMenuItem(index)} />
              <Button title="Delete" onPress={() => deleteMenuItem(index)} />
            </View>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />

      <Button
        title="Home"
        onPress={() => navigation.navigate('Home',)}
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
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  menuItem: {
    padding: 10,
    marginTop: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
