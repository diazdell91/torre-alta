import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  PressableProps,
} from "react-native";
import { ActivityIndicatorModal, Text } from "../../../components";
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
  handleStart: (id: string, title: string) => void;
  handleFinish: (id: string) => void;
  handlePause: (id: string) => void;
};

const TaskItem = (props: Props) => {
  const { task, onPressInfo, handleStart, handlePause, handleFinish } = props;
  const [loading, setLoadig] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  let active = task.estado === "En progreso" ? true : false;

  const borderColor = active ? COLORS.secundary : COLORS.white2;

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
            <Pressable onPress={() => handlePause(task.nid)}>
              <Image
                source={require("../../../../assets/icons/pausa.png")}
                style={styles.icon}
              />
            </Pressable>
            <Pressable onPress={() => handleFinish(task.nid)}>
              <Image
                source={require("../../../../assets/icons/check.png")}
                style={styles.icon}
              />
            </Pressable>
          </>
        ) : (
          <Pressable onPress={() => handleStart(task.nid, task.titulo)}>
            <Image
              source={require("../../../../assets/icons/play.png")}
              style={styles.icon}
            />
          </Pressable>
        )}
      </View>
      <ActivityIndicatorModal loading={loading} />
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
