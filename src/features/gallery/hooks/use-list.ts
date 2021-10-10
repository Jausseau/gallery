import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { PhotoType } from "../types";

const useList = () => {
  const { data, isFetching, isError } = useQuery<
    AxiosResponse<PhotoType[]>,
    Error,
    PhotoType[],
    "getList"
  >("getList", async () => axios.get(`https://picsum.photos/v2/list`), {
    select: (response) => response.data,
    onError: () => {
      toast.error("An error has occured when retrieving the photo list");
    },
  });
  return { list: data, loading: isFetching, isError };
};

export default useList;
