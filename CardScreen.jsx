import React, { createRef, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Swiper from "react-native-deck-swiper";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = [
  {
    id: 1,
    color: "#97d2f0",
  },
  {
    id: 2,
    color: "#88f6ba",
  },
  {
    id: 3,
    color: "#f7d88c",
  },
  {
    id: 4,
    color: "#D48B65",
  },
  {
    id: 5,
    color: "#C45B63",
  },
];

const CardPage = () => {
  const [index, setIndex] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, height: "100%", marginTop: 50 }}>
        <Swiper
          ref={createRef()}
          cards={data}
          cardIndex={index}
          showSecondCard={true}
          verticalSwipe={false}
          stackSize={3}
          stackAnimationFriction={15}
          stackAnimationTension={40}
          stackScale={5}
          stackSeparation={22}
          renderCard={(item) => (
            <View style={[styles.card, { backgroundColor: item.color }]} />
          )}
          infinite
          backgroundColor={"transparent"}
          onSwiped={() => setIndex(index + 1)}
          animateOverlayLabelsOpacity
          animateCardOpacity
          disableTopSwipe
          disableBottomSwipe
          overlayLabels={{
            left: {
              element: (
                <MaterialCommunityIcons
                  name="close-circle"
                  size={70}
                  color="#D45E5C"
                />
              ),
              style: {
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 5,
                  marginLeft: -5,
                },
              },
            },
            right: {
              element: (
                <MaterialIcons name="check-circle" size={70} color="#48AC87" />
              ),
              style: {
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 5,
                  marginLeft: 5,
                },
              },
            },
          }}
          overlayLabelStyle={{
            overflow: "hidden",
            backgroundColor: "transparent",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CardPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 7.5,
    shadowRadius: 20,
    shadowOpacity: 0.1,
    height: "85%",
  },
});
