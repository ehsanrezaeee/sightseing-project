import UsersList from "../components/UsersList";

const Users = () => {
  const USER = [
    {
      id: "u1",
      name: "esi",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1360px-Banana-Single.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USER} />;
};

export default Users;
