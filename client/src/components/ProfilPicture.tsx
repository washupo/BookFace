interface ProfilPictureProps {
  size: "32" | "44" | "60" | "210";
  url: string;
  className?: string;
}

export const ProfilPicture = ({ size, url, className }: ProfilPictureProps) => {
  let width;
  let height;

  switch (size) {
    case "32":
      width = "32";
      height = "32";
      break;
    case "44":
      width = "44";
      height = "44";
      break;
    case "60":
      width = "60";
      height = "60";
      break;
    case "210":
      width = "210";
      height = "210";
      break;
  }

  return (
    <img
      src={url}
      alt="photo de profile"
      width={width}
      height={height}
      className={className}
    />
  );
};
