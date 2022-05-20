import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS, SIZES } from "../../../theme/Theme";
import { Text } from "../../../components";
import * as Progress from "react-native-progress";
import Layout from "../../../theme/Layout";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

type Props = {
  progress: number;
};

const UploadProgress = ({ progress }: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="progress-upload" size={22} style={{ marginEnd: 4 }} />
        <View style={{ flex: 1 }}>
          <Text>Subiendo video</Text>
        </View>
      </View>

      <Progress.Bar
        progress={progress / 100}
        unfilledColor={COLORS.backDrop}
        color={COLORS.primary}
        borderColor={COLORS.backDrop}
        height={SIZES.xs}
        borderRadius={SIZES.s}
        width={Layout.window.width * 0.85}
        style={{ marginTop: SIZES.s }}
      />
    </View>
  );
};

export default UploadProgress;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.m,
    borderRadius: SIZES.s,
    justifyContent: "space-between",
    alignItems: "center",
    padding: SIZES.m,
    backgroundColor: COLORS.secundary,
  },
  progress: {
    flex: 1,
  },
});
