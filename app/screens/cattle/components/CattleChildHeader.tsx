import React from "react";
import { StyleSheet, View } from "react-native";
//import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../theme/Theme";
import { Text } from "../../../components";

type Props = {};

const CattleChildHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text body color={COLORS.white}>
        N°
      </Text>
      <Text body color={COLORS.white}>
        Nombre
      </Text>
      <Text body color={COLORS.white}>
        Madre
      </Text>
      <Text body color={COLORS.white}>
        Guarismo
      </Text>
      <Text body color={COLORS.white}>
        Sexo
      </Text>
      <Text body color={COLORS.white}>
        Nota
      </Text>
    </View>
  );
};

export default CattleChildHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    justifyContent: "space-between",
    padding: SIZES.l,
  },
});
