import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  cattleServices,
  SELECT_CATTLE,
  SELECT_DEST,
  SELECT_HAIR,
  SELECT_PLAZA,
  SELECT_SEX,
  SELECT_STATE,
} from "../../apis/cattle";
import { Button, Input, Text } from "../../components";
import InputDropDown from "../../components/InputDropDown";
import { cleanEmptyObj } from "../../helper/cleanEmptyObj";
import objToArray from "../../helper/objToArray";
import { COLORS, SIZES } from "../../theme/Theme";
import LoadingScreen from "../loading/LoadingScreen";

type Props = any;

const defaultValues = {
  numero: "",
  ganaderia: "",
  guarismo: "",
  nombre: "",
  sexo: "",
  crotal: "",
  madre: "",
  padre: "",
  pelo: "",
  estado: "",
  destino: "",
  plaza: "",
};

const Filter = ({ navigation }: Props) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [values, setValues] = useState(defaultValues);
  const [filter, setFilter] = useState({});
  const [ganaderias, setGanaderias] = useState<any>([]);
  const [sexos, setSexos] = useState<any>([]);
  const [pelos, setPelos] = useState<any>([]);
  const [estados, setEstados] = useState<any>([]);
  const [plazas, setPlazas] = useState<any>([]);
  const [destinos, setDestinos] = useState<any>([]);

  const handleChange = useCallback(
    (name: string, value: string) => {
      setValues({
        ...values,
        [name]: value,
      });
    },
    [values]
  );

  useEffect(() => {
    setIsLoading(true);
    let urls = [
      SELECT_CATTLE,
      SELECT_SEX,
      SELECT_HAIR,
      SELECT_STATE,
      SELECT_PLAZA,
      SELECT_DEST,
    ];
    let requestSelects = urls.map((url) => cattleServices.get(url));

    Promise.all(requestSelects)
      .then((response) => {
        //console.log(response[0].config.url);
        response.map((res) => {
          if (res.status === 200) {
            if (res.config.url === SELECT_CATTLE) {
              setGanaderias(objToArray(res.data));
            }
            if (res.config.url === SELECT_SEX) {
              setSexos(objToArray(res.data));
            }
            if (res.config.url === SELECT_HAIR) {
              setPelos(objToArray(res.data));
            }
            if (res.config.url === SELECT_STATE) {
              setEstados(objToArray(res.data));
            }
            if (res.config.url === SELECT_PLAZA) {
              setPlazas(objToArray(res.data));
            }
            if (res.config.url === SELECT_DEST) {
              setDestinos(objToArray(res.data));
            }
          }
        });
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = useCallback(() => {
    setIsLoading(true);
    const cleanData = cleanEmptyObj(values);
    var filters = "";
    Object.entries(cleanData).forEach(([key, value]) => {
      filters += `${key}=${value}&`;
    });
    setFilter(filters);

    cattleServices
      .get(
        `https://torrealta.jumpintotech.es/rest/api/v1/animal/getBy?${filters}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, [values]);

  if (isLoading) return <LoadingScreen />;

  return (
    <KeyboardAvoidingView
      style={{ ...styles.container, paddingBottom }}
      behavior="padding"
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input
          placeholder="N??"
          value={values.numero}
          onChangeText={(text: string) => handleChange("numero", text)}
          keyboardType="numeric"
        />
        <InputDropDown
          placeholder="Ganader??a"
          data={ganaderias}
          onChange={(value) => handleChange("ganaderia", value)}
        />
        <Input
          placeholder="Guarismo"
          value={values.guarismo}
          onChangeText={(text: string) => handleChange("gaurismo", text)}
          keyboardType="numeric"
        />
        <Input
          placeholder="Nombre"
          onChangeText={(text: string) => handleChange("nombre", text)}
        />
        <InputDropDown
          placeholder="Sexo"
          data={sexos}
          onChange={(value) => handleChange("sexo", value)}
        />
        <InputDropDown
          placeholder="Estado"
          data={estados}
          onChange={(value) => handleChange("estado", value)}
        />
        <InputDropDown
          placeholder="Pelo"
          data={pelos}
          onChange={(value) => handleChange("pelo", value)}
        />
        <InputDropDown
          placeholder="Plaza"
          data={plazas}
          onChange={(value) => handleChange("plaza", value)}
        />
        <InputDropDown
          placeholder="Destino"
          data={destinos}
          onChange={(value) => handleChange("destino", value)}
        />
        <Input
          placeholder="Crotal"
          onChangeText={(text: string) => handleChange("crotal", text)}
          keyboardType="numeric"
        />
        <Input
          placeholder="Madre o n??mero"
          onChangeText={(text: string) => handleChange("madre", text)}
        />
        <Input
          placeholder="Padre o n??mero"
          onChangeText={(text: string) => handleChange("padre", text)}
        />
      </ScrollView>
      {data && data.length > 0 && (
        <Pressable
          onPress={() =>
            navigation.navigate("Dashboard", {
              data: data,
              filter,
            })
          }
          style={styles.infoContainer}
        >
          <Text>{data.length} animales encontrados</Text>
        </Pressable>
      )}
      <Button title="Aplicar" onPress={handleSubmit} />
    </KeyboardAvoidingView>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  infoContainer: {
    width: "95%",
    backgroundColor: COLORS.secundary,
    height: SIZES.buttonHeight,
    borderRadius: SIZES.buttonRadius,
    justifyContent: "center",
    alignItems: "center",
  },
});
