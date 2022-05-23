import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import TaskInfo from "./components/TaskInfo";
import TopTabs from "../../components/TopTabs";
import {
  endTask,
  GET_TASK_DESCRIPTION,
  GET_TASK_GENERAL,
  GET_TASK_PENDING,
  GET_TASK_TODAY,
  pauseTask,
  startTask,
  taskServices,
} from "../../apis/task";
import TasksToday from "./TasksToday";
import TasksGeneral from "./TasksGeneral";
import TasksPendings from "./TasksPendings";
import LoadingScreen from "../loading/LoadingScreen";
import Error from "../error/Error";
import { useAuth } from "../../context/auth/auth.provider";
import { ActivityIndicatorModal } from "../../components";

type Props = any;

const tabs = ["Hoy", "Generales", "Sin terminar"];

const TasksLayout = ({ route }: Props) => {
  const { user } = useAuth();
  const refresh = route.params?.refresh;
  //handle modals
  const [isModalVisible, setModalVisible] = useState(false);
  //handle tabs
  const [selectedTab, setSelectedTab] = useState("Hoy");
  //handle fetching data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //handle data
  const [tasksGeneral, setTasksGeneral] = useState(null);
  const [tasksPending, setTasksPending] = useState(null);
  const [tasksToday, setTasksToday] = useState(null);
  //handle activity indicator
  const [loadingActivity, setLoadingActivity] = useState(false);
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [taskDetails, setTaskDetails] = useState(null);

  const handleVisible = (visible: boolean) => {
    setModalVisible(visible);
  };

  useEffect(() => {
    const urls = [
      `${GET_TASK_TODAY}${user?.email}`,
      `${GET_TASK_GENERAL}${user?.email}`,
      `${GET_TASK_PENDING}${user?.email}`,
    ];

    let requestTasks = urls.map((url) => taskServices.get(url));

    Promise.all(requestTasks)
      .then((response) => {
        response.map((res) => {
          if (res.status === 200) {
            switch (res.config.url) {
              case `${GET_TASK_TODAY}${user?.email}`:
                setTasksToday(res.data);
                break;
              case `${GET_TASK_GENERAL}${user?.email}`:
                setTasksGeneral(res.data);
                break;
              case `${GET_TASK_PENDING}${user?.email}`:
                setTasksPending(res.data);
                break;
            }
          }
        });
      })
      .catch((error) => {
        if (error.message) {
          setError(error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [loadingActivity, refresh]);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleStart = async (id: string, title: string) => {
    setLoadingActivity(true);
    startTask({
      id,
      nombre_tiempo: title,
    })
      .then((res) => {})
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoadingActivity(false);
      });
  };

  const handleFinish = async (id: string) => {
    setLoadingActivity(true);
    endTask({
      id,
    })
      .then((res) => {})
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoadingActivity(false);
      });
  };

  const handlePause = async (id: string) => {
    setLoadingActivity(true);
    pauseTask({
      id: id,
    })
      .then((res) => {})
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoadingActivity(false);
      });
  };

  const handleShowInfo = async (id: string) => {
    handleVisible(true);
    setLoadingInfo(true);
    const url = `${GET_TASK_DESCRIPTION}${id}`;
    taskServices
      .get(url)
      .then((res) => {
        setTaskDetails(res.data[0]);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoadingInfo(false);
      });
  };

  if (loading) return <LoadingScreen />;
  if (error) return <Error message={error} />;

  return (
    <View style={styles.container}>
      <TopTabs
        tabs={tabs}
        tabSelected={selectedTab}
        handleSelectTab={handleTabChange}
      />
      <ScrollView>
        {selectedTab === "Hoy" && tasksToday && (
          <TasksToday
            data={tasksToday}
            handleStart={handleStart}
            handleFinish={handleFinish}
            handlePause={handlePause}
            handleShowInfo={handleShowInfo}
          />
        )}
        {selectedTab === "Generales" && tasksGeneral && (
          <TasksGeneral
            data={tasksGeneral}
            handleStart={handleStart}
            handleFinish={handleFinish}
            handlePause={handlePause}
            handleShowInfo={handleShowInfo}
          />
        )}
        {selectedTab === "Sin terminar" && tasksPending && (
          <TasksPendings
            data={tasksPending}
            handleStart={handleStart}
            handleFinish={handleFinish}
            handlePause={handlePause}
            handleShowInfo={handleShowInfo}
          />
        )}
      </ScrollView>
      <ActivityIndicatorModal loading={loadingActivity} />
      <TaskInfo
        loading={loadingInfo}
        isVisible={isModalVisible}
        handleVisible={handleVisible}
        task={taskDetails ? taskDetails : undefined}
      />
    </View>
  );
};

export default TasksLayout;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
