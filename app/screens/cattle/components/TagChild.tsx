import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Text } from "../../../components";
import { COLORS, SIZES } from "../../../theme/Theme";

type Props = {};

const TagChild = (props: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.section,
          { borderEndWidth: 0.2, borderColor: COLORS["gray-dark"] },
        ]}
      >
        <Icon name="male" />
        <View style={styles.inf}>
          <Text>Machos</Text>
          <Text caption>Media</Text>
        </View>
      </View>
      {/*  */}
      <View style={styles.section}>
        <Icon name="male" />
        <View style={styles.inf}>
          <Text>Machos</Text>
          <Text caption>Media</Text>
        </View>
      </View>
    </View>
  );
};

export default TagChild;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: SIZES.s,
    borderRadius: SIZES.xs,
    backgroundColor: COLORS.white2,
  },
  section: {
    flex: 1,
    padding: SIZES.xs,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inf: { justifyContent: "center", alignItems: "center", marginStart: SIZES.m },
});
