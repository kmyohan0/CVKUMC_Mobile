import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Linking from 'expo-linking';
import { Link } from "@react-navigation/native";

let url = "https://www.google.com/maps/search/?api=1&query=Crescenta+Valley+Korean+United+Methodist+Church"

const About = () => {
  return (
    <View>
      <StatusBar barStyle="default" hidden={false} translucent={false} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <ImageBackground
          style={styles.about_image}
          resizeMode="cover"
          source={require("../assets/image_5.jpg")}
        >
          <View style={styles.about_image_container}>
            <Text style={styles.about_title}>크레센타밸리한인연합감리교회</Text>
          </View>
        </ImageBackground>
        <View style={styles.information_container}>
          <View style={styles.description_container}>
            <Text style={styles.about_description_title}>교회소개</Text>
            <View
              style={{
                height: 10,
                width: "45%",
                color: "black",
                borderBottomWidth: 1,
                marginBottom: 10,
              }}
            />
            <Text style={styles.about_description}>
              크레센타밸리한인연합감리교회는 1993년에 창립, 1999년 4월에
              미연합감리교 서부지역 한인 선교부(Western Jurisdiction Korean
              Mission of UMC) 선교교회로 가입이 되었고 2004년 3월 첫주에 가주
              태평양 연회(California-Pacific Annual Conference) 파사디나
              지방회(Pasadena District)에 자립교회(Chartered Church)로 가입,
              현재는 북 지방회(North District) 소속입니다. 오직 이 땅위에 좋은
              교회의 터전을 닦아 하나님 나라의 초석이 되고 주님께 드린다는
              선교적 사명의 일념으로 교인들과 합심하여 “하나님의 사랑을
              이루어가는 생활 공동체”의 꿈을 함께 이루어가고 있습니다.
            </Text>
          </View>
        </View>

        <View style={styles.map_container}>
          <Text style={{ alignSelf: "center", fontSize: 20, marginTop: 10 }}>
              교회 주소
            </Text>
            <View
              style={{
                height: 10,
                width: "50%",
                color: "black",
                borderBottomWidth: 1,
                alignSelf: "center",
              }}
            />
            <Text style={{alignSelf: "center", marginTop: 10, fontSize: 14, marginBottom: 15, }}> 2700 Montrose Ave. Montrose, CA 91020 </Text>
          <TouchableOpacity onPress={ () => Linking.openURL(url) }>
            <Image
              style={{ alignSelf: "center", width: "85%", height: 400 }}
              source={require('../assets/image_10.png')}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{ alignSelf: "center", fontSize: 20, marginTop: 10 }}>
            담임목사 김용근 목사
          </Text>
          <View
            style={{
              height: 10,
              width: "65%",
              color: "black",
              borderBottomWidth: 1,
              marginBottom: 10,
              alignSelf: "center",
            }}
          />
          <Image
            style={styles.pastor_image}
            source={require("../assets/pastor.jpg")}
          />
        </View>
        <View style={styles.pastor_description_container}>
          <Text style={styles.pastor_description}>
            {
              "크레센타밸리한인연합감리교회에 오신것을 환영합니다.우리 교회는 23년의 숙성을 통해 크레센타밸리한인연합감리교회로 변화되었습니다. 오직 이 땅위에 좋은 교회의 터전을 닦아 하나님 나라의 초석으로 성숙 되고자하는 크레센타밸리한인연합감리교회는 지역과 세계를 향한 선교적 사명의 일념으로 하나 되어 다음 같은 사명선언문을 세웁니다."
            }
          </Text>
        </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  about_image: {
    height: 250,
    width: "100%",
  },
  about_image_container: {
    textAlign: "center",
    alignContent: "center",
  },
  about_title: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  information_container: {
    flex: 1,
    width: "100%",
    marginBottom: 10,
  },
  description_container: {
    marginVertical: 10,
    width: "90%",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  about_description_title: {
    fontSize: 20,
    color: "black",
    lineHeight: 26,
    letterSpacing: 0.6,
  },
  about_description: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 16,
    color: "black",
    lineHeight: 26,
    letterSpacing: 0.6,
  },
  pastor_image: {
    margin: 10,
    width: 250,
    height: 250,
    justifyContent: "center",
    alignSelf: "center",
  },
  pastor_description_container: {
    margin: 10,
  },
  pastor_description: {
    marginHorizontal: 15,
    fontSize: 14,
    color: "black",
    lineHeight: 24,
    letterSpacing: 0.1,
    
  },
  map_container: {
    width: "100%",
    height: 510,
    marginTop: 10,
  },
});

export default About;
