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
        <Icon name="caballox2" />
        <Text style={styles.counter}>{data.media_caballo}</Text>
        <Text color={COLORS.primary}>caballo</Text>
      </View>
      <View style={styles.card}>
        <Icon name="vacax2" />
        <Text style={styles.counter}>{data.media_total}</Text>
        <Text color={COLORS.primary}>Media</Text>
      </View>
      <View style={{ ...styles.card, backgroundColor: COLORS.primary }}>
        <Icon name="muletax2" />
        <Text style={{ ...styles.counter, color: COLORS.white2 }}>
          {data.media_muleta}
        </Text>
        <Text color={COLORS.white2}>Muleta</Text>
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
