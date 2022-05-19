import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";
import TaskInfo from "./components/TaskInfo";
import TopTabs from "../../components/TopTabs";
import TaskPanel from "./components/TaskPanel";
import useAxios from "../../hooks/useAxios";
import {
  GET_TASK_GENERAL,
  GET_TASK_PENDING,
  GET_TASK_TODAY,
  taskServices,
} from "../../apis/task";
import TasksToday from "./TasksToday";
import TasksGeneral from "./TasksGeneral";
import TasksPendings from "./TasksPendings";

type Props = {};

const tabs = ["Hoy", "Generales", "Sin terminar"];

const TasksLayout = (props: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const [selectedTab, setSelectedTab] = useState("Hoy");

  const [getTaskToday, dataToday, loadingToday, errorToday] = useAxios();
  const [getTaskGeneral, dataGeneral, loadingGeneral, errorGeneral] =
    useAxios();
  const [getTaskPendings, dataPendings, loadingPendings, errorPendings] =
    useAxios();

  const handleVisible = (visible: boolean) => {
    setModalVisible(visible);
  };

  useEffect(() => {
    getTaskToday({
      axiosInstance: taskServices,
      url: `${GET_TASK_TODAY}admin@corporativa.com`,
      method: "GET",
    });
  }, []);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    if (tab === "Hoy") {
      getTaskToday({
        axiosInstance: taskServices,
        url: `${GET_TASK_TODAY}admin@corporativa.com`,
        method: "GET",
      });
    }
    if (tab === "Generales") {
      getTaskGeneral({
        axiosInstance: taskServices,
        url: `${GET_TASK_GENERAL}admin@corporativa.com`,
        method: "GET",
      });
    }
    if (tab === "Sin terminar") {
      getTaskPendings({
        axiosInstance: taskServices,
        url: `${GET_TASK_PENDING}admin@corporativa.com`,
        method: "GET",
      });
    }
  };

  // console.log("dataToday", dataToday);
  // console.log("dataGeneral", dataGeneral);
  // console.log("dataPendings", dataPendings);

  return (
    <View style={styles.container}>
      <TopTabs
        tabs={tabs}
        tabSelected={selectedTab}
        handleSelectTab={handleTabChange}
      />
      {selectedTab === "Hoy" && dataToday && (
        <TasksToday
          data={dataToday}
          loading={loadingToday}
          error={errorToday}
        />
      )}
      {selectedTab === "Generales" && dataToday && (
        <TasksGeneral
          data={dataGeneral}
          loading={loadingGeneral}
          error={errorGeneral}
        />
      )}
      {selectedTab === "Sin terminar" && dataToday && (
        <TasksPendings
          data={dataPendings}
          loading={loadingPendings}
          error={errorPendings}
        />
      )}
    </View>
  );
};

export default TasksLayout;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
