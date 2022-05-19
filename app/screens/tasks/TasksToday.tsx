import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TaskItem from "./components/TaskItem";
import TaskInfo from "./components/TaskInfo";
import TaskPanel from "./components/TaskPanel";
import LoadingScreen from "../loading/LoadingScreen";
import { COLORS } from "../../theme/Theme";
import { Text } from "../../components";

type Props = {
  data: any;
  loading: boolean;
  error: string;
};

const TasksToday = ({ data, loading, error }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  if (loading) {
    return <LoadingScreen color={COLORS.primary} />;
  }
  if (data?.message && !loading && !error) {
    const { message } = data;
    console.log(message);
    return (
      <View style={styles.containerMessage}>
        <Text align="center">{message}</Text>
      </View>
    );
  }

  if (data.length && !loading && !error) {
    return (
      <View style={styles.container}>
        {data.map((task: any, i: number) => (
          <TaskItem
            key={i}
            task={task}
            onPressInfo={() => {
              setModalVisible(true);
            }}
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
