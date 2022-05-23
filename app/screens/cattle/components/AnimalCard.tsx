import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Text } from "../../../components";
import { COLORS, SIZES } from "../../../theme/Theme";

type Props = {
  data: {
    media_caballo: string;
    media_muleta: string;
    media_total: string;
  };
};

const AnimalCard = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Icon name="Horse" size={45} />
        <Text style={styles.counter}>{data.media_caballo}</Text>
        <Text color={COLORS.primary}>caballo</Text>
      </View>
      <View style={styles.card}>
        <Icon name="Muleta" color={COLORS.primary} size={45} />
        <Text style={styles.counter}>{data.media_muleta}</Text>
        <Text color={COLORS.primary}>Muleta</Text>
      </View>
      <View style={{ ...styles.card, backgroundColor: COLORS.primary }}>
        <Icon name="Cow" color={COLORS.white2} size={45} />
        <Text style={{ ...styles.counter, color: COLORS.white2 }}>
          {data.media_total}
        </Text>
        <Text color={COLORS.white2}>Media</Text>
      </View>
    </View>
  );
};

export default AnimalCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  card: {
    flex: 1,
    margin: SIZES.xs,
    borderRadius: SIZES.s,
    backgroundColor: COLORS.white2,
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.m,
  },
  counter: {
    color: COLORS.primary,
    fontSize: 32,
  },
});
