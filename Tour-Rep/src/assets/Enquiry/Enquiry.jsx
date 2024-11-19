import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import "./Enquiry.css";

const questions = [
  {
    step: 1,
    question: "Where would you like to travel?",
    options: [
      "Botswana",
      "Namibia",
      "Rwanda",
      "Tanzania",
      "South Africa",
      "Zambia",
      "Zimbabwe",
      "Kenya",
      "I haven't decided yet",
    ],
  },
  {
    step: 2,
    question: "Do you have a specific region or camp in mind?",
    options: ["Region or Camp", "I haven't decided yet"],
  },
  {
    step: 3,
    question: "When would you like to travel?",
    options: ["I know exactly when", "I have a rough idea"],
  },
  {
    step: 4,
    question: "Select your travel dates",
    datePicker: true,
  },
  {
    step: 5,
    question: "Who are you travelling with?",
    options: ["Couple", "Solo", "Family", "Friends"],
    checkboxes: [
      "I'm a trade agent enquiring for someone else",
      "I am enquiring for a media opportunity",
    ],
  },
];

function Questionnaire() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [showRoughIdeaSection, setShowRoughIdeaSection] = useState(false);
  const [numberOfAdults, setNumberOfAdults] = useState(null);
  const [numberOfChildren, setNumberOfChildren] = useState(null);
  const [details, setDetails] = useState({
    email: "",
    firstName: "",
    surname: "",
    phone: "",
    preferredContact: "Email",
  });
  const [error, setError] = useState(null);
  const [dates, setDates] = useState({
    startDate: "",
    endDate: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const handleOptionSelect = (step, option) => {
    setAnswers({ ...answers, [step]: option });
    setError(null);

    if (step === 5 && (option === "Family" || option === "Friends")) {
      setNumberOfAdults("");
      setNumberOfChildren("");
    } else if (step === 5) {
      setNumberOfAdults(null);
      setNumberOfChildren(null);
    }

    if (step === 3 && option === "I have a rough idea") {
      setShowRoughIdeaSection(true);
    } else if (step === 3) {
      setShowRoughIdeaSection(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleNumberOfAdultsChange = (e) => {
    setNumberOfAdults(e.target.value);
    setError(null);
  };

  const handleNumberOfChildrenChange = (e) => {
    setNumberOfChildren(e.target.value);
    setError(null);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDates((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleNext = () => {
    const currentQuestion = questions.find((q) => q.step === currentStep);

    if (currentQuestion) {
      if (currentQuestion.options && !answers[currentStep]) {
        setError("*Please select an option before proceeding.");
        return;
      }

      if (currentStep === 5 && (answers[currentStep] === "Family" || answers[currentStep] === "Friends")) {
        if (numberOfAdults === "" || numberOfChildren === "") {
        }
      }

      if (currentQuestion.datePicker) {
        const { startDate, endDate } = dates;
        if (!startDate || !endDate) {
          setError("Please select both start and end dates.");
          return;
        }

        if (endDate <= startDate) {
          setError("End date must be after the start date.");
          return;
        }
      }
    }

    setError(null);
    if (currentStep < questions.length + 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, firstName, surname, phone } = details;
    if (!email || !firstName || !surname || !phone) {
      setError("Please complete all fields in the details section.");
      return;
    }

    // Prepare email content
    const emailContent = {
      email,
      firstName,
      surname,
      phone,
      answers: JSON.stringify(answers),
      numberOfAdults,
      numberOfChildren,
      dates: JSON.stringify(dates),
    };

    // Send email using EmailJS
    emailjs.send(
      "service_tlias9c",      // Replace with your EmailJS Service ID
      "template_3boco1b",     // Replace with your EmailJS Template ID
      emailContent,
      "AJzTJGQLRXl9aws5H"          // Replace with your EmailJS User ID
    ).then(
      (result) => {
        console.log("Email sent successfully!", result.text);
        alert("Thank you! Your responses have been sent successfully.");
        window.location.href = "/";
      },
      (error) => {
        console.error("Email send error:", error.text);
        alert("An error occurred while sending your responses. Please try again.");
      }
    );
  };

  const renderOptions = (options, step) => {
    return options.map((option, index) => (
      <button
        key={index}
        className={`option-button ${answers[step] === option ? "selected" : ""}`}
        onClick={() => handleOptionSelect(step, option)}
      >
        {option}
      </button>
    ));
  };

  const renderStepContent = () => {
    if (currentStep <= questions.length) {
      const currentQuestion = questions.find((q) => q.step === currentStep);

      if (!currentQuestion) return null;

      if (currentQuestion.datePicker) {
        return (
          <div className="date-picker-container">
            <label className="date-label">Start Date:</label>
            <input
              type="date"
              className="date-picker"
              name="startDate"
              min={today}
              value={dates.startDate}
              onChange={handleDateChange}
            />

            <label className="date-label">End Date:</label>
            <input
              type="date"
              className="date-picker"
              name="endDate"
              min={dates.startDate || today}
              value={dates.endDate}
              onChange={handleDateChange}
            />
          </div>
        );
      }

      return (
        <>
          <h2>{currentQuestion.question}</h2>
          <div className="options-container">
            {renderOptions(currentQuestion.options, currentStep)}
          </div>
          {currentStep === 5 && (answers[currentStep] === "Family" || answers[currentStep] === "Friends") && (
            <div className="number-of-people-input">
              <label style={{color: '#fff'}}>Number of adults:</label>
              <input
                type="number"
                min="1"
                value={numberOfAdults}
                onChange={handleNumberOfAdultsChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginTop: "10px",
                }}
              />
              <label style={{color: '#fff'}}>Number of children:</label>
              <input
                type="number"
                min="0"
                value={numberOfChildren}
                onChange={handleNumberOfChildrenChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginTop: "10px",
                }}
              />
            </div>
          )}
          {currentStep === 3 && showRoughIdeaSection && (
            <div className="rough-idea-section">
                <h4 style={{ color: "#fff" }}>Tell us more about your idea</h4>
              <textarea
                placeholder="Describe your rough travel idea here..."
                rows="4"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          )}
        </>
      );
    } else {
      return (
        <>
          <h2>Your Details</h2>
          <div className="details-form">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={details.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={details.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={details.surname}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={details.phone}
              onChange={handleInputChange}
            />
          </div>
        </>
      );
    }
  };

  return (
    <div className="questionnaire-container">
      <button className="close-button" onClick={() => (window.location.href = "/")}>
        ✕
      </button>

      <div className="step-container">
        {renderStepContent()}

        {error && <p className="error-message">{error}</p>}

        <div className="navigation-buttons">
          {currentStep > 1 && (
            <button className="back-button" onClick={handleBack}>
              Back
            </button>
          )}

          {currentStep <= questions.length && (
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          )}

          {currentStep === questions.length + 1 && (
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;
