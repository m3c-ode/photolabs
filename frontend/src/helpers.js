export const isSelected = (photoId, favorites) => {
  if (favorites && favorites.length > 0) {
    return favorites.some(photo => photo.id === photoId);
  }
  return false;
};