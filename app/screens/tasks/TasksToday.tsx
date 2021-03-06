import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TaskItem from "./components/TaskItem";
import TaskInfo from "./components/TaskInfo";
import TaskPanel from "./components/TaskPanel";
import { Text } from "../../components";

type Props = {
  data: any;
  handleStart: (id: string, title: string) => void;
  handleFinish: (id: string) => void;
  handlePause: (id: string) => void;
  handleShowInfo: (id: string) => void;
};

const TasksToday = ({
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

  if (data.length >= 0) {
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

export default TasksToday;

const styles = StyleSheet.create({
  container: { flex: 1 },
  containerMessage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
