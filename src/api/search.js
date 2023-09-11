import * as request from "~/utils/request";

export const searchService = async (q, type = "less") => {
  try {
    const res = await request.get("api/users/search", {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log("error in api/search", error);
  }
};
