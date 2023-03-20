import React from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, ScrollView, Image, Dimensions, TextInput } from "react-native";
import product_data from "./product_data.json";
import ProductCard from "./components/ProductCard";
import Search from './components/Search/Search';

function App() {
  return (
    <SafeAreaView>
      <Text style={styles.headerText}>PATİKASTORE</Text>
      
      <FlatList
      ListHeaderComponent={() => <Search />}
      numColumns={2}
      keyExtractor={item => item.u_id.toString()}
      data={product_data}
      renderItem={({item}) => <ProductCard product={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    margin: 10,
  },
 
  headerText: {
    fontWeight: 'bold',
    color: 'purple',
    marginTop: 10,
    fontSize: 30,
    marginLeft: 10,

  },
 
});

export default App;