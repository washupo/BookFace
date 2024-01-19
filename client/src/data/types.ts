export interface PostData {
  _id: string;
  username: string;
  captionPicture: string;
  likes: number;
  profilePicture: string;
  postPicture: string;
  createdAt: string;
  comments: string[]; // Ajoutez cette propriété si vos données de publication incluent des commentaires
}