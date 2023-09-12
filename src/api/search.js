import * as httpRequest from "~/utils/request";

export const searchService = async (q, type = "less") => {
  try {
    const res = await httpRequest.get("api/users/search", {
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
