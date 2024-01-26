import React, { useState } from "react";
import Select from "react-select";
import { components } from "react-select";
import "./styles.css"; 
import avatar1 from "./images/avatar1.jpeg";
import avatar2 from "./images/avatar2.jpeg";
import avatar3 from "./images/avatar3.jpeg";
import avatar4 from "./images/avatar4.png";
import avatar5 from "./images/avatar5.png";
import avatar6 from "./images/avatar6.jpeg";
import avatar7 from "./images/avatar7.jpeg";
import avatar8 from "./images/avatar8.jpeg";
import avatar9 from "./images/avatar9.jpeg";
import avatar10 from "./images/avatar10.jpeg";

const options = [
  {
    value: "user1",
    label: "Amrutha KH",
    email: "amrutha@gmail.com",
    imageUrl: avatar2,
  },
  {
    value: "user2",
    label: "Ramesh C",
    email: "rameshc@gmail.com",
    imageUrl: avatar1,
  },
  {
    value: "user3",
    label: "Suresh Varma",
    email: "suresh@gmail.com",
    imageUrl: avatar4,
  },
  {
    value: "user4",
    label: "Ananya Suresh",
    email: "anaus@gmail.com",
    imageUrl: avatar3,
  },
  {
    value: "user5",
    label: "Anushka Bhat",
    email: "nushkabhat@gmail.com",
    imageUrl: avatar6,
  },
  {
    value: "user6",
    label: "Deeraj Gopal",
    email: "dgpaln@gmail.com",
    imageUrl: avatar5,
  },
  {
    value: "user7",
    label: "Emma Watson",
    email: "emmwatson@gmail.com",
    imageUrl: avatar9,
  },
  {
    value: "user8",
    label: "Michael Jackson",
    email: "michaeljackson@gmail.com",
    imageUrl: avatar10,
  },
  {
    value: "user9",
    label: "Farheen Firoz",
    email: "ffiz@gmail.com",
    imageUrl: avatar8,
  },
  {
    value: "user10",
    label: "Anubhav Sen",
    email: "absen@gmail.com",
    imageUrl: avatar7,
  },
];

const ClearIndicator = (props) => {
  return (
    <components.ClearIndicator {...props}>
      <div
        style={{
          backgroundColor: "#AFDBF5",
          borderRadius: "50%",
        }}
      >
        {props.children}
      </div>
    </components.ClearIndicator>
  );
};

const Line = () => {
  const [skills, setSkills] = useState([]);

  const handleChange = (selectedOptions) => {
    setSkills(selectedOptions || []);
  };

  const formatOptionLabel = (
    { value, label, email, isHighlighted },
    { context },
  ) => {
    const selectedOption = options.find((option) => option.value === value);

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: isHighlighted ? "#B0E0E6" : "transparent",
          borderRadius: isHighlighted ? "10px 10px 10px 0" : "0",
          padding: "4px",
        }}
      >
        <img
          src={selectedOption.imageUrl}
          alt=""
          style={{
            borderRadius: "50%",
            marginRight: "8px",
            width: "24px",
            height: "24px",
          }}
        />
        <div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: context === "menu" ? "bold" : "normal",
              fontStyle: context === "menu" ? "Sans-Serif" : "normal",
            }}
          >
            {label}{" "}
            {context === "menu" && (
              <span style={{ marginLeft: "8px", color: "gray" }}>{email}</span>
            )}
          </div>
        </div>
      </div>
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      const lastSelectedOption = skills[skills.length - 1];

      if (lastSelectedOption) {
        if (!lastSelectedOption.isHighlighted) {
          setSkills((prevSkills) =>
            prevSkills.map((option) =>
              option.value === lastSelectedOption.value
                ? { ...option, isHighlighted: true }
                : option,
            ),
          );
        } else {
          setSkills((prevSkills) =>
            prevSkills.filter(
              (option) => option.value !== lastSelectedOption.value,
            ),
          );
        }

        event.preventDefault();
      }
    }
  };

  return (
    <>
      <h2 className="pick-users-title">Pick Users</h2>
      <div className="select-container">
        <Select
          options={options}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={skills}
          isMulti
          placeholder="Add new user.."
          components={{
            DropdownIndicator: null,
            IndicatorSeparator: null,
            ClearIndicator: ClearIndicator,
          }}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              border: "none",
              boxShadow: "none",
              textAlign: "left",
              paddingLeft: "50px"
            }),
            option: (provided, state) => ({
              ...provided,
              display: "flex",
              alignItems: "center",
            }),
            placeholder: (provided) => ({
              ...provided,
              marginBottom: "4px",
              marginLeft: "20px",
            }),
            menu: (provided) => ({
              ...provided,
              width: "fit-content",
              borderRadius: "6px",
              marginLeft: "90px",
            }),
            menuList: (provided) => ({
              ...provided,
              padding: "0",
            }),
          }}
          formatOptionLabel={formatOptionLabel}
        />
      </div>
      <hr
        style={{
            margin: "20px 60px", 
            border: "1px solid #ccc", 
          width: "70%",
          marginLeft: "70px",
          paddingLeft: "50px",
        }}
      />
    </>
  );
};

export default Line;
