import http from "utils/http/";

const campaignsHTTP = {
  get: (param: any) =>
    http.helper({
      entity: "campaigns",
      action: "get",
      param,
    }),
  list: () =>
    http.helper({
      entity: "campaigns",
      action: "get",
      param: "",
    }),
};

export default campaignsHTTP;
