import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Input, InputSelect, Notifications } from "../../components";
import { COLORS, SIZES } from "../../theme/Theme";
import {
  cattleServices,
  SELECT_BULLF,
  SELECT_BULLF_TROPHY,
  SELECT_BULL_TROPHY,
  SELECT_EXERCISE,
  SELECT_FEED,
  SELECT_HAIR,
  SELECT_PLACE,
  SELECT_SEX,
  updateCattle,
} from "../../apis/cattle";
import LoadingScreen from "../loading/LoadingScreen";
import IconAdd from "../../router/components/IconAdd";
import { defaultValues } from "./deaultValues";
import { cleanEmptyObj } from "../../helper/cleanEmptyObj";
import CollapseCardEdit from "./components/CollapseCardEdit";
import objToArray from "../../helper/objToArray";
import InputDropDown from "../../components/InputDropDown";

interface SelectsParams {
  sex: Array<any>;
  hair: Array<any>;
  bullf: Array<any>;
  place: Array<any>;
  bullTrophy: Array<any>;
  bullfTrophy: Array<any>;
  exercise: Array<any>;
  feed: Array<any>;
}

const CattleEdit = ({ navigation, route }: any) => {
  const { bottom } = useSafeAreaInsets();
  const { id, name } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [values, setValues] = useState(defaultValues);

  //selects
  const [selects, setSelects] = useState<SelectsParams>({
    sex: [],
    hair: [],
    bullf: [],
    place: [],
    bullTrophy: [],
    bullfTrophy: [],
    exercise: [],
    feed: [],
  });

  const handleChange = useCallback(
    (name: string, value: string) => {
      setValues({
        ...values,
        [name]: value,
      });
    },
    [values]
  );

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    const data = { ...values, ...{ ID: id } };
    const cleanData = cleanEmptyObj(data);

    const resp = await updateCattle({
      ...cleanData,
    });

    if (resp.data) {
      console.log(resp.data);
      setIsLoading(false);
      navigation.navigate("CattleLayout", {
        id,
        name,
      });
    }
    if (resp.error) {
      console.log(resp.error);
      setIsLoading(false);
      setIsVisible(true);
      setError("Error al actualizar este animal");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const getSelects = async () => {
      let urls = [
        SELECT_SEX,
        SELECT_HAIR,
        SELECT_BULLF,
        SELECT_PLACE,
        SELECT_BULL_TROPHY,
        SELECT_BULLF_TROPHY,
        SELECT_EXERCISE,
        SELECT_FEED,
      ];
      let requestSelects = urls.map((url) => cattleServices.get(url));
      Promise.all(requestSelects)
        .then((resp) => {
          const sex = objToArray(resp[0].data as any);
          const hair = objToArray(resp[1].data as any);
          const bullf = objToArray(resp[2].data as any);
          const place = objToArray(resp[3].data as any);
          const bullTrophy = objToArray(resp[4].data as any);
          const bullfTrophy = objToArray(resp[5].data as any);
          const exercise = objToArray(resp[6].data as any);
          const feed = objToArray(resp[7].data as any);

          setSelects({
            sex,
            hair,
            bullf,
            place,
            bullTrophy,
            bullfTrophy,
            exercise,
            feed,
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    getSelects();
  }, []);

  if (isLoading) {
    return <LoadingScreen color={COLORS.primary} />;
  }

  return (
    <View style={{ ...styles.container, paddingBottom: bottom }}>
      <ScrollView contentInset={{ bottom }}>
        <View style={styles.inputNcontainer}>
          <Input
            flex
            placeholder="N° caballo"
            onChangeText={(text) => handleChange("media_caballo", text)}
            keyboardType="numeric"
            style={styles.inputN}
          />
          <Input
            flex
            placeholder="N° Muleta"
            onChangeText={(text) => handleChange("media_muleta", text)}
            keyboardType="numeric"
            style={styles.inputN}
          />
          <Input
            flex
            placeholder="N° media"
            onChangeText={(text) => handleChange("media_total", text)}
            keyboardType="numeric"
            style={styles.inputN}
          />
        </View>
        {/* <InputSelect placeholder="Guarismo" iconRight={"flechaAbajo"} /> */}
        <Input
          placeholder="N°"
          onChangeText={(text) => handleChange("numero", text)}
          keyboardType="numeric"
        />
        <InputDropDown
          data={selects.sex}
          placeholder="Sexo"
          value={values.sexo}
          onChange={(item) => {
            setValues({ ...values, sexo: item.value });
          }}
        />
        <InputDropDown
          data={selects.hair}
          placeholder="Pelo"
          value={values.pelo}
          onChange={(item) => {
            setValues({ ...values, pelo: item.value });
          }}
        />
        <Input
          placeholder="Madre o número..."
          onChangeText={(text) => handleChange("madre", text)}
        />
        <Input
          placeholder="Padre o número..."
          onChangeText={(text) => handleChange("padre", text)}
        />
        <InputSelect
          placeholder="Fecha de lidea"
          value={values.fecha_lidia}
          onChangeDate={(item) => {
            console.log(item);
            setValues({ ...values, fecha_lidia: item.value });
          }}
          calendar
        />
        <View style={styles.inputRowIcon}>
          <InputDropDown
            data={selects.bullf}
            placeholder="Torero"
            value={values.torero}
            onChange={(item) => {
              setValues({ ...values, torero: item.value });
            }}
          />
          <IconAdd style={{ marginEnd: SIZES.m }} />
        </View>
        <View style={styles.inputRowIcon}>
          <InputDropDown
            data={selects.place}
            placeholder="Lugar"
            value={values.lugar}
            onChange={(item) => {
              setValues({ ...values, lugar: item.value });
            }}
          />
          <IconAdd style={{ marginEnd: SIZES.m }} />
        </View>
        <View style={styles.inputNcontainer}>
          <InputSelect
            placeholder="F.Alta"
            iconRight={"calendar"}
            style={styles.inputN}
            value={values.fecha_alta}
            onChangeDate={(item) => {
              console.log(item);
              setValues({ ...values, fecha_alta: item.value });
            }}
            calendar
          />

          <InputSelect
            placeholder="F.Baja"
            iconRight={"calendar"}
            style={styles.inputN}
            value={values.fecha_baja}
            onChangeDate={(item) => {
              console.log(item);
              setValues({ ...values, fecha_baja: item.value });
            }}
            calendar
          />
        </View>
        <Input
          placeholder="Destino"
          onChangeText={(text) => handleChange("destino", text)}
        />
        <Input
          placeholder="Crotal"
          onChangeText={(text) => handleChange("crotal", text)}
        />
        <CollapseCardEdit title="Caballo">
          <Input
            placeholder="Descricción..."
            onChangeText={(text) => handleChange("caballo_descripcion", text)}
            multiline
            style={{
              minHeight: SIZES.inputHeight * 2,
              paddingTop: SIZES.m,
              paddingBottom: SIZES.m,
            }}
          />
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Distancia"
              onChangeText={(text) => handleChange("distancia_caballo", text)}
            />
            <Input
              flex
              placeholder="Fijeza"
              onChangeText={(text) => handleChange("fijeza_caballo", text)}
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Prontitud"
              onChangeText={(text) => handleChange("prontitud_caballo", text)}
            />
            <Input
              flex
              placeholder="Galope"
              onChangeText={(text) => handleChange("galope_caballo", text)}
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Humilla"
              onChangeText={(text) => handleChange("humilla_caballo", text)}
            />
            <Input
              flex
              placeholder="Empuja"
              onChangeText={(text) => handleChange("empuja_caballo", text)}
            />
          </View>
        </CollapseCardEdit>
        <CollapseCardEdit title="Muleta">
          <Input
            placeholder="Descricción..."
            onChangeText={(text) => handleChange("muleta_descripcion", text)}
            multiline
            style={{
              minHeight: SIZES.inputHeight * 2,
              paddingTop: SIZES.m,
              paddingBottom: SIZES.m,
            }}
          />
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Bravura"
              onChangeText={(text) => handleChange("bravura_muleta", text)}
            />
            <Input
              flex
              placeholder="Fijeza"
              onChangeText={(text) => handleChange("fijeza_muleta", text)}
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Empleo"
              onChangeText={(text) => handleChange("empleo_muleta", text)}
            />
            <Input
              flex
              placeholder="Repetir"
              onChangeText={(text) => handleChange("repetir_muleta", text)}
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Querencia"
              onChangeText={(text) => handleChange("querencia_muleta", text)}
            />
            <Input
              flex
              placeholder="Prontitud"
              onChangeText={(text) => handleChange("prontitud_muleta", text)}
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Desarrollo"
              onChangeText={(text) => handleChange("desarrollo_muleta", text)}
            />
            <Input
              flex
              placeholder="Nobleza"
              onChangeText={(text) => handleChange("nobleza_muleta", text)}
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Humilla"
              onChangeText={(text) => handleChange("humilla_muleta", text)}
            />
            <Input
              flex
              placeholder="Rectitud"
              onChangeText={(text) => handleChange("rectitud_muleta", text)}
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Recorrido"
              onChangeText={(text) => handleChange("recorrido_muleta", text)}
            />
            <Input
              flex
              placeholder="Movilidad"
              onChangeText={(text) => handleChange("movilidad_muleta", text)}
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Clase"
              onChangeText={(text) => handleChange("clase_muleta", text)}
            />
            <Input
              flex
              placeholder="Fuerza"
              onChangeText={(text) => handleChange("fuerza_muleta", text)}
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Empuja"
              onChangeText={(text) => handleChange("empuja_muleta", text)}
            />
            <Input
              flex
              placeholder="Fuerza"
              onChangeText={(text) => handleChange("fuerza_muleta", text)}
            />
          </View>
        </CollapseCardEdit>
        <CollapseCardEdit title="Detalles">
          <Input
            placeholder="Descricción..."
            onChangeText={(text) => handleChange("detalles_descripcion", text)}
            multiline
            style={{
              minHeight: SIZES.inputHeight * 2,
              paddingTop: SIZES.m,
              paddingBottom: SIZES.m,
            }}
          />

          <InputDropDown
            data={selects.bullTrophy}
            placeholder="Trofeo Toro"
            value={values.lugar}
            onChange={(item) => {
              setValues({ ...values, trofeo_toro_detalles: item.value });
            }}
          />
          <InputDropDown
            data={selects.bullfTrophy}
            placeholder="Trofeo Torero"
            value={values.lugar}
            onChange={(item) => {
              setValues({ ...values, trofeo_torero_detalles: item.value });
            }}
          />
          <InputDropDown
            data={selects.exercise}
            placeholder="Ejercicio Físico"
            value={values.lugar}
            onChange={(item) => {
              setValues({ ...values, ejercicio_fisico_detalles: item.value });
            }}
          />

          <InputDropDown
            data={selects.feed}
            placeholder="Ejercicio Físico"
            value={values.lugar}
            onChange={(item) => {
              setValues({ ...values, pienso_detalles: item.value });
            }}
          />
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Nota"
              onChangeText={(text) => handleChange("nota_detalles", text)}
            />
            <Input
              flex
              placeholder="Peso"
              onChangeText={(text) => handleChange("peso_detalles", text)}
            />
          </View>
        </CollapseCardEdit>
        <Input
          placeholder="Observaciones de campo..."
          onChangeText={(text) =>
            handleChange("detalles_observaciones_campo", text)
          }
          multiline
          style={{
            minHeight: SIZES.inputHeight * 2,
            paddingTop: SIZES.m,
            paddingBottom: SIZES.m,
          }}
        />
      </ScrollView>
      <Button title="Aplicar" onPress={() => onSubmit(values)} />
      <Notifications
        isVisible={isVisible}
        handleVisible={() => setIsVisible(false)}
        notification={{
          title: "Error",
          message: error,
        }}
      />
    </View>
  );
};

export default CattleEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputNcontainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  inputN: {
    flex: 1,
  },
  inputRowIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  //
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
