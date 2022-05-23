import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemTree from "./components/ItemTree";
import { SIZES } from "../../theme/Theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  data: any;
};

const DATA = {
  nid: "42",
  ID: "UCI022M034",
  ganaderia_color_1: "",
  ganaderia_color_2: "",
  ganaderia_color_3: "",
  ganaderia_logo: "",
  nombre: "Prueba",
  ganaderia_nombre: "TORREALTA",
  media_caballo: 0,
  media_muleta: 0,
  media: 0,
  madre: "",
  padre: "",
  padres: {
    madre: {
      padres: {
        madre: [],
        padre: [],
      },
    },
    padre: {
      padres: {
        madre: [],
        padre: [],
      },
    },
  },
};

const CattleTree = ({ data }: Props) => {
  //console.log(data);
  const { bottom } = useSafeAreaInsets();

  const { padres } = DATA;
  const { madre, padre } = padres;

  const abueloP = padre.padres.padre;
  const abuelaP = padre.padres.madre;
  // const bisabueloPP = abueloP.padres?.padre;
  // const bisabuelaPP = abueloP.padres?.madre;
  // const bisabuelaMP = abuelaP.padres?.padre;
  // const bisabueloMP = abuelaP.padres?.madre;

  // const abueloM = madre.padres.padre;
  // const abuelaM = madre.padres.madre;
  // const bisabueloMM = abueloM.padres?.padre;
  // const bisabuelaMM = abueloM.padres?.madre;
  // const bisabuelaMMM = abuelaM.padres?.padre;
  // const bisabueloMMM = abuelaM.padres?.madre;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        contentInset={{ bottom }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.branchContainer}>
            <ItemTree />
            <ItemTree />
          </View>
          <View style={styles.branchContainer}>
            <ItemTree />
            <ItemTree />
            <ItemTree />
            <ItemTree />
          </View>
          <View style={styles.branchContainer}>
            <ItemTree />
            <ItemTree />
            <ItemTree />
            <ItemTree />
            <ItemTree />
            <ItemTree />
            <ItemTree />
            <ItemTree />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CattleTree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    margin: SIZES.s,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
  },
  branchContainer: {
    justifyContent: "space-around",
    width: "30%",
  },
});

// Object {
//   "ID": "UCI022M034",
//   "ganaderia_color_1": "",
//   "ganaderia_color_2": "",
//   "ganaderia_color_3": "",
//   "ganaderia_logo": "",
//   "ganaderia_nombre": "TORREALTA",
//   "madre": "",
//   "media": 0,
//   "media_caballo": 0,
//   "media_muleta": 0,
//   "nid": "42",
//   "nombre": "Prueba",
//   "padre": "",
//   "padres": Object {
//     "madre": Object {
//       "padres": Object {
//         "madre": Array [],
//         "padre": Array [],
//       },
//     },
//     "padre": Object {
//       "padres": Object {
//         "madre": Array [],
//         "padre": Array [],
//       },
//     },
//   },
// }
