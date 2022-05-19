import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import AnimalItem from "./components/AnimalItem";
import TableHeader from "./components/TableHeader";
import { GET_CATTLE_LIST, cattleServices } from "../../apis/cattle";
import useAxios from "../../hooks/useAxios";
import LoadingScreen from "../loading/LoadingScreen";
import { COLORS } from "../../theme/Theme";

type Props = any;

const Dashboard = ({ navigation }: Props) => {
  const [axiosFetch, data, loading, error] = useAxios();

  const getCattleList = () => {
    axiosFetch({
      axiosInstance: cattleServices,
      method: "GET",
      url: `${GET_CATTLE_LIST}`,
    });
  };

  useEffect(() => {
    getCattleList();
  }, []);

  if (loading) {
    return <LoadingScreen color={COLORS.primary} />;
  }

  if (data && !loading && !error) {
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
