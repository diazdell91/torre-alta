import { StyleSheet, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../theme/Theme";
import { Icon, Text } from "../../../components";

type Props = {};

const UploadProgress = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="xls" />
        <Text>Subiendo video</Text>
      </View>
    </View>
  );
};

export default UploadProgress;

const styles = StyleSheet.create({
  container: {
    margin: SIZES.m,
    borderRadius: SIZES.s,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SIZES.m,
    backgroundColor: COLORS.secundary,
  },
});
