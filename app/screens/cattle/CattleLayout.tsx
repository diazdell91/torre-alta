import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  cattleServices,
  GET_CATTLE_BY_ID,
  GET_CATTLE_CHILD_BY_ID,
  GET_VIDEO,
} from "../../apis/cattle";
import TopTabs from "../../components/TopTabs";
import useAxios from "../../hooks/useAxios";
import CattleChild from "./CattleChild";
import CattleGeneral from "./CattleGeneral";
import CattleTree from "./CattleTree";
import CattleVideo from "./CattleVideo";

type Props = any;

const tabs = ["General", "Hijos", "Árbol", "Video"];

const CattleLayout = ({ navigation, route }: Props) => {
  const id = route.params.id;
  const { bottom } = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState("General");

  const [getCattleById, dataGeneral, loadingGeneral, errorGeneral] = useAxios();
  const [getCattleChild, dataChild, loadingChild, errorChild] = useAxios();
  const [getCattleTree, dataTree, loadingTree, errorTree] = useAxios();
  const [getVideoUrl, dataVideo, loadingVideo, errorVideo] = useAxios();

  useEffect(() => {
    getCattleById({
      axiosInstance: cattleServices,
      method: "GET",
      url: `${GET_CATTLE_BY_ID}${id}`,
    });
    getCattleChild({
      axiosInstance: cattleServices,
      method: "GET",
      url: `${GET_CATTLE_CHILD_BY_ID}${id}`,
    });
    getVideoUrl({
      axiosInstance: cattleServices,
      method: "GET",
      url: `video/filter?ID=${id}`,
    });
  }, [id]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentInset={{
        bottom,
      }}
    >
      <TopTabs
        tabs={tabs}
        tabSelected={selectedTab}
        handleSelectTab={setSelectedTab}
      />
      {selectedTab === "General" && (
        <CattleGeneral
          data={dataGeneral}
          loading={loadingGeneral}
          error={errorGeneral}
        />
      )}
      {selectedTab === "Hijos" && (
        <CattleChild
          data={dataChild}
          loading={loadingChild}
          error={errorChild}
        />
      )}
      {selectedTab === "Árbol" && <CattleTree />}
      {selectedTab === "Video" && (
        <CattleVideo
          data={dataVideo}
          loading={loadingVideo}
          error={errorVideo}
        />
      )}
    </ScrollView>
  );
};

export default CattleLayout;
