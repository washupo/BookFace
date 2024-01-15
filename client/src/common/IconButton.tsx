import { Icon, IconProps } from "../components/Icon";

interface ButtonProps {
  onClick: () => void;
  iconName: string;
  iconSize: IconProps['size'];
  iconFill: IconProps['fill'];
  className?: string;
}

export const ButtonWithIcon = ({ onClick, iconName, iconSize, iconFill, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      <Icon name={iconName} size={iconSize} fill={iconFill} />
    </button>
  );
};