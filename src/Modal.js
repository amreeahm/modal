import { useState } from "react";
import "./App.css";

function Modal() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        dob: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, email, phone, dob } = formData;

        if (!username || !email || !phone || !dob) {
            alert("All fields are required.");
            return;
        }

        if (!email.includes("@")) {
            alert("Invalid email. Please check your email address.");
            return;
        }

        if (phone.length !== 10 || isNaN(phone)) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            return;
        }

        if (new Date(dob) > new Date()) {
            alert("Invalid date of birth. Please enter a past date.");
            return;
        }

        setFormData({ username: "", email: "", phone: "", dob: "" });
        setIsOpen(false);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            {!isOpen && <><h1>User Details Modal</h1>
                <button onClick={() => setIsOpen(true)}>Open Form</button></>
            }

            {isOpen && (
                <div className="modal" onClick={() => setIsOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Fill in the Details</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Username:</label>
                            <input id="username" value={formData.username} onChange={handleChange} required />

                            <label>Email Address:</label>
                            <input id="email" value={formData.email} onChange={handleChange} required />

                            <label>Phone Number:</label>
                            <input id="phone" type="number" value={formData.phone} onChange={handleChange} required />

                            <label>Date of Birth:</label>
                            <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />

                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
