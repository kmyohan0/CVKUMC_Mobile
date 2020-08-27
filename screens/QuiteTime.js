import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View, StyleSheet, Text } from "react-native";

const QuiteTime = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("") // Fix this to fetch json file from wix accordingly
      .then((response) => response.json())
      .then((json) => setData(json.items))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.center}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data.slice(0, 10)}
          maxToRenderPerBatch={5}
          keyExtractor={( item, index) => item._id}
          initialNumToRender={10}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.title_text}>{item.title}</Text>
              <Text style={styles.date_text}>{item.date}</Text>
              <View style={{ height: 10, width: '30%', color: 'black', borderBottomWidth: 1, marginBottom: 10 }} />
              <Text style={styles.paragraph}>{item.longDescription}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
  container: {
    width: "100%",
    margin: 15,
  },
  title_text: {
    margin: 10,
    fontSize: 18,
    //Change Font if needed
  },
  date_text: {
    margin: 10,
    fontSize: 16,
    //Change Font if needed
  },
  paragraph: {
    margin: 10,
    fontSize: 14,
    lineHeight: 21,
    //Change Font if needed
  },
});

export default QuiteTime;