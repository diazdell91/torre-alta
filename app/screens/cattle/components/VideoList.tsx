import React, { useCallback, useRef, useState } from "react";
import { FlatList } from "react-native";
import VideoPlayer from "./VideoPlayer";

type Props = {
  videos: [];
};

const VideoList = ({ videos }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });
  const onFlatListUpdate = useRef(
    useCallback(({ viewableItems, changed }: any) => {
      // Use viewable items in state or as intended
      if (changed && changed.length > 0) {
        setActiveIndex(changed[0].index);
      }
    }, [])
  );
  return (
    <FlatList
      data={videos}
      renderItem={({ item }) => {
        return <VideoPlayer uri={item} />;
      }}
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      snapToAlignment={"center"}
      decelerationRate={"fast"}
      onViewableItemsChanged={onFlatListUpdate.current}
      viewabilityConfig={viewConfigRef.current}
    />
  );
};

export default VideoList;
