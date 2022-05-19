import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  PressableProps,
} from "react-native";
import { endTask, pauseTask, startTask } from "../../../apis/task";
import { Text } from "../../../components";
import { COLORS, SIZES } from "../../../theme/Theme";

type TaskProps = {
  nid: string;
  titulo: string;
  fecha: string;
  tipo_tarea: string;
  estado: string;
};

type Props = {
  task: TaskProps;
  onPressInfo: PressableProps["onPress"];
};

const TaskItem = (props: Props) => {
  const { task, onPressInfo } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  let active = task.estado === "En progreso" ? true : false;

  const borderColor = active ? COLORS.secundary : COLORS.white2;

  const handleStart = async () => {
    setIsLoading(true);
    console.log("start task", task.nid);
    const resp = await startTask({
      id: task.nid,
      nombre_tiempo: task.titulo,
    });
    if (resp.data) {
      console.log(resp.data);
      setIsLoading(false);
    }
    if (resp.error) {
      console.log(resp.error);
      setIsLoading(false);
      setIsVisible(true);
      setError("Error al comenazar esta tarea");
    }
  };

  const handleFinish = async () => {
    setIsLoading(true);
    console.log("end task", task.nid);
    const resp = await endTask({
      id: task.nid,
    });
    if (resp.data) {
      console.log(resp.data);
      setIsLoading(false);
    }
    if (resp.error) {
      console.log(resp.error);
      setIsLoading(false);
      setIsVisible(true);
      setError("Error al pausar esta tarea");
    }
  };

  const handlePause = async () => {
    setIsLoading(true);
    console.log("pause task", task.nid);
    const resp = await pauseTask({
      id: task.nid,
    });
    if (resp.data) {
      console.log(resp.data);
      setIsLoading(false);
    }
    if (resp.error) {
      console.log(resp.error);
      setIsLoading(false);
      setIsVisible(true);
      setError("Error al pausar esta tarea");
    }
  };

  return (
    <View style={{ ...styles.container, borderColor }}>
      <Pressable onPress={onPressInfo}>
        <Image source={require("../../../../assets/icons/infoblack.png")} />
      </Pressable>
      <View style={{ flex: 1, marginStart: SIZES.xs }}>
        <Text color={COLORS.primary}>{task.titulo}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        {active ? (
          <>
            <Pressable onPress={handlePause}>
              <Image
                source={require("../../../../assets/icons/pausa.png")}
                style={styles.icon}
              />
            </Pressable>
            <Pressable onPress={handleFinish}>
              <Image
                source={require("../../../../assets/icons/check.png")}
                style={styles.icon}
              />
            </Pressable>
          </>
        ) : (
          <Pressable onPress={handleStart}>
            <Image
              source={require("../../../../assets/icons/play.png")}
              style={styles.icon}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SIZES.m,
    margin: SIZES.xxs,
    marginHorizontal: SIZES.s,
    backgroundColor: COLORS.white2,
    borderWidth: 2,
    borderRadius: SIZES.xs,
  },
  icon: {
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
