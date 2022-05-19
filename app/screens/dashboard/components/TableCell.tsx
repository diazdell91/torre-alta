import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../../components";
import { COLORS } from "../../../theme/Theme";

type Props = {
  cellWidth: "10%" | "35%" | "20%" | "15%" | "100%";
  tittle: string;
  color?: string;
  primary?: boolean;
  flexEnd?: boolean;
};

const TableCell = ({
  cellWidth,
  tittle,
  color = COLORS.white,
  primary,
}: Props) => {
  const cellStyles = StyleSheet.flatten([
    { alignItems: "flex-start", width: "100%" } && {
      width: cellWidth,
    },
  ]);

  return (
    <View style={cellStyles}>
      <Text body color={primary ? COLORS.primary : color}>
        {tittle}
      </Text>
    </View>
  );
};

export default TableCell;
