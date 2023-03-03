import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/FormElements/input";
import Button from "../../shared/FormElements/Button";

const Dummy_Places = [
  {
    id: "p1",
    title: "Milad Tower",
    description: "Tallest building in Iran",
    imageUrl: "https://tasteiran.net/Files/milad-tower-tehran-9ed0a9.jpg",
    address: "Tehran, Tehran Province",
    location: {
      lat: 35.7448416,
      lng: 51.3731325,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Milad Tower",
    description: "Tallest building in Iran",
    imageUrl: "https://tasteiran.net/Files/milad-tower-tehran-9ed0a9.jpg",
    address: "Tehran, Tehran Province",
    location: {
      lat: 35.7448416,
      lng: 51.3731325,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = Dummy_Places.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return <h2>could not find place</h2>;
  }

  return (
    <form className="place-form">
      <Input id="title" element="input" type="text" label="Title" />
      <Input
        id="description"
        element="description"
        type="text"
        label="Description"
      />
      <Button>Update Place</Button>
    </form>
  );
};

export default UpdatePlace;
