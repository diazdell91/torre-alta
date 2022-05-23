import React from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { COLORS, SIZES } from "../theme/Theme";
import Button from "./Button";
import Text from "./Text";

type NotificationProps = {
  title: string;
  message: string;
};

type Props = {
  isVisible: boolean;
  handleVisible: (visible: boolean) => void;
  notification: NotificationProps;
};

const Notifications = (props: Props) => {
  const { isVisible = false, handleVisible, notification } = props;

  return (
    <Modal
      isVisible={isVisible}
      style={{ margin: 0 }}
      onBackdropPress={() => handleVisible(false)}
    >
      <View style={styles.container}>
        <Text h1 color={COLORS.primary}>
          {notification.title}
        </Text>
        <View style={styles.wrapperDesc}>
          <Text h3>{notification.message}</Text>
        </View>
        <Button
          title="OK"
          onPress={() => handleVisible(false)}
          style={{ backgroundColor: "transparent" }}
          fontStyle={{ color: COLORS.primary, fontSize: SIZES.h2 }}
        />
      </View>
    </Modal>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.xl,
    backgroundColor: COLORS.white2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.m,
    padding: SIZES.m,
  },
  wrapperDesc: {
    marginTop: SIZES.m,
    textAlign: "center",
  },
});
