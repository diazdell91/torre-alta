import { StyleSheet, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../theme/Theme";
import { Text } from "../../../components";

type Props = {
  observations: string;
};

const Obaservations = ({ observations }: Props) => {
  return (
    <View style={{ margin: SIZES.xs, borderRadius: SIZES.s }}>
      <View style={{ ...styles.containerHeader }}>
        <Text h1 color={COLORS.white2}>
          Observaciones campo
        </Text>
      </View>
      <View style={styles.containerBody}>
        <Text>{observations}</Text>
      </View>
    </View>
  );
};

export default Obaservations;

const styles = StyleSheet.create({
  containerHeader: {
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.m,
    backgroundColor: "#000",
    borderTopLeftRadius: SIZES.s,
    borderTopRightRadius: SIZES.s,
  },
  containerBody: {
    padding: SIZES.m,
    backgroundColor: COLORS.white2,
    boederBottomLeftRadius: SIZES.s,
    borderBottomRightRadius: SIZES.s,
  },
});
