import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../../components";
import { AnimalMuletaProps } from "../../../types";
import CellCard from "./CellCard";

type Props = {
  data: AnimalMuletaProps;
};

const MuletaCard = ({ data }: Props) => {
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

export default MuletaCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
