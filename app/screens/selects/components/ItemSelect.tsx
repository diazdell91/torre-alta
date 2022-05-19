import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../../components";
import { COLORS, SIZES } from "../../../theme/Theme";

type Props = {
  item: {
    key: string;
    value: string;
  };
};

const ItemSelect = ({ item }: Props) => {
  const { key, value } = item;
  return (
    <View style={styles.container}>
      <Text color={COLORS.white2}>{value}</Text>
    </View>
  );
};

export default ItemSelect;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.m,
    marginTop: SIZES.xxs,
    borderRadius: SIZES.xs,
    height: SIZES.inputHeight,
    justifyContent: "center",
  },
});
