import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../theme/Theme";
import { Text } from "../../../components";
import TableCell from "./TableCell";

type Props = {};

const TableHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <TableCell cellWidth="10%" tittle="N°" />
      <TableCell cellWidth="35%" tittle="Nombre" />
      <TableCell cellWidth="20%" tittle="Guarismo" />
      <TableCell cellWidth="20%" tittle="Sexo" />
      <TableCell cellWidth="15%" tittle="Código" />
    </View>
  );
};

export default TableHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.l,
    paddingHorizontal: SIZES.xs,
  },
  cell: {
    alignItems: "flex-start",
  },
});
