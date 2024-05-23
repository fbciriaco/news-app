import axios from "axios";

export const get = async (url: string) => {
  try {
    const config = {
      baseUrl: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(url, config);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
