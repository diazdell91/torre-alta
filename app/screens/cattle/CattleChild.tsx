import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CattleChildHeader from "./components/CattleChildHeader";
import LoadingScreen from "../loading/LoadingScreen";
import { COLORS, SIZES } from "../../theme/Theme";
import CattleChildItem from "./components/CattleChildItem";
import { Icon, Text } from "../../components";
import TagChild from "./components/TagChild";

type Props = {
  data: any;
  loading: boolean;
  error: string;
};

const CattleChild = ({ data, loading, error }: Props) => {
  if (loading) {
    return <LoadingScreen color={COLORS.primary} />;
  }
  if (data.length >= 0 && !loading && !error) {
    return (
      <View>
        <TagChild />
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

const styles = StyleSheet.create({});
