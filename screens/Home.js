import React from "react";
import { View, Button, Text, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Amiri_400Regular,
  Amiri_400Regular_Italic,
  Amiri_700Bold,
  Amiri_700Bold_Italic
} from '@expo-google-fonts/amiri';

const Home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Amiri_400Regular,
    Amiri_400Regular_Italic,
    Amiri_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Image style={styles.cover_image} source={require('../assets/image_3.jpg')} />
          {/*About Container*/}
          <View style={styles.about_container}>
            <Text style={styles.about_title}>크레센타벨리 한인 연합 감리교회 방문을 환영합니다</Text>
            <Image style={styles.welcome_image} source={require('../assets/image_9.jpg')} />
            <Text style={styles.about_paragraph}>크레센타밸리한인연합감리교회는 오직 이 땅위에 좋은 교회의 터전을 닦아 하나님 나라의 초석이 되고 주님께 드린다는 선교적 사명의 일념으로 교인들과 합심하여 “하나님의 사랑을 이루어가는 생활 공동체”의 꿈을 함께 이루어가고 있습니다.</Text>
          </View>
          {/*Things that I need to include:
              1. QT
              2. Weekly Sermon
              3. Newcomer Information
              4. */}
          {/*Services Container*/}
          {/* QT Redirect */}
          <TouchableOpacity onPress={() => navigation.navigate("QuiteTime")}>
            <ImageBackground style={styles.qt_iamge} resizeMode="cover" source={require("../assets/qt_background.jpg")} >
              <View style={styles.qt_iamge_text}>
                <Text style={styles.qt_title}>QT 말씀묵상</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.box_container}>
            <Text style={styles.news_title}>우리교회의 사명</Text>
            <View style={{ height: 10, width: '60%', color: 'black', borderBottomWidth: 1, marginBottom: 10 }} />
            <Image style={styles.welcome_image} source={require('../assets/image_4.jpg')} />
            <Text style={styles.paragraph}>사역을 감당하는 것은 우리의 기획과 계획이 아니라 하나님께서 부르신 부르심과 주신 사명으로 인한것입니다. 사역을 위한 구체적 지원체계을 위해 필요한 인적자원에 동참해주세요.</Text>
          </View>
          <View style={styles.box_container}>
            <Text style={styles.news_title}>예배란?</Text>
            <View style={{ height: 10, width: '45%', color: 'black', borderBottomWidth: 1, marginBottom: 10 }} />
            <Image style={styles.welcome_image} source={require('../assets/image_2.jpg')} />
            <Text style={styles.paragraph}>나에게 꼭 필요한 은혜를 부어주시는 하나님을 만나는 시간입니다. 바쁜 이민의 삶 가운데 영적인 끈을 놓치지 않기 위해 예배는 우리의 영적 순도를 확인하는 시금석과 같습니다. 예배 후에는 교우들간에 여유 있는 식사와 교제를 나누실 수 있습니다.</Text>
          </View>
          {/*News Container*/}
          <View style={styles.box_container}>
            <Text style={styles.news_title}>교회소식</Text>
            <View style={{ height: 10, width: '45%', color: 'black', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={styles.news_subtitle}>온라인 비대면 예배</Text>
            <Text style={styles.paragraph}>코로나 바이러스 (Covid-19)로 인하여 당분간 비대면 예배를 드립니다. 기하급수적으로 늘어나는 전염 사태를 막기 위해, 공동체의 안전을 위해, 지역사회를 위해 저희 모두들다 비대면 예배로 드리길 권고합니다. 어려움과 아픔 가운데서도 우리와 함께하시고, 위기를 통해서도 기대하지 못하는 선물을 주시는 하나님을 믿으며, 그분의 형안과 치유의 은혜가 여러분 모두에게 함께 하시길 기도합니다. </Text>
            <Text style={styles.paragraph}>온라인 비대면 예배는 매 주일 오전 11:20분 부터 예배 실황에 참여하실 수 있습니다.</Text>
            <Button style={styles.button_more} title="예배 정보보기" color="#A9957B" />
          </View>
          {/*Footer Container*/}
          <View style={styles.footer_container}>
            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
              <Text style={styles.footer_main_title}>Contact</Text>
              <Text style={styles.footer_title}>Korean Ministry: 323-774-2992</Text>
              <Text style={styles.footer_title}>cvkumc@gmail.com</Text>
              <Text style={styles.footer_title}>English Ministry: 818-249-6173</Text>
              <Text style={styles.footer_title}>info@cvumc.org</Text>
              <Text style={styles.footer_title}>Address: 2700 Montrose Ave. Montrose, California, 91020</Text>
              <View style={{ height: 0.5, width: '100%', backgroundColor: '#FFFFFF', marginVertical: 10 }} />
              <Text style={styles.footer_title}>크레센타벨리 한인 연합 감리교회</Text>
              <Text style={styles.footer_title}>Crescenta Valley Korean United Methodist Church</Text>
              <Text style={styles.footer_title}>담임목사: 김용근 목사</Text>
              <Text style={styles.footer_title}>Pastor: Rev. Kim, Yeoung Keun</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
  container: {
  },
  about_container: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    marginBottom: 20,
  },
  about_title: {
    marginHorizontal: 10,
    marginTop: 10,
    textAlign: "center",
    alignItems: "center",
    fontSize: 22,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  about_paragraph: {
    marginHorizontal: 10,
    fontSize: 16,
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 24
  },
  qt_title: {
    color: "white",
    fontSize: 36,
    alignSelf: "center",
  },
  qt_iamge_text: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120,
    marginHorizontal: 45,
    fontFamily: "Amiri_400Regular",
  },
  qt_iamge: {
    marginHorizontal: 10,
    marginVertical: 10,
    height: 400,
  },
  cover_image: {
    width: '100%',
    height: 350
  },
  box_container: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: 25,
    marginVertical: 20,
    backgroundColor: 'rgb(242, 240, 237)'
  },
  news_subtitle: {
    width: '80%',
    marginTop: 20,
    textAlign: "center",
    alignItems: "center",
    fontSize: 16,
    fontFamily: "sans-serif",
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#865840"

  },
  welcome_image: {
    width: '90%',
    height: 175,
    marginHorizontal: 25,
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 14,
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 25
  },
  news_title: {
    marginTop: 10,
    textAlign: "center",
    alignItems: "center",
    fontSize: 22,
    fontFamily: "sans-serif",
  },
  button_more: {
    marginBottom: 10,
  },
  footer_container: {
    width: "100%",
    backgroundColor: "#5c4c2c"
  },
  footer_main_title: {
    width: "100%",
    color: "white",
    fontSize: 14,
    lineHeight: 22,
    fontSize: 22,
    marginVertical: 10
  },
  footer_title: {
    width: "100%",
    color: "white",
    fontSize: 14,
    lineHeight: 22,
  }
});

export default Home;