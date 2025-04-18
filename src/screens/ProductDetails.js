import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import products from '../data/products';

export default function ProductDetails({ route, navigation }) {
  const { productId } = route.params;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => alert('Add to Cart functionality coming soon!')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#888',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
