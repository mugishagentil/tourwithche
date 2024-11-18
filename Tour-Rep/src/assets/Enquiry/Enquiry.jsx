import React, { useState } from 'react';
import './Enquiry.css';
import { div } from 'framer-motion/client';

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
      "I haven't decided yet"
    ]
  },
  {
    step: 2,
    question: "Do you have a specific region or camp in mind?",
    options: [
      "Region or Camp",
      "I haven't decided yet"
    ]
  },
  {
    step: 3,
    question: "When would you like to travel?",
    options: [
      "I know exactly when",
      "I have a rough idea",
      "Tell me when is best"
    ]
  },
  {
    step: 4,
    question: "Select your travel dates",
    datePicker: true,
  },
  {
    step: 5,
    question: "Who are you travelling with?",
    options: [
      "Couple",
      "Solo",
      "Family",
      "Friends"
    ],
    checkboxes: [
      "I'm a trade agent enquiring for someone else",
      "I am enquiring for a media opportunity"
    ]
  },
  {
    step: 6,
    question: "What is your travel budget per person?",
    options: [
      "FRW 200K - 1000K",
      "FRW 1000K - 2000K",
      "FRW 2000K - 3000K",
      "FRW 4000K+"
    ]
  }
];

function Questionnaire() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [checkboxes, setCheckboxes] = useState({});
  const [details, setDetails] = useState({
    email: '',
    firstName: '',
    surname: '',
    phone: '',
    preferredContact: 'Email'
  });

  const handleOptionSelect = (step, option) => {
    setAnswers({ ...answers, [step]: option });
  };

  const handleCheckboxToggle = (checkboxLabel) => {
    setCheckboxes(prev => ({
      ...prev,
      [checkboxLabel]: !prev[checkboxLabel]
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
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
    console.log("Questionnaire Responses:", { answers, checkboxes, details });
    // alert("Congratulations! Your submission was successful.");
    window.location.href = "/"; // Redirect to home page
  };

  const handleClose = () => {
    // Logic for closing, e.g., navigate to the homepage or hide the component
    window.location.href = "/";
  };

  const renderOptions = (options, step) => {
    return options.map((option, index) => (
      <button
        key={index}
        className={`option-button ${answers[step] === option ? 'selected' : ''}`}
        onClick={() => handleOptionSelect(step, option)}
      >
        {option}
      </button>
    ));
  };

  const renderCheckboxes = (checkboxOptions) => {
    return checkboxOptions.map((label, index) => (
      <label key={index} className="checkbox-container">
        <input
          type="checkbox"
          checked={checkboxes[label] || false}
          onChange={() => handleCheckboxToggle(label)}
        />
        {label}
      </label>
    ));
  };

  const renderStepContent = () => {
    if (currentStep <= questions.length) {
      const currentQuestion = questions.find(q => q.step === currentStep);

      if (!currentQuestion) return null;

      if (currentQuestion.datePicker) {
        return (
          <div className="date-picker-container">
            <label className="date-label">Start Date:</label>
            <input type="date" className="date-picker" />

            <label className="date-label">End Date:</label>
            <input type="date" className="date-picker" />
          </div>
        );
      }

      return (
        <>
          <h2 style={{color: '#fff'}}>{currentQuestion.question}</h2>
          <div className="options-container">
            {renderOptions(currentQuestion.options, currentStep)}
          </div>
          {currentQuestion.checkboxes && (
            <div className="checkboxes-container">
              {renderCheckboxes(currentQuestion.checkboxes)}
            </div>
          )}
        </>
      );
    } else {
      // Render final details form
      return (
        <>
          <h2>Your Details</h2>
          <p style={{color: '#fff'}}>Please tell us a little about yourself and your preferred method of contact.</p>
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
      {/* Close button */}
      <button className="close-button" onClick={handleClose}>
        ✕
      </button>

      <div className="step-container">
        {renderStepContent()}

        <div className="navigation-buttons">
          {currentStep > 1 && (
            <button className="back-button" onClick={handleBack}>
              Back
            </button>
          )}
          {currentStep < questions.length + 1 ? (
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          ) : (
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
