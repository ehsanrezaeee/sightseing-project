import "./UsersList.css";
import UserItem from "./UserItem";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No user found</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((item) => {
        return (
          <UserItem
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            placeCount={item.places}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
