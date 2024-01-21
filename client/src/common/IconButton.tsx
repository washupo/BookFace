import { Icon, IconProps } from "../components/Icon";

interface IconButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
  size: IconProps['size'];
  fill: IconProps['fill'];
  className?: string;
}

export const IconButton = ({ onClick, name, size, fill, className }: IconButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      <Icon name={name} size={size} fill={fill}  />
    </button>
  );
};