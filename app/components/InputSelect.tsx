import {
  StyleSheet,
  View,
  TextInput as DefaultInput,
  StyleProp,
  ViewStyle,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../theme/Theme";
import Icon from "./Icon";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import Text from "./Text";
import { IconType } from "./icons";

type InputProps = {
  style?: StyleProp<ViewStyle>;
  iconRight?: IconType;
  onRightPress?: () => void;
  calendar?: boolean;
  placeholder?: string;
  onChangeDate: (item: { label: string; value: string }) => void;
  value?: string;
};
type Props = InputProps & DefaultInput["props"];

const Input = (props: Props) => {
  const {
    style,
    iconRight,
    onRightPress,
    calendar,
    placeholder = "Selecciona ...",
    value = "",
    onChangeDate,
  } = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <Pressable onPress={showDatePicker} style={styles.container}>
      <View style={[styles.inputContainer, style]}>
        <Text
          style={{ ...styles.textValue }}
          color={
            value?.length > 0 ? COLORS["gray-medium"] : COLORS["gray-dark"]
          }
        >
          {value.length > 0 ? value : placeholder}
        </Text>
      </View>
      {iconRight && (
        <Pressable onPress={onRightPress} style={styles.iconLeft}>
          <Icon name={iconRight} />
        </Pressable>
      )}

      {calendar && (
        <View style={styles.iconLeft}>
          <Icon name="Calendar" />
        </View>
      )}

      {calendar && (
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          display="inline"
          onConfirm={(date) => {
            const dateFormatted = moment(date).format("DD-MM-YYYY");
            const dateCalendar = moment(dateFormatted, "YYYY-MM-DD").calendar();
            onChangeDate({ label: dateCalendar, value: dateFormatted });
            hideDatePicker();
          }}
          onCancel={hideDatePicker}
          locale="es_ES"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
        />
      )}
    </Pressable>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "auto",
    margin: SIZES.xs,
  },
  inputContainer: {
    height: SIZES.inputHeight,
    width: "100%",
    backgroundColor: COLORS.white2,
    borderRadius: SIZES.inputRadius,
    paddingLeft: SIZES.m,
    justifyContent: "center",
  },
  iconLeft: {
    position: "absolute",
    right: SIZES.s,
    backgroundColor: COLORS.white2,
  },
  textValue: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
  },
});
