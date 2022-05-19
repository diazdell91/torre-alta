import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { Button, Input, InputSelect, Notifications } from "../../components";
import { COLORS, SIZES } from "../../theme/Theme";
import { updateCattle } from "../../apis/cattle";
import LoadingScreen from "../loading/LoadingScreen";
import IconAdd from "../../router/components/IconAdd";
import { defaultValues } from "./deaultValues";
import { cleanEmptyObj } from "../../helper/cleanEmptyObj";
import CollapseCardEdit from "./components/CollapseCardEdit";

const CattleEdit = ({ navigation, route }: any) => {
  const { bottom } = useSafeAreaInsets();
  const { id } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const [pelo, setPelo] = useState<any>(defaultValues.pelo);

  useEffect(() => {
    if (route.params.item) {
      setPelo(route.params.item);
    }
  }, [route.params?.item]);

  const [values, setValues] = useState(defaultValues);

  const handleChange = useCallback(
    (name: string, value: string) => {
      setValues({
        ...values,
        [name]: value,
      });
    },
    [values]
  );

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  const onSubmit = async (formData: any) => {
    const data = { ...formData, ...{ ID: id, pelo: pelo.key } };
    const cleanData = cleanEmptyObj(data);
    setIsLoading(true);
    const resp = await updateCattle({
      ...cleanData,
    });

    if (resp.data) {
      console.log(resp.data);
      setIsLoading(false);
      navigation.goBack();
    }
    if (resp.error) {
      //console.log(resp.error);
      setIsLoading(false);
      setIsVisible(true);
      setError("Error al actualizar este animal");
    }
  };

  if (isLoading) {
    return <LoadingScreen color={COLORS.primary} />;
  }

  return (
    <View style={{ ...styles.container, paddingBottom: bottom }}>
      <ScrollView contentInset={{ bottom }}>
        <View style={styles.inputNcontainer}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                flex
                placeholder="N° caballo"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.inputN}
              />
            )}
            name="media_caballo"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                flex
                placeholder="N° Muleta"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.inputN}
              />
            )}
            name="media_muleta"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                flex
                placeholder="N° media"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.inputN}
              />
            )}
            name="media_total"
          />
        </View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Guarismo"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              iconRight={"flechaAbajo"}
            />
          )}
          name="guarismo"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="N°"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="numero"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputSelect
              placeholder="Sexo"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              iconRight={"flechaAbajo"}
              onRightPress={() => navigation.navigate("SelectSex")}
            />
          )}
          name="sexo"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur } }) => (
            <InputSelect
              placeholder="Pelo"
              onBlur={onBlur}
              onChangeText={onChange}
              value={pelo.value}
              iconRight={"flechaAbajo"}
              onRightPress={() => navigation.navigate("SelectHair")}
            />
          )}
          name="pelo"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Madre o número..."
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="madre"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Padre o número..."
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="padre"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Fecha de lidea"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              iconRight={"calendar"}
            />
          )}
          name="fecha_lidia"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputRowIcon}>
              <InputSelect
                placeholder="Joselito Adame"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                iconRight={"flechaAbajo"}
                onRightPress={() => navigation.navigate("SelectBullFighter")}
              />
              <IconAdd style={{ marginEnd: SIZES.m }} />
            </View>
          )}
          name="torero"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputRowIcon}>
              <InputSelect
                placeholder="Lugar"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                iconRight={"flechaAbajo"}
                onRightPress={() => navigation.navigate("SelectPlace")}
              />
              <IconAdd style={{ marginEnd: SIZES.m }} />
            </View>
          )}
          name="lugar"
        />
        <View style={styles.inputNcontainer}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                flex
                placeholder="F.Alta"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                iconRight={"calendar"}
                style={styles.inputN}
              />
            )}
            name="lugar"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                flex
                placeholder="F.Baja"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                iconRight={"calendar"}
                style={styles.inputN}
              />
            )}
            name="lugar"
          />
        </View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Destino"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="destino"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Crotal"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="crotal"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Observaciones de campo..."
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              multiline
              style={{
                minHeight: SIZES.inputHeight * 2,
                paddingTop: SIZES.m,
                paddingBottom: SIZES.m,
              }}
            />
          )}
          name="crotal"
        />
        <CollapseCardEdit title="Caballo">
          <Input
            placeholder="Observaciones de campo..."
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
              {...register("distancia_caballo")}
              placeholder="Distancia"
            />
            <Input flex {...register("fijeza_caballo")} placeholder="Fijeza" />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              {...register("prontitud_caballo")}
              placeholder="Prontitud"
            />
            <Input flex {...register("galope_caballo")} placeholder="Galope" />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              {...register("humilla_caballo")}
              placeholder="Humilla"
            />
            <Input flex {...register("empuja_caballo")} placeholder="Empuja" />
          </View>
        </CollapseCardEdit>

        <CollapseCardEdit title="Muleta">
          <View style={styles.inputNcontainer}>
            <Input
              flex
              {...register("distancia_caballo")}
              placeholder="Distancia"
            />
            <Input flex {...register("fijeza_caballo")} placeholder="Fijeza" />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              {...register("prontitud_caballo")}
              placeholder="Prontitud"
            />
            <Input flex {...register("galope_caballo")} placeholder="Galope" />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              {...register("humilla_caballo")}
              placeholder="Humilla"
            />
            <Input flex {...register("empuja_caballo")} placeholder="Empuja" />
          </View>
        </CollapseCardEdit>
        <CollapseCardEdit title="Detalles">
          <View style={styles.inputNcontainer}>
            <Input
              flex
              {...register("distancia_caballo")}
              placeholder="Distancia"
            />
            <Input flex {...register("fijeza_caballo")} placeholder="Fijeza" />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              {...register("prontitud_caballo")}
              placeholder="Prontitud"
            />
            <Input flex {...register("galope_caballo")} placeholder="Galope" />
          </View>
          <View style={styles.inputNcontainer}>
            <Input
              flex
              {...register("humilla_caballo")}
              placeholder="Humilla"
            />
            <Input flex {...register("empuja_caballo")} placeholder="Empuja" />
          </View>
        </CollapseCardEdit>
        <Input
          placeholder="Observaciones de campo..."
          multiline
          style={{
            minHeight: SIZES.inputHeight * 2,
            paddingTop: SIZES.m,
            paddingBottom: SIZES.m,
          }}
        />
      </ScrollView>
      <Button title="Aplicar" onPress={handleSubmit(onSubmit)} />
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
});
