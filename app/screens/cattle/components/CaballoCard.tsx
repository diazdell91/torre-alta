import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../../components";
import { AnimalCaballoProps } from "../../../types";
import CellCard from "./CellCard";

type Props = {
  data: AnimalCaballoProps;
};

const CaballoCard = ({ data }: Props) => {
  const { observaciones } = data;

  const keys = Object.keys(data).filter((key) => key !== "observaciones");

  return (
    <View>
      <Text>{observaciones}</Text>
      <View style={styles.container}>
        {keys.map((item, i) => (
          <CellCard key={i} title={item} value={(data as any)[item]} />
        ))}
      </View>
    </View>
  );
};

export default CaballoCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
