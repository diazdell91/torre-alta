import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { Button, Text } from "../../../components";
import { COLORS, SIZES } from "../../../theme/Theme";

type TaskProps = {
  title: string;
  active: boolean;
  description: string;
};

type Props = {
  isVisible: boolean;
  handleVisible: (visible: boolean) => void;
  task: TaskProps;
};

const TaskInfo = (props: Props) => {
  const { isVisible = false, handleVisible, task } = props;

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => handleVisible(false)}
      customBackdrop={
        <View style={{ flex: 1, backgroundColor: COLORS.backDrop }} />
      }
    >
      <View style={styles.container}>
        <Text h1 color={COLORS.primary}>
          {task.title}
        </Text>
        <View style={styles.wrapperDesc}>
          <Text h3>{task.description}</Text>
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

export default TaskInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.xs,
    padding: SIZES.m,
  },
  wrapperDesc: {
    marginTop: SIZES.m,
    textAlign: "center",
    marginBottom: SIZES.m,
  },
});
