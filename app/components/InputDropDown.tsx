import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { COLORS, SIZES } from "../theme/Theme";

const DATA = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

interface Props {
  data?: { label: string; value: string }[];
  placeholder?: string;
  value: string;
  onChange: (item: any) => void;
}

const InputDropDown = (props: Props) => {
  const { data = DATA, placeholder, value, onChange } = props;

  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      iconColor={COLORS.primary}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      renderItem={renderItem}
    />
  );
};

export default InputDropDown;

const styles = StyleSheet.create({
  dropdown: {
    flex: 1,
    margin: SIZES.xs,
    height: SIZES.inputHeight,
    backgroundColor: COLORS.white2,
    borderRadius: SIZES.inputRadius,
    paddingHorizontal: SIZES.s,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },
  placeholderStyle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    color: COLORS["gray-medium"],
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    color: COLORS["gray-medium"],
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
});
