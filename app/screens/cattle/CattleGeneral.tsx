import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AnimalCard from "./components/AnimalCard";
import AnirmalCardInfo from "./components/AnirmalCardInfo";
import CollapseCard from "./components/CollapseCard";
import CaballoCard from "./components/CaballoCard";
import MuletaCard from "./components/MuletaCard";
import DetailsCard from "./components/DetailsCard";
import Obaservations from "./components/Obaservations";

type Props = {
  data: any;
};

const CattleGeneral = ({ data }: Props) => {
  console.log(data);
  const animal = data[0];
  const caballo = animal?.caballo;
  const muleta = animal?.muleta;
  const details = animal?.details;
  const observations = animal?.observations;
  const media = {
    media_caballo: animal?.media_caballo,
    media_muleta: animal?.media_muleta,
    media_total: animal?.media_total,
  };

  const info = {
    guarismo: animal?.guarismo,
    numero: animal?.numero,
    sexo: animal?.sexo,
    pelo: animal?.pelo,
    madre: animal?.madre,
    padre: animal?.padre,
    fecha_lidia: animal?.fecha_lidia,
    torero: animal?.torero,
    lugar: animal?.lugar,
    fecha_ab: `${animal?.fecha_alta} ${animal?.fecha_baja}`,
    destino: animal?.destino,
    crotal: animal?.crotal,
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <AnimalCard data={media} />
        <AnirmalCardInfo data={info} />
        <CollapseCard title="Caballo">
          <CaballoCard data={caballo} />
        </CollapseCard>
        <CollapseCard title="Muleta">
          <MuletaCard data={muleta} />
        </CollapseCard>
        <CollapseCard title="Detalles">
          <DetailsCard data={details} />
        </CollapseCard>
        <Obaservations observations={observations} />
      </ScrollView>
    </View>
  );
};

export default CattleGeneral;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
