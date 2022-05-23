import Icon from "../../components/Icon";

type Props = {
  name: React.ComponentProps<typeof Icon>["name"];
  color: string;
};
function TabBarIcon(props: Props) {
  const { name, color, ...otherProps } = props;
  return (
    <Icon
      size={24}
      name={name}
      color={color}
      style={{ marginBottom: -3 }}
      {...otherProps}
    />
  );
}

export default TabBarIcon;
