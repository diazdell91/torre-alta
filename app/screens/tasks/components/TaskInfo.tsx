import React from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { Button, Loading, Text } from "../../../components";
import { COLORS, SIZES } from "../../../theme/Theme";

type TaskProps = {
  titulo: string;
  active?: boolean;
  descripcion: string;
};

type Props = {
  isVisible: boolean;
  loading: boolean;
  handleVisible: (visible: boolean) => void;
  task?: TaskProps;
};

const TaskInfo = (props: Props) => {
  const { isVisible, loading, handleVisible, task } = props;

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => handleVisible(false)}
      customBackdrop={
        <View style={{ flex: 1, backgroundColor: COLORS.primary }} />
      }
    >
      {loading ? (
        <Loading color={COLORS.primary} />
      ) : (
        <View style={styles.container}>
          <Text h1 color={COLORS.primary}>
            {task?.titulo}
          </Text>
          <View style={styles.wrapperDesc}>
            <Text h3>{task?.descripcion}</Text>
          </View>
          <Button
            title="OK"
            onPress={() => handleVisible(false)}
            style={{ backgroundColor: "transparent" }}
            fontStyle={{ color: COLORS.primary, fontSize: SIZES.h2 }}
          />
        </View>
      )}
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
    paddingTop: SIZES.xl,
  },
  wrapperDesc: {
    marginTop: SIZES.m,
    textAlign: "center",
    marginBottom: SIZES.xxs,
  },
});
