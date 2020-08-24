import React from "react";
import { View, Button, Text, SafeAreaView, ScrollView, Image, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Image style={styles.cover_image} source={require('../assets/image_3.jpg')} />
        {/*About Container*/}
        <View style={styles.box_container}>
          <Text style={styles.news_title}>크레센타벨리 한인 연합 감리교회 방문을 환영합니다</Text>
          <Image style={styles.welcome_image} source={require('../assets/image_9.jpg')} />
          <Text style={styles.welcome_text_2}>크레센타밸리한인연합감리교회는 오직 이 땅위에 좋은 교회의 터전을 닦아 하나님 나라의 초석이 되고 주님께 드린다는 선교적 사명의 일념으로 교인들과 합심하여 “하나님의 사랑을 이루어가는 생활 공동체”의 꿈을 함께 이루어가고 있습니다.</Text>
        </View>
        {/*Services Container*/}
        <View style={styles.box_container}>
          <Text style={styles.news_title}>예배란?</Text>
          <Image style={styles.welcome_image} source={require('../assets/image_2.jpg')} />
          <Text style={styles.welcome_text_2}>나에게 꼭 필요한 은혜를 부어주시는 하나님을 만나는 시간입니다. 바쁜 이민의 삶 가운데 영적인 끈을 놓치지 않기 위해 예배는 우리의 영적 순도를 확인하는 시금석과 같습니다. 예배 후에는 교우들간에 여유 있는 식사와 교제를 나누실 수 있습니다.</Text>
        </View>
        {/*News Container*/}
        <View style={styles.box_container}>
          <Text style={styles.news_title}>교회소식</Text>
          <View style={{ height: 10, width: '45%', color: 'black', borderBottomWidth: 1 }} />
          <Text style={styles.welcome_text_2}>코로나 바이러스 (Covid-19)로 인하여 당분간 비대면 예배를 드립니다. 기하급수적으로 늘어나는 전염 사태를 막기 위해, 공동체의 안전을 위해, 지역사회를 위해 저희 모두들다 비대면 예배로 드리길 권고합니다. 어려움과 아픔 가운데서도 우리와 함께하시고, 위기를 통해서도 기대하지 못하는 선물을 주시는 하나님을 믿으며, 그분의 형안과 치유의 은혜가 여러분 모두에게 함께 하시길 기도합니다. </Text>
          <View style={{ height: 10, width: '75%', color: 'black', borderBottomWidth: 1 }} />
          <Text style={styles.welcome_text_2}>온라인 비대면 예배는 매 주일 오전 11:20분 부터 예배 실황에 참여하실 수 있습니다.</Text>
          <Button style={styles.button_more} title="예배 정보보기" color="#A9957B" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
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
  welcome_text: {
    marginTop: 10,
    textAlign: "center",
    alignItems: "center",
    fontSize: 18,
    fontFamily: "sans-serif",
    fontStyle: "italic"
  },
  welcome_image: {
    width: '85%',
    height: 175,
    marginHorizontal: 25,
    marginVertical: 10,
  },
  welcome_text_2: {
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

  }
});

export default Home;