import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import VideoButton from "./components/VideoButton";
import UploadProgress from "./components/UploadProgress";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import axios from "axios";
import VideoList from "./components/VideoList";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const BASE_URL = "https://torrealta.jumpintotech.es/rest/api/v1/";

declare global {
  interface FormDataValue {
    uri: string;
    name: string;
    type: string;
  }

  interface FormData {
    append(name: string, value: FormDataValue, fileName?: string): void;
    set(name: string, value: FormDataValue, fileName?: string): void;
  }
}
type Props = {
  id: string;
  data: any;
};

const CattleVideo = ({ id, data }: Props) => {
  const [percentCompleted, setPercentCompleted] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { bottom: paddingBottom } = useSafeAreaInsets();

  const pickVideo = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      base64: true,
    });

    if (!result.cancelled) {
      setIsLoading(true);
      const base64 = await FileSystem.readAsStringAsync(result.uri, {
        encoding: "base64",
      });

      const video = {
        filename: "video.mp4",
        base64,
      };

      const newVideo = {
        ID: id,
        video,
      };

      const options = {
        headers: {
          "Content-Type": "text/plain",
          "Accept-Encoding": "gzip, deflate, br",
          Accept: "*/*",
        },
      };
      const url = `${BASE_URL}animal/addvideoanimal`;

      axios
        .post(url, newVideo, {
          ...options,
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentCompleted = Math.floor((loaded * 100) / total);
            if (percentCompleted < 100) {
              setPercentCompleted(percentCompleted);
            }
          },
        })
        .then((res) => {
          console.log(res.data);
          setPercentCompleted(100);
          setTimeout(() => {
            setPercentCompleted(0);
          }, 1000);
          setIsLoading(false);
        });
    }
  };

  if (data) {
    const videos = data[0].videos;

    return (
      <View style={{ ...styles.container, paddingBottom }}>
        {isLoading && <UploadProgress progress={percentCompleted} />}
        <VideoButton onPress={pickVideo} />
        {videos.length >= 0 && <VideoList videos={data[0].videos} />}
      </View>
    );
  }

  return null;
};

export default CattleVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
