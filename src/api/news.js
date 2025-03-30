import { $host } from "./index";

export const newsGet = async () => {
  try {
    const { data } = await $host.get("/news-get", {});

    return data;
  } catch (e) {
    return e;
  }
};
