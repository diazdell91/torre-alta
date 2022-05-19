import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text } from "../../../components";
import { COLORS, SIZES } from "../../../theme/Theme";

type AnimalProps = {
  ID: number;
  index: number;
  numero: string;
  nombre: string;
  madre: string;
  guarismo: number;
  sexo: string;
  nota_campo: string;
};
type Props = {
  animal: AnimalProps;
};

const CattleChildItem = ({ animal }: Props) => {
  const {
    index,
    numero,
    nombre,
    madre,
    guarismo,
    sexo,
    nota_campo = "6,6",
  } = animal;
  const { navigate } = useNavigation<any>();
  const backgroundColor = index % 2 === 0 ? COLORS.white2 : COLORS.white;
  const color = index % 3 === 0 ? COLORS["gray-medium"] : COLORS.primary;

  const handleNavigate = () => {
    navigate("CattleLayout", {
      id: animal.ID,
      name: animal.nombre,
    });
  };

  return (
    <Pressable
      onPress={handleNavigate}
      style={{ ...styles.container, backgroundColor }}
    >
      <View style={{ flex: 0.5 }}>
        <Text body color={color}>
          {numero}
        </Text>
      </View>
      <View style={{ flex: 2 }}>
        <Text body color={color}>
          {nombre}
        </Text>
      </View>
      <View style={{ flex: 2 }}>
        <Text body color={color}>
          {madre}
        </Text>
      </View>
      <View style={styles.row}>
        <Text body color={color}>
          {guarismo}
        </Text>
      </View>
      <View style={styles.row}>
        <Text body color={color}>
          {sexo}
        </Text>
      </View>
      <View style={styles.row}>
        <Text body color={color}>
          {nota_campo}
        </Text>
      </View>
    </Pressable>
  );
};

export default CattleChildItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SIZES.m,
    backgroundColor: COLORS.white,
  },
  row: {
    flex: 1,
    justifyContent: "center",
  },
});
