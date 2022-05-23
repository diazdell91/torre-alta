import React, { useEffect, useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import {
  cattleServices,
  GET_CATTLE_BY_ID,
  GET_CATTLE_CHILD_BY_ID,
  GET_VIDEO,
  GET_CATTLE_TREE,
} from "../../apis/cattle";
import TopTabs from "../../components/TopTabs";
import Error from "../error/Error";
import LoadingScreen from "../loading/LoadingScreen";
import CattleChild from "./CattleChild";
import CattleGeneral from "./CattleGeneral";
import CattleTree from "./CattleTree";
import CattleVideo from "./CattleVideo";

type Props = any;

const tabs = ["General", "Hijos", "Árbol", "Video"];

const CattleLayout = ({ navigation, route }: Props) => {
  const id = route.params.id;

  const [selectedTab, setSelectedTab] = useState("General");
  const [cattle, setCattle] = useState(null);
  const [cattleChild, setCattleChild] = useState(null);
  const [videos, setVideos] = useState(null);
  const [catteTree, setCattleTree] = useState(null);
  //handle fetching data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    let urls = [
      `${GET_CATTLE_BY_ID}${id}`,
      `${GET_CATTLE_CHILD_BY_ID}${id}`,
      `${GET_VIDEO}${id}`,
      `${GET_CATTLE_TREE}${id}`,
    ];

    let requestCattleDetail = urls.map((url) => cattleServices.get(url));

    Promise.all(requestCattleDetail)
      .then((response) => {
        response.map((res) => {
          // console.log(res.status);
          if (res.status === 200) {
            switch (res.config.url) {
              case `${GET_CATTLE_BY_ID}${id}`:
                setCattle(res.data);
                break;
              case `${GET_CATTLE_CHILD_BY_ID}${id}`:
                setCattleChild(res.data);
                break;
              case `${GET_CATTLE_TREE}${id}`:
                setCattleTree(res.data);
                break;
              case `${GET_VIDEO}${id}`:
                setVideos(res.data);
                break;

              default:
                break;
            }
          }
        });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, route]);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
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
