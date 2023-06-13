import axios from "axios";

export const fetchData = async (getItems) => {
  const result = await axios.get(
    "https://63ddeb47df83d549cea79db1.mockapi.io/online_store"
  );
  getItems(result.data);
};
