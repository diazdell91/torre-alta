import React, { useEffect } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { cattleServices, SELECT_HAIR, SELECT_SEX } from "../../apis/cattle";
import objToArray from "../../helper/objToArray";
import useAxios from "../../hooks/useAxios";
import { COLORS, SIZES } from "../../theme/Theme";
import LoadingScreen from "../loading/LoadingScreen";
import ItemSelect from "./components/ItemSelect";

type Props = any;

const SelectSex = ({ navigation }: Props) => {
  const [axiosFetch, data, loading, error] = useAxios();
  const { bottom: paddingBottom } = useSafeAreaInsets();

  const getSex = () => {
    axiosFetch({
      axiosInstance: cattleServices,
      method: "GET",
      url: `${SELECT_SEX}`,
    });
  };

  useEffect(() => {
    getSex();
  }, []);

  if (loading) {
    return <LoadingScreen color={COLORS.primary} />;
  }
  if (data && !loading && !error) {
    const arr = objToArray(data);
    return (
      <View style={styles.container}>
        <View style={{ ...styles.content, paddingBottom }}>
          <Pressable onPress={() => navigation.goBack()} style={styles.close}>
            <Icon name="close" size={24} color={COLORS["gray-medium"]} />
          </Pressable>
          <View style={styles.tag} />
          {arr.map((item: any, i: number) => {
            return (
              <Pressable
                key={i}
                onPress={() => {
                  navigation.navigate("CattleEdit", {
                    item: item,
                  });
                }}
              >
                <ItemSelect item={item} />
              </Pressable>
            );
          })}
        </View>
      </View>
    );
  }
  return null;
};

export default SelectSex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.backDrop,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.white2,
    borderTopLeftRadius: SIZES.l,
    borderTopRightRadius: SIZES.l,
    padding: SIZES.m,
  },
  tag: {
    backgroundColor: COLORS["gray-light"],
    width: 72,
    height: SIZES.xs,
    borderRadius: 16,
    alignSelf: "center",
    marginVertical: SIZES.l,
    marginBottom: 32,
  },
  close: {
    position: "absolute",
    top: SIZES.m,
    right: SIZES.m,
    backgroundColor: COLORS["gray-light"],
    padding: 6,
    borderRadius: 32,
  },
});
