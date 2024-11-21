import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ViewMenuScreen({ route }: any) {
  const { menuItems } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      {menuItems.length > 0 ? (
        <FlatList
          data={menuItems}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Text style={styles.dishName}>{item.dishName}</Text>
              <Text style={styles.dishDetails}>{item.description}</Text>
              <Text style={styles.dishCourse}>Course: {item.course}</Text>
              <Text style={styles.dishPrice}>Price: ${item.price}</Text>
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <Text style={styles.noItems}>No items in the menu yet.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  menuItem: { padding: 15, borderWidth: 1, borderColor: '#ddd', borderRadius: 5, marginBottom: 10 },
  dishName: { fontSize: 18, fontWeight: 'bold' },
  dishDetails: { fontSize: 14, color: '#555' },
  dishCourse: { fontStyle: 'italic', color: '#777' },
  dishPrice: { fontSize: 16, color: '#333' },
  noItems: { textAlign: 'center', fontSize: 16, color: '#777', marginTop: 20 },
});
