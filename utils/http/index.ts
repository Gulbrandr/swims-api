import axios from "axios";

const BASEURL = `https://my.api.mockaroo.com/`;

const client = axios.create({
  baseURL: BASEURL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

const server = axios.create({
  baseURL: BASEURL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `${process.env.Givinga_API_KEY}`,
  },
});

type instanceHelperProps = {
  entity: string;
  action: string;
  param: string;
};

export const getHelper = ({ entity, param }: instanceHelperProps) => {
  const url = `${entity}${param === "all" ? "" : `/${param}`}?key=5e5c5a80`;
  if (typeof window === "undefined") {
    console.log("server");
    return server.get(url);
  }
  return client.get(url);
};

export default { client, server, helper: getHelper };
