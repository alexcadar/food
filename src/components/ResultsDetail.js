import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }}></Image>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.review}>
        {result.rating} Starts, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 3,
    marginHorizontal: 1,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  review: {
    fontFamily: 'sans-serif',
    color: 'rgb(100, 100, 100)',
    fontSize: 15,
  },
});

export default ResultsDetail;
