import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

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

const UserPlaces = () => {
  const { postId } = useParams();
  const loadedPlace = Dummy_Places.filter((r) => r.creator === postId);
  return <PlaceList items={loadedPlace} />;
};

export default UserPlaces;
