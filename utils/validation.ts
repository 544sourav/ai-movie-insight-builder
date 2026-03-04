export const isValidImdbId = (id: string) => {
  return /^tt\d{7,8}$/.test(id.trim().toLowerCase());
};
