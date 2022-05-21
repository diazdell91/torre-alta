import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  cattleServices,
  GET_CATTLE_BY_ID,
  GET_CATTLE_CHILD_BY_ID,
  GET_VIDEO,
  SELECT_CATTLE_TREE,
} from "../../apis/cattle";
import TopTabs from "../../components/TopTabs";
import LoadingScreen from "../loading/LoadingScreen";
import CattleChild from "./CattleChild";
import CattleGeneral from "./CattleGeneral";
import CattleTree from "./CattleTree";
import CattleVideo from "./CattleVideo";

type Props = any;

const tabs = ["General", "Hijos", "Video"];

const CattleLayout = ({ navigation, route }: Props) => {
  const id = route.params.id;

  const [selectedTab, setSelectedTab] = useState("General");
  const [cattle, setCattle] = useState(null);
  const [cattleChild, setCattleChild] = useState(null);
  const [videos, setVideos] = useState(null);
  const [catteTree, setCattleTree] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let urls = [
      `${GET_CATTLE_BY_ID}${id}`,
      `${GET_CATTLE_CHILD_BY_ID}${id}`,
      `${GET_VIDEO}${id}`,
      `${SELECT_CATTLE_TREE}${id}`,
    ];

    let requestCattleDetail = urls.map((url) => cattleServices.get(url));

    Promise.all(requestCattleDetail)
      .then((response) => {
        response.map((res) => {
          if (res.status === 200) {
            if (res.config.url === `${GET_CATTLE_BY_ID}${id}`) {
              setCattle(res.data);
            }
            if (res.config.url === `${GET_CATTLE_CHILD_BY_ID}${id}`) {
              setCattleChild(res.data);
            }
            if (res.config.url === `${GET_VIDEO}${id}`) {
              setVideos(res.data);
            }
            if (res.config.url === `${SELECT_CATTLE_TREE}${id}`) {
              setCattleTree(res.data);
            }
          }
        });
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <TopTabs
        tabs={tabs}
        tabSelected={selectedTab}
        handleSelectTab={handleTabChange}
      />
      {selectedTab === "General" && cattle && <CattleGeneral data={cattle} />}

      {selectedTab === "Hijos" && cattleChild && (
        <CattleChild data={cattleChild} />
      )}
      {selectedTab === "Árbol" && catteTree && <CattleTree data={catteTree} />}
      {selectedTab === "Video" && videos && (
        <CattleVideo id={id} data={videos} />
      )}
    </View>
  );
};

export default CattleLayout;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
