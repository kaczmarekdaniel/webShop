import React, { useContext } from "react";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import UsersList from "components/organisms/UsersList/UsersList";
import { UsersContext } from "providers/UsersProvider";
import { v4 as uuidv4 } from "uuid";

const Dashboard = () => {
  const { users } = useContext(UsersContext);

  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
