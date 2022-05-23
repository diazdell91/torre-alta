import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  addTask,
  GET_TASK_TYPE,
  GET_USER,
  taskServices,
} from "../../apis/task";
import { Button, Input, InputSelect, Notifications } from "../../components";
import InputDropDown from "../../components/InputDropDown";
import { useAuth } from "../../context/auth/auth.provider";
import objToArray from "../../helper/objToArray";
import useForm from "../../hooks/useForm";
import { SIZES } from "../../theme/Theme";
import Error from "../error/Error";
import LoadingScreen from "../loading/LoadingScreen";

type Props = any;

const AddTask = ({ navigation }: Props) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  const { user } = useAuth();
  //handle values
  const { values, handleChange, clear } = useForm({
    titulo: "",
    tipo_tarea: "",
    fecha: "",
    empleado: "",
    descripcion: "",
  });
  const [taskType, setTaskType] = useState<any>([]);
  const [userAdmin, setUserAdmin] = useState<any>({});
  //handle fetching data
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  //handle modals
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const urls = [`${GET_TASK_TYPE}`, `${GET_USER}`];

    let requestTasksFilters = urls.map((url) => taskServices.get(url));

    Promise.all(requestTasksFilters)
      .then((response) => {
        response.map((res) => {
          if (res.status === 200) {
            switch (res.config.url) {
              case `${GET_TASK_TYPE}`:
                const arr = res.data;
                const formatedArr = arr.map((item: any) => {
                  return { label: item.name, value: item.tid };
                });
                setTaskType(formatedArr);
                break;
              case `${GET_USER}`:
                setUserAdmin(res.data);
                break;
            }
          } else {
            setError(res.data.message);
          }
        });
      })
      .catch((error) => {
        if (error.message) {
          setError(error.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleCreateTask = async () => {
    setIsLoading(true);
    const resp = await addTask({
      titulo: values.titulo,
      tipo_tarea: values.tipo_tarea,
      fecha: values.fecha,
      asignado_a: [{ username: user.email }],
      descripcion: values.descripcion,
    });

    if (resp.data) {
      console.log(resp.data);
      const { message } = resp.data;

      setIsLoading(false);
      if (message === "Tarea creada con éxito") {
        clear();
        navigation.navigate("Tasks");
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

  if (isLoading) return <LoadingScreen />;
  if (error) return <Error message={error} />;

  console.log(values);

  const disabled =
    values.titulo === "" || values.descripcion === "" || values.fecha === "";

  return (
    <View style={{ ...styles.container, paddingBottom }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input
          placeholder="Título"
          value={values.titulo}
          onChangeText={(text: string) => handleChange("titulo", text)}
        />
        {taskType && (
          <InputDropDown
            placeholder="Tipo"
            data={taskType}
            onChange={(value) => handleChange("tipo_tarea", value)}
          />
        )}
        <InputSelect
          placeholder="Fecha"
          value={values.fecha}
          onChangeDate={(item) => {
            handleChange("fecha", item.value);
          }}
          calendar
        />
        {/* render only for admin user */}
        {user.email === userAdmin.username && (
          <Input
            placeholder="Empleado"
            value={values.empleado}
            onChangeText={(text: string) => handleChange("empleado", text)}
          />
        )}

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
      <Button
        disabled={disabled}
        title="Crear"
        onPress={handleCreateTask}
        loading={isLoading}
      />
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
