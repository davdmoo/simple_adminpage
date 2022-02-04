import React, { useEffect } from "react";
import AdminTable from "../components/AdminTable";
import { getAdmins } from "../stores/actionCreator";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const { admins } = useSelector(state => state);

  useEffect(() => {
    console.log("Home");
    dispatch(getAdmins());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <AdminTable admins={admins} />
      </div>
    </>
  )
};

export default Home;