import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  cattleServices,
  GET_CATTLE_BY_ID,
  GET_CATTLE_CHILD_BY_ID,
  GET_VIDEO,
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
  const [cattle, setCattle] = useState({});
  const [cattleChild, setCattleChild] = useState([]);
  const [videos, setVideos] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let urls = [
      `${GET_CATTLE_BY_ID}${id}`,
      `${GET_CATTLE_CHILD_BY_ID}${id}`,
      `${GET_VIDEO}${id}`,
    ];

    let requestCattleDetail = urls.map((url) => cattleServices.get(url));

    Promise.all(requestCattleDetail)
      .then((response) => {
        //console.log(response[0].config.url);
        response.map((res) => {
          if (res.status === 200) {
            //console.log(res);
            if (res.config.url === `${GET_CATTLE_BY_ID}${id}`) {
              setCattle(res.data);
            }
            if (res.config.url === `${GET_CATTLE_CHILD_BY_ID}${id}`) {
              setCattleChild(res.data);
            }
            if (res.config.url === `${GET_VIDEO}${id}`) {
              setVideos(res.data);
            }
          }
        });
      })
      .catch((error) => {})
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

  console.log(cattle);

  return (
    <View style={styles.container}>
      <TopTabs
        tabs={tabs}
        tabSelected={selectedTab}
        handleSelectTab={handleTabChange}
      />
      {selectedTab === "General" && <CattleGeneral data={cattle} />}
      {selectedTab === "Hijos" && <CattleChild data={cattleChild} />}
      {selectedTab === "Árbol" && <CattleTree />}
      {selectedTab === "Video" && <CattleVideo id={id} data={videos} />}
    </View>
  );
};

export default CattleLayout;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
