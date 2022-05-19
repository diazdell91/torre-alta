import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../../components";
import { COLORS, SIZES } from "../../../theme/Theme";

type InfoProps = {
  guarismo: string;
  numero: string;
  sexo: string;
  pelo: string;
  madre: string;
  padre: string;
  fecha_lidia: string;
  torero: string;
  lugar: string;
  fecha_ab: string;
  destino: string;
  crotal: string;
};
type Props = {
  data: InfoProps;
};

const AnirmalCardInfo = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Guarismo:
          <Text body>{` ${data.guarismo}`}</Text>
        </Text>
        <Text style={styles.title}>
          Número:
          <Text body>{` ${data.numero}`}</Text>
        </Text>
        <Text style={styles.title}>
          Sexo:
          <Text body>{` ${data.sexo}`}</Text>
        </Text>
        <Text style={styles.title}>
          Pelo:
          <Text body>{` ${data.pelo}`}</Text>
        </Text>
        <Text style={styles.title}>
          Madre:
          <Text body>{` ${data.madre}`}</Text>
        </Text>
        <Text style={styles.title}>
          Padre:
          <Text body>{` ${data.padre}`}</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.title}>
          F. de lidia:
          <Text body>{` ${data.fecha_lidia}`}</Text>
        </Text>
        <Text style={styles.title}>
          Torero:
          <Text body>{` ${data.torero}`}</Text>
        </Text>
        <Text style={styles.title}>
          Lugar:
          <Text body>{` ${data.lugar}`}</Text>
        </Text>
        <Text style={styles.title}>
          F.Alta-Baja:
          <Text caption>{` ${data.fecha_ab}`}</Text>
        </Text>
        <Text style={styles.title}>
          Destino:
          <Text body>{` ${data.destino}`}</Text>
        </Text>
        <Text style={styles.title}>
          Crotal:
          <Text body>{` ${data.crotal}`}</Text>
        </Text>
      </View>
    </View>
  );
};

export default AnirmalCardInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: COLORS.white2,
    margin: SIZES.s,
    borderRadius: SIZES.xs,
    padding: SIZES.m,
  },
  title: {
    color: COLORS.primary,
    lineHeight: SIZES.m,
    marginBottom: SIZES.xs,
  },
});
