import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../../../theme/Theme";
import { Video, AVPlaybackStatus } from "expo-av";
import Layout from "../../../theme/Layout";

type Props = {
  uri: string;
};

const VideoPlayer = ({ uri }: Props) => {
  const video = React.useRef<any>(null);

  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri,
        }}
        useNativeControls={true}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    margin: SIZES.m,
    borderRadius: SIZES.xs,
    backgroundColor: COLORS["gray-medium"],
    justifyContent: "center",
    alignItems: "center",
    minHeight: 240,
    minWidth: Layout.window.width - 32,
  },
  video: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
});
