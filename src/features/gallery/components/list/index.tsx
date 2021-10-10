import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { getList, selectList, selectPhoto } from "../../store";
import Loader from "../loader";
import Photo from "../photo";
import ListStyles from "./styles";

const List = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectList);
  const photo = useAppSelector(selectPhoto);

  React.useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  if (list.status === "loading") return <Loader />;
  return (
    <ListStyles.ListContainer>
      {photo.data ? (
        <Photo photo={photo.data} />
      ) : (
        list.data?.map((photo) => <Photo photo={photo} key={photo.id} />)
      )}
    </ListStyles.ListContainer>
  );
};

export default List;
