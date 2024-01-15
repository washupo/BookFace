import { Icon, IconProps } from "../components/Icon";

interface IconButtonProps {
  onClick: () => void;
  iconName: string;
  iconSize: IconProps['size'];
  iconFill: IconProps['fill'];
  className?: string;
}

export const IconButton = ({ onClick, iconName, iconSize, iconFill, className }: IconButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      <Icon name={iconName} size={iconSize} fill={iconFill} />
    </button>
  );
};