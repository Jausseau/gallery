import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { PhotoType } from "../types";

const usePhoto = () => {
  const { mutate, data, isLoading, isError } = useMutation<
    AxiosResponse<PhotoType>,
    Error,
    string
  >(
    (searchValue) => axios.get(`https://picsum.photos/id/${searchValue}/info`),
    {
      onError: () => {
        toast.error("An error has occured when retrieving the photo");
      },
    }
  );
  return { search: mutate, photo: data?.data, loading: isLoading, isError };
};

export default usePhoto;
