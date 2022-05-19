import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { addTask } from "../../apis/task";
import { Button, Input, Notifications } from "../../components";
import useForm from "../../hooks/useForm";
import { SIZES } from "../../theme/Theme";

type Props = any;

const AddTask = ({ navigation }: Props) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  const { values, handleChange, clear } = useForm({
    titulo: "",
    fecha: "",
    empleado: "",
    descripcion: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleCreateTask = async () => {
    setIsLoading(true);
    const resp = await addTask({
      titulo: values.titulo,
      tipo_tarea: "23",
      fecha: values.fecha,
      asignado_a: [{ username: "admin@corporativa.com" }],
      descripcion: values.descripcion,
    });

    if (resp.data) {
      console.log(resp.data);
      const { message } = resp.data;

      setIsLoading(false);
      if (message === "Tarea creada con éxito") {
        clear();
        navigation.goBack();
        return;
      } else {
        setError(message);
        setIsVisible(true);
      }
    }
    if (resp.error) {
      console.log(resp.error);
      clear();
      setIsLoading(false);
      setIsVisible(true);
      setError("Error al crear esta tarea");
    }
  };

  return (
    <View style={{ ...styles.container, paddingBottom }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input
          placeholder="Título"
          value={values.titulo}
          onChangeText={(text: string) => handleChange("titulo", text)}
        />
        <Input
          placeholder="Fecha"
          value={values.fecha}
          onChangeText={(text: string) => handleChange("fecha", text)}
        />
        <Input
          placeholder="Empleado"
          value={values.empleado}
          onChangeText={(text: string) => handleChange("empleado", text)}
        />
        <Input
          placeholder="Descripción"
          value={values.descripcion}
          onChangeText={(text: string) => handleChange("descripcion", text)}
          multiline
          style={{
            minHeight: SIZES.inputHeight * 2,
            paddingTop: SIZES.m,
            paddingBottom: SIZES.m,
          }}
        />
      </ScrollView>
      <Button title="Crear" onPress={handleCreateTask} loading={isLoading} />
      <Notifications
        isVisible={isVisible}
        handleVisible={() => setIsVisible(false)}
        notification={{
          title: "Error creando tarea",
          message: error,
        }}
      />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
