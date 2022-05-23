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
};

const TasksPendings = ({
  data,
  handleStart,
  handlePause,
  handleFinish,
}: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);

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
            onPressInfo={() => {
              setModalVisible(true);
            }}
            handleStart={handleStart}
            handleFinish={handleFinish}
            handlePause={handlePause}
          />
        ))}

        <TaskPanel />
        {/* <TaskInfo
          isVisible={isModalVisible}
          handleVisible={handleVisible}
          task={task}
        /> */}
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
