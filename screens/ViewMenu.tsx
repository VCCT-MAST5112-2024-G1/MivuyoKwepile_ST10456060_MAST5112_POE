import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { MenuContext } from '../App';


  export default function ViewMenuScreen() {
    const { menuItems, setMenuItems } = useContext(MenuContext);
  
    const removeMenuItem = (index: number) => {
      const updatedItems = menuItems.filter((_, i) => i !== index);
      setMenuItems(updatedItems);
    };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item, index }) => (
          <View style={styles.menuItem}>
            <Text>{`${item.dishName} (${item.course}) - $${item.price}`}</Text>
            <Text>{item.description}</Text>
            <Button title="Remove" onPress={() => removeMenuItem(index)} />
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  menuItem: { padding: 15, borderWidth: 1, borderColor: '#ddd', borderRadius: 5, marginBottom: 10 },
  dishName: { fontSize: 18, fontWeight: 'bold' },
  dishDetails: { fontSize: 14, color: '#555' },
  dishCourse: { fontStyle: 'italic', color: '#777' },
  dishPrice: { fontSize: 16, color: '#333' },
  noItems: { textAlign: 'center', fontSize: 16, color: '#777', marginTop: 20 },
});
