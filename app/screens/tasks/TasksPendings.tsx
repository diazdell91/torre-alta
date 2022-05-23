import React from "react";
import { StyleSheet, View } from "react-native";
import TaskItem from "./components/TaskItem";
import { Text } from "../../components";

type Props = {
  data: any;
  handleStart: (id: string, title: string) => void;
  handleFinish: (id: string) => void;
  handlePause: (id: string) => void;
  handleShowInfo: (id: string) => void;
};

const TasksPendings = ({
  data,
  handleStart,
  handlePause,
  handleFinish,
  handleShowInfo,
}: Props) => {
  if (data?.message) {
    const { message } = data;
    return (
      <View style={styles.containerMessage}>
        <Text align="center">{message}</Text>
      </View>
    );
  }

  if (data.length) {
    return (
      <View style={styles.container}>
        {data.map((task: any, i: number) => (
          <TaskItem
            key={i}
            task={task}
            handleStart={handleStart}
            handleFinish={handleFinish}
            handlePause={handlePause}
            handleShowInfo={handleShowInfo}
          />
        ))}
      </View>
    );
  }
  return null;
};

export default TasksPendings;

const styles = StyleSheet.create({
  container: { flex: 1 },
  containerMessage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
