import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CattleChildHeader from "./components/CattleChildHeader";
import LoadingScreen from "../loading/LoadingScreen";
import { COLORS } from "../../theme/Theme";
import CattleChildItem from "./components/CattleChildItem";
import TagChild from "./components/TagChild";

type Props = {
  data: any;
  loading: boolean;
  error: string;
};

const CattleChild = ({ data, loading, error }: Props) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <LoadingScreen color={COLORS.primary} />
      </View>
    );
  }
  if (data.length > 0 && !loading && !error) {
    console.log(data);

    return (
      <View style={styles.container}>
        <TagChild mediaMale="5.5" mediaFemale="5.5" />
        <CattleChildHeader />
        {data &&
          data.map((item: any, index: number) => (
            <CattleChildItem key={index} animal={{ ...item, index }} />
          ))}
      </View>
    );
  }
  return null;
};

export default CattleChild;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
