import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../../components";
import { COLORS, SIZES } from "../../../theme/Theme";

type Props = {
  title: string;
  value: string;
};

const CellCard = ({ title, value = "N/A" }: Props) => {
  return (
    <View style={styles.cell}>
      <Text style={styles.value}>{value}</Text>
      <Text body style={styles.title}>
        {title.replace("_", " ")}
      </Text>
    </View>
  );
};

export default CellCard;

const styles = StyleSheet.create({
  cell: {
    justifyContent: "center",
    alignItems: "center",
    width: "33%",
    marginVertical: SIZES.m,
  },
  title: {
    textTransform: "capitalize",
    textAlign: "center",
  },
  value: {
    color: COLORS.primary,
    fontSize: 32,
    marginBottom: SIZES.xs,
  },
});
