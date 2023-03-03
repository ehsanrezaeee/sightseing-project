import "./NewPlace.css";
import Input from "../../shared/FormElements/input";
import Button from "../../shared/FormElements/Button";

const NewPlace = () => {
  const placeSunbmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className="place-form" onSubmit={placeSunbmitHandler}>
      <Input id="title" element="input" type="text" label="Title" />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
      />
      <Input id="address" element="input" type="text" label="Address" />
      <Button type="submit">Add Places</Button>
    </form>
  );
};

export default NewPlace;
