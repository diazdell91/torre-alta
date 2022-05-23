import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS, SIZES } from "../theme/Theme";
import RNPickerSelect from "react-native-picker-select";
import Icon from "./Icon";

interface Props {
  data: { label: string; value: string }[];
  placeholder?: string;
  onChange: (item: any) => void;
}

const InputDropDown = (props: Props): JSX.Element => {
  const { data, placeholder, onChange } = props;

  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={{ label: `Selecciona ${placeholder}`, value: null }}
        Icon={() => (
          <View style={styles.iconRight}>
            <Icon name="flechaAbajo" />
          </View>
        )}
        onValueChange={onChange}
        items={data}
        style={{
          inputIOS: {
            height: SIZES.inputHeight,
            backgroundColor: COLORS.white2,
            borderRadius: SIZES.inputRadius,
            paddingLeft: SIZES.m,
            fontSize: 16,
            fontFamily: "Montserrat-SemiBold",
            color: COLORS["gray-medium"],
          },
          inputAndroid: {
            height: SIZES.inputHeight,
            backgroundColor: COLORS.white2,
            borderRadius: SIZES.inputRadius,
            paddingLeft: SIZES.m,
            fontSize: 16,
            fontFamily: "Montserrat-SemiBold",
            color: COLORS["gray-medium"],
          },
        }}
      />
    </View>
  );
};

export default InputDropDown;

const styles = StyleSheet.create({
  //  container:
  container: {
    flex: 1,
    alignItems: "center",
    width: "auto",
    margin: SIZES.xs,
  },

  //
  iconRight: {
    position: "absolute",
    top: 18,
    right: SIZES.s,
    backgroundColor: COLORS.white2,
  },
});
