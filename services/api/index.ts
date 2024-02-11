import axios, { AxiosRequestConfig } from "axios";

const baseURL =
  "https://fdd1a65a-6bfe-4bdb-9757-9ec2dd598c43.mock.pstmn.io/api";

async function makeApiCall<T = any>(
  url: string,
  method: AxiosRequestConfig["method"] = "get",
  payload?: AxiosRequestConfig["data"],
  axiosRequestConfig?: Omit<AxiosRequestConfig, "url" | "method" | "data">
): Promise<T> {
  try {
    if (!baseURL || typeof baseURL !== "string") {
      throw new Error("API_BASEURL is not defined");
    }
    const { data } = await axios({
      url,
      method,
      data: payload,
      baseURL,
      ...axiosRequestConfig,
    });
    return data;
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 401) {
      }

      throw new Error(error.response.data.message);
    }

    throw new Error(error.message);
  }
}

export default makeApiCall;
