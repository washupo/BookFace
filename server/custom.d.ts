// custom.d.ts
declare namespace Express {
  interface Request {
    user?: any; // Remplacez 'any' par le type approprié pour votre utilisateur
  }
}
