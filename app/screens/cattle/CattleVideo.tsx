import { StyleSheet, Text, View } from "react-native";
import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import VideoButton from "./components/VideoButton";
import UploadProgress from "./components/UploadProgress";
import LoadingScreen from "../loading/LoadingScreen";
import { COLORS } from "../../theme/Theme";

type Props = {
  data: any;
  loading: boolean;
  error: string;
};

const CattleVideo = ({ data, loading, error }: Props) => {
  if (loading) {
    return <LoadingScreen color={COLORS.primary} />;
  }
  if (data && !loading && !error) {
    //console.log(data);
    const url = data[0].videos[0];
    console.log(url);
    return (
      <View style={styles.container}>
        <VideoPlayer uri={url} />
        <VideoButton />
        <UploadProgress />
      </View>
    );
  }

  return null;
};

export default CattleVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
