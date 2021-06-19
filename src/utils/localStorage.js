export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  if (data !== 0) {
    return JSON.parse(data);
  }
  return {};
};

export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
