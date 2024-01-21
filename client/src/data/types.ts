export interface PostData {
  _id: string;
  username: string;
  captionPicture: string;
  likes: number;
  profilePicture: string;
  postPicture: string;
  createdAt: string;
  comments: { text: string; username: string }[]; // Un tableau d'objets avec les propriétés text et username
}