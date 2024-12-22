import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, Image } from 'react-native';

export default function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(res => setData(res.results));
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{uri: item.image}} style={styles.image}/>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  }
});