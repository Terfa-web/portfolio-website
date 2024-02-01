import { useState } from "react";
import "./form.css";

const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredEmail("");
    setEnteredMessage("");
    setEnteredName("");
  };
  return (
    <div>
      <div className="heading text-center mb-4">
        <h2>Get in Touch</h2>
      </div>
      <form onSubmit={submitHandler}>
        <div className="form__input">
          <input
            type="text"
            placeholder="Your Name"
            value={enteredName}
            onChange={(e) => setEnteredName(e.target.value)}
          />
        </div>
        <div className="form__input">
          <input
            type="email"
            placeholder="Your Email"
            value={enteredEmail}
            onChange={(e) => setEnteredEmail(e.target.value)}
          />
        </div>
        <div className="form__input">
          <textarea
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
            rows="5"
            placeholder="Write Message"
          ></textarea>
        </div>
        <button className="submit__btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
