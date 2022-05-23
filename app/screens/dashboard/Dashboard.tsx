import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AnimalItem from "./components/AnimalItem";
import TableHeader from "./components/TableHeader";
import { GET_CATTLE_LIST, cattleServices } from "../../apis/cattle";
import LoadingScreen from "../loading/LoadingScreen";
import { COLORS } from "../../theme/Theme";

type Props = any;

const Dashboard = ({ navigation, route }: Props) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({ title: `Torrealta(0)` });
  }, []);

  useEffect(() => {
    setLoading(true);
    if (route.params?.filter) {
      cattleServices
        .get(
          `https://torrealta.jumpintotech.es/rest/api/v1/animal/getBy?${route.params?.filter}`
        )
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            navigation.setOptions({ title: `Torrealta(${res.data.length})` });
          }
          setData(res.data);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      cattleServices
        .get(GET_CATTLE_LIST)
        .then((res) => {
          setData(res.data);
          navigation.setOptions({ title: `Torrealta(${res.data.length})` });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [route.params?.filter]);

  if (loading) {
    return <LoadingScreen color={COLORS.primary} />;
  }

  if (data && !loading) {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return <AnimalItem key={index} animal={{ ...item, index }} />;
          }}
          ListHeaderComponent={() => <TableHeader />}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{
            flex: 1,
          }}
          stickyHeaderIndices={[0]}
        />
      </View>
    );
  }
  return null;
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
