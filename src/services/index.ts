export const getListManga = async <T>(): Promise<T> => {
  type Response = {
    data: T;
  };

  const response = await fetch("http://localhost:3001/manga", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const result: Response = await response.json();
  return result.data;
};
