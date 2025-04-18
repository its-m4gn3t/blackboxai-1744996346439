import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home({ navigation }) {
  const renderItem = ({ item }) => (
    <ProductCard
      product={item}
      onPress={() => navigation.navigate('ProductDetails', { productId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 10,
  },
});
