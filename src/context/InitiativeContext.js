import React, { createContext, useState, useEffect } from "react";
// import sci from "../Images/Initiatives/Beladi/sci_ex.jpg";
import init6 from "../Images/Initiatives/Beladi/init6.jpg";
import init7 from "../Images/Initiatives/Beladi/init7.png";
export const InitiativeContext = createContext();

const initialInitiatives = [
  {
    village: "Beladi",
    date: "Sept 21, 2023",
    init: "Science Experiment Exhibition",
    moreDetails:
      "Team UBA, IIT Roorkee organised a science experiment exhibition at the Govt. Secondary School, Beladi-Salhapur.",
    image: "../Images/Initiatives/Beladi/sci_ex.jpg",
  },
  {
    village: "Beladi",
    date: "July 31, 2021",
    init: "Book Distribution Drive",
    moreDetails: "Books Distribution carried out in village Beladi.",
    image: { init6 },
  },
  {
    village: "Beladi",
    date: "October 12, 2019",
    init: "Cycle Donation",
    moreDetails:
      "Donating unused cycles at IITR to village students in Beladi.",
    image: { init7 },
  },
];

export const InitiativeProvider = ({ children }) => {
  const [initiatives, setInitiatives] = useState(() => {
    const savedInitiatives = localStorage.getItem("initiatives");
    return savedInitiatives ? JSON.parse(savedInitiatives) : initialInitiatives;
  });

  useEffect(() => {
    localStorage.setItem("initiatives", JSON.stringify(initiatives));
  }, [initiatives]);

  const addInitiative = (initiative) => {
    setInitiatives((prevInitiatives) => [...prevInitiatives, initiative]);
  };
  const uploadImage = (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const deleteInitiative = (index) => {
    setInitiatives((prevInitiatives) =>
      prevInitiatives.filter((_, i) => i !== index)
    );
  };

  return (
    <InitiativeContext.Provider
      value={{ initiatives, addInitiative, deleteInitiative, uploadImage }}
    >
      {children}
    </InitiativeContext.Provider>
  );
};
