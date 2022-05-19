import React, { useState } from "react";
import { StyleSheet, View, Pressable, ViewStyle } from "react-native";
import { COLORS, SIZES } from "../theme/Theme";
import Text from "./Text";

type Props = {
  tabs: string[];
  handleSelectTab: (tab: string) => void;
  tabSelected: string;
};

const TopTabs = ({ tabs = ["test"], tabSelected, handleSelectTab }: Props) => {
  return (
    <View style={styles().container}>
      <View style={styles().listTab}>
        {tabs.map((tab, i) => (
          <Pressable
            key={i}
            onPress={() => handleSelectTab(tab)}
            style={styles(tabSelected === tab).btnTab}
          >
            <Text style={styles(tabSelected === tab).text}>{tab}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default TopTabs;

const styles = (focus?: boolean) =>
  StyleSheet.create({
    container: {
      margin: SIZES.s,
      justifyContent: "center",
    },
    listTab: {
      flexDirection: "row",
      justifyContent: "space-between",

      backgroundColor: COLORS.white2,
      borderRadius: SIZES.xl,
    },
    btnTab: {
      flex: 1,
      height: 42,
      paddingVertical: SIZES.xs,
      paddingHorizontal: SIZES.l,
      backgroundColor: focus ? COLORS.primary : "transparent",
      borderColor: COLORS["gray-medium"],
      justifyContent: "center",
      alignItems: "center",
      borderRadius: SIZES.xl,
    },
    text: {
      color: focus ? COLORS.white2 : COLORS["gray-medium"],
    },
  });
