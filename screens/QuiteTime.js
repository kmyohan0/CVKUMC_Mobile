import React, { useEffect, useState } from "react";
import {  StatusBar, ActivityIndicator, FlatList, View, StyleSheet, Text } from "react-native";
import {
  useFonts,
  Amiri_400Regular,
  Amiri_400Regular_Italic,
  Amiri_700Bold,
  Amiri_700Bold_Italic
} from '@expo-google-fonts/amiri';

const splitDescription = (Text, index) => {
  let splitted = Text.split("● ")
  return splitted[index]
}

const QuiteTime = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((json) => setData(json.items))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.statusBar_container}>
      <StatusBar barStyle="default" hidden={false} translucent={false} />
      <View style={styles.center}>
      {isLoading ? <ActivityIndicator style={margin = 20} /> : (
        <FlatList
          data={data.slice(0, 10)}
          maxToRenderPerBatch={5}
          keyExtractor={(item, index) => item._id}
          initialNumToRender={10}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View style={styles.header_container}>
                <Text style={styles.title_text}>{item.title}</Text>
                <Text style={styles.chapter_text_first}>{splitDescription(item.shortDescription, 1)}</Text>
                <Text style={styles.chapter_text_second}>{splitDescription(item.shortDescription, 2)}</Text>
                <Text style={styles.date_text}>{item.date}</Text>
              </View>
              <Text style={styles.paragraph}>{item.longDescription}</Text>
            </View>
          )}
        />
      )}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    backgroundColor: "#ecf0f1",
  },
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
    alignSelf: "center",
    width: "90%",
    justifyContent: "space-around",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  header_container: {
    backgroundColor: "#B5DBE8",
  },
  title_text: {
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 5,
    fontSize: 22,
    color: "white",
    fontFamily: "Amiri_700Bold",
    //Change Font if needed
  },
  date_text: {
    marginHorizontal: 40,
    marginTop: 5,
    marginBottom: 15,
    fontSize: 14,
    color: "white",
    fontFamily: "Amiri_400Regular_Italic",
    //Change Font if needed
  },
  chapter_text_first: {
    marginHorizontal: 40,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 14,
    color: "white",
    fontFamily: "Amiri_400Regular_Italic",
    //Change Font if needed
  },
  chapter_text_second: {
    marginHorizontal: 40,
    fontSize: 14,
    color: "white",
    fontFamily: "Amiri_400Regular_Italic",
    //Change Font if needed
  },
  paragraph: {
    marginHorizontal: 20,
    marginTop: 5,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 10,
    lineHeight: 25,
    fontFamily: "Amiri_400Regular",
    //Change Font if needed
  },
});

export default QuiteTime;
