import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../theme/Theme";
import { Text } from "../../../components";

type Props = {};

const TableHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text body color={COLORS.white}>
        N°
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text body color={COLORS.white}>
          Nombre
        </Text>
        <Icon name="chevron-down" color={COLORS.white} size={16} />
      </View>
      <Text body color={COLORS.white}>
        Guariso
      </Text>
      <Text body color={COLORS.white}>
        Sexo
      </Text>
      <Text body color={COLORS.white}>
        Código
      </Text>
    </View>
  );
};

export default TableHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    justifyContent: "space-between",
    padding: SIZES.l,
  },
});
