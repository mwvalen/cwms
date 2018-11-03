export const getErrorMessage = (error, fallback) => {
  return error && error.response && error.response.data &&
    error.response.data.message || fallback;
}
