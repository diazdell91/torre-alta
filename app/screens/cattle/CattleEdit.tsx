import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Button,
  IconButton,
  Input,
  InputSelect,
  Notifications,
} from "../../components";
import { COLORS, SIZES } from "../../theme/Theme";
import {
  cattleServices,
  SELECT_BULLF,
  SELECT_BULLF_TROPHY,
  SELECT_BULL_TROPHY,
  SELECT_DEST,
  SELECT_EXERCISE,
  SELECT_FEED,
  SELECT_HAIR,
  SELECT_PLACE,
  SELECT_SEX,
  updateCattle,
} from "../../apis/cattle";
import LoadingScreen from "../loading/LoadingScreen";

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
  dest: Array<any>;
}

const CattleEdit = ({ navigation, route }: any) => {
  const { bottom } = useSafeAreaInsets();
  const { id, name } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [values, setValues] = useState(defaultValues);
  const [customTorero, setCustomTorero] = useState(false);
  const [customLugar, setCustomLugar] = useState(false);

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
    dest: [],
  });

  navigation.setOptions({ headerRight: () => <IconButton name="Filter" /> });

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
      setIsLoading(false);
      navigation.navigate("CattleLayout", {
        id,
        name,
      });
    }
    if (resp.error) {
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
        SELECT_DEST,
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
          const dest = objToArray(resp[8].data as any);

          setSelects({
            sex,
            hair,
            bullf,
            place,
            bullTrophy,
            bullfTrophy,
            exercise,
            feed,
            dest,
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
    <KeyboardAvoidingView
      style={{ ...styles.container, paddingBottom: bottom }}
      behavior="padding"
    >
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
        <Input
          placeholder="Guarismo"
          onChangeText={(text) => handleChange("guarismo", text)}
          keyboardType="numeric"
        />
        <Input
          placeholder="N°"
          onChangeText={(text) => handleChange("numero", text)}
          keyboardType="numeric"
        />
        <InputDropDown
          data={selects.sex}
          placeholder="Sexo"
          onChange={(value) => {
            setValues({ ...values, sexo: value });
          }}
        />
        <InputDropDown
          data={selects.hair}
          placeholder="Pelo"
          onChange={(value) => {
            setValues({ ...values, pelo: value });
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
            setValues({ ...values, fecha_lidia: item.value });
          }}
          calendar
        />
        <View style={styles.inputRowIcon}>
          {customTorero ? (
            <View style={{ flex: 1, alignItems: "center", width: "auto" }}>
              <Input
                placeholder="Torero"
                onChangeText={(text) => handleChange("torero", text)}
              />
            </View>
          ) : (
            <InputDropDown
              data={selects.bullf}
              placeholder="Torero"
              onChange={(value) => {
                handleChange("torero", value);
              }}
            />
          )}
          {customTorero ? (
            <IconButton
              name="Task"
              style={{ marginEnd: SIZES.m }}
              onPress={() => setCustomTorero(!customTorero)}
            />
          ) : (
            <IconButton
              name="Plus"
              style={{ marginEnd: SIZES.m }}
              onPress={() => setCustomTorero(!customTorero)}
            />
          )}
        </View>
        <View style={styles.inputRowIcon}>
          {/*  */}
          {customLugar ? (
            <View style={{ flex: 1, alignItems: "center", width: "auto" }}>
              <Input
                placeholder="Lugar"
                onChangeText={(text) => handleChange("lugar", text)}
              />
            </View>
          ) : (
            <InputDropDown
              data={selects.place}
              placeholder="Lugar"
              onChange={(value) => {
                handleChange("lugar", value);
              }}
            />
          )}
          {customLugar ? (
            <IconButton
              name="Task"
              style={{ marginEnd: SIZES.m }}
              onPress={() => setCustomLugar(!customLugar)}
            />
          ) : (
            <IconButton
              name="Plus"
              style={{ marginEnd: SIZES.m }}
              onPress={() => setCustomLugar(!customLugar)}
            />
          )}
          {/*  */}
        </View>
        <View style={styles.inputNcontainer}>
          <InputSelect
            placeholder="F.Alta"
            style={styles.inputN}
            value={values.fecha_alta}
            onChangeDate={(item) => {
              setValues({ ...values, fecha_alta: item.value });
            }}
            calendar
          />

          <InputSelect
            placeholder="F.Baja"
            style={styles.inputN}
            value={values.fecha_baja}
            onChangeDate={(item) => {
              setValues({ ...values, fecha_baja: item.value });
            }}
            calendar
          />
        </View>

        <InputDropDown
          data={selects.dest}
          placeholder="Destino"
          onChange={(value) => {
            setValues({ ...values, destino: value });
          }}
        />
        <Input
          placeholder="Crotal"
          onChangeText={(text) => handleChange("crotal", text)}
          keyboardType="numeric"
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
              keyboardType="numeric"
            />
            <Input
              flex
              placeholder="Fijeza"
              onChangeText={(text) => handleChange("fijeza_caballo", text)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Prontitud"
              onChangeText={(text) => handleChange("prontitud_caballo", text)}
              keyboardType="numeric"
            />
            <Input
              flex
              placeholder="Galope"
              onChangeText={(text) => handleChange("galope_caballo", text)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Humilla"
              onChangeText={(text) => handleChange("humilla_caballo", text)}
              keyboardType="numeric"
            />
            <Input
              flex
              placeholder="Empuja"
              onChangeText={(text) => handleChange("empuja_caballo", text)}
              keyboardType="numeric"
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
              keyboardType="numeric"
            />
            <Input
              flex
              placeholder="Fijeza"
              onChangeText={(text) => handleChange("fijeza_muleta", text)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Empleo"
              onChangeText={(text) => handleChange("empleo_muleta", text)}
              keyboardType="numeric"
            />
            <Input
              flex
              placeholder="Repetir"
              onChangeText={(text) => handleChange("repetir_muleta", text)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Querencia"
              onChangeText={(text) => handleChange("querencia_muleta", text)}
              keyboardType="numeric"
            />
            <Input
              flex
              placeholder="Prontitud"
              onChangeText={(text) => handleChange("prontitud_muleta", text)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Desarrollo"
              onChangeText={(text) => handleChange("desarrollo_muleta", text)}
              keyboardType="numeric"
            />
            <Input
              flex
              placeholder="Nobleza"
              onChangeText={(text) => handleChange("nobleza_muleta", text)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Humilla"
              onChangeText={(text) => handleChange("humilla_muleta", text)}
              keyboardType="numeric"
            />
            <Input
              flex
              placeholder="Rectitud"
              onChangeText={(text) => handleChange("rectitud_muleta", text)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Recorrido"
              onChangeText={(text) => handleChange("recorrido_muleta", text)}
              keyboardType="numeric"
            />
            <Input
              flex
              placeholder="Movilidad"
              onChangeText={(text) => handleChange("movilidad_muleta", text)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Clase"
              onChangeText={(text) => handleChange("clase_muleta", text)}
              keyboardType="numeric"
            />
            <Input
              flex
              placeholder="Fuerza"
              onChangeText={(text) => handleChange("fuerza_muleta", text)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Empuja"
              onChangeText={(text) => handleChange("empuja_muleta", text)}
              keyboardType="numeric"
            />
            <Input
              flex
              placeholder="Fuerza"
              onChangeText={(text) => handleChange("fuerza_muleta", text)}
              keyboardType="numeric"
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
            onChange={(value) => {
              setValues({ ...values, trofeo_toro_detalles: value });
            }}
          />
          <InputDropDown
            data={selects.bullfTrophy}
            placeholder="Trofeo Torero"
            onChange={(value) => {
              setValues({ ...values, trofeo_torero_detalles: value });
            }}
          />
          <InputDropDown
            data={selects.exercise}
            placeholder="Ejercicio Físico"
            onChange={(value) => {
              setValues({ ...values, ejercicio_fisico_detalles: value });
            }}
          />

          <InputDropDown
            data={selects.feed}
            placeholder="Pienso"
            onChange={(value) => {
              setValues({ ...values, pienso_detalles: value });
            }}
          />
          <View style={styles.inputNcontainer}>
            <Input
              flex
              placeholder="Nota"
              onChangeText={(text) => handleChange("nota_detalles", text)}
              keyboardType="numeric"
            />
            <Input
              flex
              placeholder="Peso"
              onChangeText={(text) => handleChange("peso_detalles", text)}
              keyboardType="numeric"
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
      <Button
        disabled={values === defaultValues}
        title="Aplicar"
        onPress={() => onSubmit(values)}
      />
      <Notifications
        isVisible={isVisible}
        handleVisible={() => setIsVisible(false)}
        notification={{
          title: "Error",
          message: error,
        }}
      />
    </KeyboardAvoidingView>
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
});
