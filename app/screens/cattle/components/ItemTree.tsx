import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../../components";
import Layout from "../../../theme/Layout";
import { COLORS, SIZES } from "../../../theme/Theme";

type Props = {
  item: {
    ID: string;
    ganaderia_color_1: string;
    ganaderia_color_2: string;
    ganaderia_color_3: string;
    ganaderia_logo: string;
    nombre?: string;
    ganaderia_nombre: string;
    media_caballo: number;
    media_muleta: number;
    media: number;
  };
};

const ItemTree = ({ item }: Props) => {
  const id = item?.ID || "UCI022M034";
  const ganaderia_color_1 = item?.ganaderia_color_1 || COLORS.primary;
  const ganaderia_color_2 = item?.ganaderia_color_2 || COLORS.black;
  const ganaderia_color_3 = item?.ganaderia_color_3 || COLORS.secundary;
  const ganaderia_nombre = item?.ganaderia_nombre || "Retacon";
  const media_caballo = item?.media_caballo || 0;
  const media_muleta = item?.media_muleta || 0;
  const media = item?.media || 0;

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", height: SIZES.l }}>
        <View style={{ flex: 1, backgroundColor: ganaderia_color_1 }} />
        <View style={{ flex: 1, backgroundColor: ganaderia_color_2 }} />
        <View style={{ flex: 1, backgroundColor: ganaderia_color_3 }} />
      </View>
      <View style={{ padding: SIZES.xs }}>
        <Text h3 color={COLORS.primary}>
          {ganaderia_nombre}
        </Text>
        <Text style={styles.textInfo}>{id}</Text>
        <View style={styles.wrapperInfo}>
          <View style={styles.contentInfo}>
            <Text style={styles.textInfo}>Caballo</Text>
            <Text caption color={COLORS.primary}>
              {media_caballo.toString()}
            </Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.textInfo}>Muleta</Text>
            <Text caption color={COLORS.primary}>
              {media_muleta.toString()}
            </Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.textInfo}>Media</Text>
            <Text caption color={COLORS.primary}>
              {media.toString()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemTree;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white2,
    borderRadius: SIZES.s,
    overflow: "hidden",
    marginVertical: SIZES.xl,
    paddingBottom: SIZES.xxs,
  },
  textInfo: {
    fontFamily: "Montserrat-Medium",
    fontSize: SIZES.xs,
  },
  wrapperInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: SIZES.xxs,
  },
  contentInfo: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.xxs,
  },
});
