import React, { useState } from "react";
import axios from "axios";
import URL from "../URL";
interface FormData {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface FormErrors {
  email?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
}

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log(formData)
      axios.post(`http://${URL}/accounts/signup/`,
        {
           email:formData.email,
           phone:formData.phoneNumber,
           firstname:formData.firstName,
           lastname:formData.lastName,
           password:formData.password 
        })
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.phoneNumber && <p style={{ color: "red" }}>{errors.phoneNumber}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 15px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
