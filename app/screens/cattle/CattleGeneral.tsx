import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AnimalCard from "./components/AnimalCard";
import AnirmalCardInfo from "./components/AnirmalCardInfo";
import CollapseCard from "./components/CollapseCard";
import CaballoCard from "./components/CaballoCard";
import MuletaCard from "./components/MuletaCard";
import DetailsCard from "./components/DetailsCard";
import Obaservations from "./components/Obaservations";
import { AnimalProps } from "../../types";

type Props = {
  data: any;
};

const CattleGeneral = ({ data }: Props) => {
  if (data) {
    const animal = data[0];
    const { caballo, detalles, observaciones_campo, muleta } =
      animal as AnimalProps;

    const info = {
      guarismo: animal.guarismo,
      numero: animal.numero,
      sexo: animal.sexo,
      pelo: animal.pelo,
      madre: animal.madre,
      padre: animal.padre,
      fecha_lidia: animal.fecha_lidia,
      torero: animal.torero,
      lugar: animal.lugar,
      fecha_ab: `${animal.fecha_alta} ${animal.fecha_baja}`,
      destino: animal.destino,
      crotal: animal.crotal,
    };
    return (
      <View style={styles.container}>
        <ScrollView>
          <AnimalCard />
          <AnirmalCardInfo data={info} />
          <CollapseCard title="Caballo">
            <CaballoCard data={caballo} />
          </CollapseCard>
          <CollapseCard title="Muleta">
            <MuletaCard data={muleta} />
          </CollapseCard>
          <CollapseCard title="Detalles">
            <DetailsCard data={detalles} />
          </CollapseCard>
          <Obaservations observations={observaciones_campo} />
        </ScrollView>
      </View>
    );
  }

  return null;
};

export default CattleGeneral;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
