import React from "react";
import { StyleSheet, View } from "react-native";
import { IconButton, Text } from "../../../components";
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
  handleShowInfo: (id: string) => void;
  handleStart: (id: string, title: string) => void;
  handleFinish: (id: string) => void;
  handlePause: (id: string) => void;
};

const TaskItem = (props: Props) => {
  const { task, handleShowInfo, handleStart, handlePause, handleFinish } =
    props;

  let active = task.estado === "En progreso" ? true : false;

  const borderColor = active ? COLORS.secundary : COLORS.white2;

  return (
    <View style={{ ...styles.container, borderColor }}>
      <IconButton
        onPress={() => handleShowInfo(task.nid)}
        name="Info"
        color={COLORS.black}
      />
      <View style={{ flex: 1, marginStart: SIZES.xs }}>
        <Text color={COLORS.primary}>{task.titulo}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        {task.estado === "Sin iniciar" && (
          <IconButton
            name="Start"
            color={COLORS["gray-medium"]}
            size={28}
            onPress={() => handleStart(task.nid, task.titulo)}
          />
        )}
        {task.estado === "Pausada" && (
          <IconButton
            name="Start"
            color={COLORS["gray-medium"]}
            size={28}
            onPress={() => handleStart(task.nid, task.titulo)}
          />
        )}

        {task.estado === "En progreso" && (
          <>
            <IconButton
              name="Pause"
              size={28}
              onPress={() => handlePause(task.nid)}
              color={COLORS["gray-medium"]}
              style={{ paddingHorizontal: SIZES.xxs }}
            />
            <IconButton
              name="Check"
              size={28}
              onPress={() => handleFinish(task.nid)}
            />
          </>
        )}
        {task.estado === "Finalizada" && (
          <IconButton name="Check" size={28} color={COLORS.black} />
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
});
