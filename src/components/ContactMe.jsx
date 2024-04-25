import React from "react";
import { useState } from "react";
import AnimatedSection from "../animations/AnimatedSection";
import { FormattedMessage } from "react-intl";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <AnimatedSection sectionId="Contact" className="pt-20">
      <div className="mx-auto max-w-3xl mt-10">
        <div className="flex flex-col sm:flex-row justify-center mt-5">
          <div className="basis-1/2 text-pretty text-white m-5">
            <p className="text-lg">
              <span className="text-orange-500 text-xl font-bold">
                <FormattedMessage
                  id="contact.thankYou"
                  defaultMessage="Thank you"
                />
              </span>
              <FormattedMessage
                id="contact.text"
                defaultMessage=" for visiting my portfolio! I am thrilled to learn more
              about your company and the opportunities available. I look forward
              to hearing from you soon and discussing how I can contribute to
              your team's success!"
              />
            </p>
          </div>
          <div className="basis-1/2 m-5 p-8 border rounded-lg border-orange-500 shadow-lg hover:shadow-orange-500/50 ease-in duration-300">
            <form
              className="group"
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
              noValidate
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className=" text-2xl text-white font-semibold mb-5">
                <FormattedMessage
                  id="contact.getInTouch"
                  defaultMessage="Get in Touch 😄"
                />
              </div>
              <div className="space-y-10">
                <div>
                  <label htmlFor="name">
                    <FormattedMessage
                      id="contact.nameLabel"
                      defaultMessage="Name"
                    />
                  </label>
                  <div className="m-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="peer text-black rounded-sm focus:outline-none focus:ring-1 focus:ring-orange-500 
                      valid:ring-1 valid:ring-green-500 focus:valid:ring-green-500
                      invalid:ring-red-500 invalid:text-red-600
                      focus:invalid:ring-red-500 w-full"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                      <FormattedMessage
                        id="contact.nameError"
                        defaultMessage="Please provide a name."
                      />
                    </p>
                  </div>
                </div>
                <div>
                  <label htmlFor="email">
                    <FormattedMessage
                      id="contact.emailLabel"
                      defaultMessage="Email"
                    />
                  </label>
                  <div className="m-1">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="peer text-black rounded-sm focus:outline-none focus:ring-1 focus:ring-orange-500 
                                valid:ring-1 valid:ring-green-500 focus:valid:ring-green-500
                                invalid:ring-red-500 invalid:text-red-600
                                focus:invalid:ring-red-500 w-full"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                      <FormattedMessage
                        id="contact.emailError"
                        defaultMessage="Please provide a valid email address."
                      />
                    </p>
                  </div>
                </div>
                <div>
                  <label htmlFor="message">
                    <FormattedMessage
                      id="contact.messageLabel"
                      defaultMessage="Message"
                    />
                  </label>
                  <div className="m-1">
                    <textarea
                      id="message"
                      name="message"
                      className="peer text-black rounded-sm focus:outline-none focus:ring-1 focus:ring-orange-500 
                      valid:ring-1 valid:ring-green-500 focus:valid:ring-green-500
                      invalid:ring-red-500 invalid:text-red-600
                      focus:invalid:ring-red-500 w-full"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                    <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                      <FormattedMessage
                        id="contact.messageError"
                        defaultMessage="Please provide a message."
                      />
                    </p>
                  </div>
                </div>
                <div className="sm:text-center text-sm sm:text-base">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 cursor-pointer group-invalid:pointer-events-none group-invalid:opacity-30"
                  >
                    <FormattedMessage
                      id="contact.buttonText"
                      defaultMessage="Submit message"
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactMe;
