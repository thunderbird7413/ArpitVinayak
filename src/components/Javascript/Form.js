import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InitiativeContext } from "../../context/InitiativeContext";
import toast from "react-hot-toast";
function Form({ Heading }) {
  const { id } = useParams();
  const string = `${id}`;
  const stringinLowerCase = string.charAt(0).toUpperCase() + string.slice(1);

  const { addInitiative, initiatives, uploadImage } =
    useContext(InitiativeContext);
  const [village, setVillage] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    uploadImage(file, (base64Image) => {
      setImage(base64Image);
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      village: `${id}`,
      date,
      category: category,
      init: title,
      moreDetails: description,
      image,
    };
    addInitiative(formData);
    toast.success("Initiative Added Successfully");
    setTitle("");
    setDescription("");
    setImage(null);
    setDate("");
    // navigate(`/${id}`); // Redirect to Beladi page
  };

  return (
    <div className="container" style={{ padding: "4vw 4vw", width: "80%" }}>
      <h1 style={{ marginBottom: "2vw", textAlign: "center" }}>
        {id ? `${stringinLowerCase} - ${Heading}` : Heading}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Village" className="form-label">
            Village
          </label>
          <input
            required
            type="text"
            className="form-control"
            value={id}
            onChange={(e) => setVillage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            required
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Category
          </label>
          <select
            value={category}
            name="category"
            className="form-control"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option name="category" id="default" defaultChecked>
              Select Category
            </option>
            <option name="category" id="Education">
              Education
            </option>
            <option name="category" id="Agriculture">
              Agriculture
            </option>
            <option name="category" id="Health">
              Health
            </option>
            <option name="category" id="Waste Management">
              Waste Management
            </option>
            <option name="category" id="SHGs">
              SHGs
            </option>
          </select>
          {/* <input
            required
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => set(e.target.value)}
          /> */}
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            required
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            rows="4"
            cols="50"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div
          className="mb-5"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <label className="form-check-label" htmlFor="image">
            Upload Image
          </label>
          <input
            required
            type="file"
            className="form-text"
            onChange={handleImageUpload}
          />
        </div>
        <div
          className="submit"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "80%" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
