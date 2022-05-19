import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Input, InputSelect, Text } from "../../components";
import { COLORS, SIZES } from "../../theme/Theme";

type Props = {};

const Filter = (props: Props) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingBottom }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input placeholder="N°" />
        <InputSelect placeholder="Ganadería" />
        <Input placeholder="Guarismo" />
        <Input placeholder="Nombre" />
        <InputSelect placeholder="Sexo" />
        <Input placeholder="Crotal" />
        <Input placeholder="Madre o número" />
        <Input placeholder="Padre o número" />
        <InputSelect placeholder="Pelo" />
        <InputSelect placeholder="Estado" />
        <Input placeholder="Destino" />
        <Input placeholder="Plaza" />
      </ScrollView>
      <View style={styles.infoContainer}>
        <Text>328 animales encontrados</Text>
      </View>
      <Button title="Aplicar" />
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  infoContainer: {
    width: "95%",
    backgroundColor: COLORS.secundary,
    height: SIZES.buttonHeight,
    borderRadius: SIZES.buttonRadius,
    justifyContent: "center",
    alignItems: "center",
  },
});
