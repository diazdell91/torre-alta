import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS, SIZES } from "../../../theme/Theme";
import TableCell from "../../dashboard/components/TableCell";

type Props = {};

const CattleChildHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <TableCell tittle="N°" cellWidth="10%" />
      <TableCell tittle="Nombre" cellWidth="20%" />
      <TableCell tittle="Madre" cellWidth="20%" />
      <TableCell tittle="Guarismo" cellWidth="20%" />
      <TableCell tittle="Sexo" cellWidth="20%" />
      <TableCell tittle="Nota" cellWidth="10%" />
    </View>
  );
};

export default CattleChildHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.l,
    paddingHorizontal: SIZES.xs,
  },
});
