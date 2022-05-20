import React from "react";
import { StyleSheet, View } from "react-native";
import CattleChildHeader from "./components/CattleChildHeader";
import CattleChildItem from "./components/CattleChildItem";
import TagChild from "./components/TagChild";

type Props = {
  data: any;
};

const CattleChild = ({ data }: Props) => {
  if (data.length > 0) {
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
