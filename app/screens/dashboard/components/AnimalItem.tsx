import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../../../theme/Theme";
import TableCell from "./TableCell";

type AnimalProps = {
  ID: number;
  index: number;
  numero: string;
  nombre: string;
  guarismo: number;
  sexo: string;
  codigo: string;
};
type Props = {
  animal: AnimalProps;
};

const AnimalItem = ({ animal }: Props) => {
  const { index, numero, nombre, guarismo, sexo, codigo } = animal;
  const { navigate } = useNavigation<any>();
  const backgroundColor = index % 2 === 0 ? COLORS.white2 : COLORS.white;

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
      <TableCell cellWidth="10%" tittle={numero} primary />
      <TableCell cellWidth="35%" tittle={nombre} primary />
      <TableCell cellWidth="20%" tittle={guarismo.toString()} primary />
      <TableCell cellWidth="20%" tittle={sexo} primary />
      <TableCell cellWidth="15%" tittle={codigo.toUpperCase()} primary />
    </Pressable>
  );
};

export default AnimalItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: SIZES.m,
    paddingHorizontal: SIZES.xs,
    backgroundColor: COLORS.white,
  },
});
