import React from "react";
import { View, StyleSheet } from "react-native";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { Divider, Text } from "../../../components";
import { AnimalDetailsProps } from "../../../types";
import CellCard from "./CellCard";
import { COLORS, SIZES } from "../../../theme/Theme";

type Props = {
  data: AnimalDetailsProps;
};

const DetailsCard = ({ data }: Props) => {
  const {
    observaciones,
    trofeo_toro,
    trofeo_torero,
    ejercicio_fisico,
    pienso,
  } = data;
  const keysss = Object.keys(data).filter((key) => key !== "observaciones");
  const keys = ["peso", "nota_campo"];
  console.log(keysss);

  return (
    <View>
      <View style={{ marginBottom: SIZES.l }}>
        <Text>{observaciones}</Text>
      </View>
      <Divider />
      <View style={{ flex: 1, padding: SIZES.l }}>
        <Text style={styles.value}>{trofeo_toro}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text> Trofeo Toro</Text>
        </View>
      </View>
      <Divider />
      <View style={{ flex: 1, padding: SIZES.l }}>
        <Text style={styles.value}>{trofeo_torero}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text> Trofeo Torero</Text>
        </View>
      </View>
      <Divider />
      <View style={{ flex: 1, padding: SIZES.l }}>
        <Text style={styles.value}>{ejercicio_fisico}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text> Ejercicio Físico</Text>
        </View>
      </View>
      <Divider />
      <View style={{ flex: 1, padding: SIZES.l }}>
        <Text style={styles.value}>{pienso}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text> Pienso</Text>
        </View>
      </View>
      <Divider />

      <View style={styles.container}>
        {keys.map((item, i) => (
          <CellCard key={i} title={item} value={(data as any)[item]} />
        ))}
      </View>
    </View>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  value: {
    color: COLORS.primary,
    fontSize: SIZES.h1,
    marginBottom: SIZES.xs,
  },
});
