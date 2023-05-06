import React from 'react'
import { useContext, useRef, useState } from "react";
import "./feedBackFoam.css"

const Widgets = () => {

  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    email
      .sendForm(
        "service_ta1e9jj",
        "template_t8oi4af",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <>
      <div className='feedbackfoam mx-auto'>
        <h1 style={{ textAlign: "center" }}>FeedBack Response</h1>
        <div className="feedback-form" id="contact">
          {/* right side form */}
          <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                className="user input-field-style"
                placeholder="Name"
              />
              <input
                type="email"
                name="user_email"
                className="user input-field-style"
                placeholder="Email"
              />

              <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
              <input type="submit" value="Send" className="button submit " placeholder="Message" />
              <span>{done && "Thanks for Contacting me"}</span>
              <div
                className="blur c-blur1"
                style={{ background: "var(--purple)" }}
              ></div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Widgets
