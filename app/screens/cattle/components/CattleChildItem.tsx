import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../../../theme/Theme";
import TableCell from "../../dashboard/components/TableCell";

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
  const { index, numero, nombre, madre, guarismo, sexo, nota_campo } = animal;
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
      <TableCell tittle={numero} cellWidth="10%" primary />
      <TableCell tittle={nombre} cellWidth="20%" primary />
      <TableCell tittle={madre} cellWidth="20%" primary />
      <TableCell tittle={guarismo.toString()} cellWidth="20%" primary />
      <TableCell tittle={sexo} cellWidth="20%" primary />
      <TableCell
        tittle={nota_campo ? nota_campo : "0"}
        cellWidth="10%"
        primary
      />
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
