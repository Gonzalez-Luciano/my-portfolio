import React, { useState } from "react";
import EnglishMessages from "../lang/en-US.json";
import SpanishMessages from "../lang/es-MX.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  let defaultLocale;
  let defaultMassage;
  const lang = localStorage.getItem("lang");

  if (lang) {
    defaultLocale = lang;

    if (lang === "es-MX") {
      defaultMassage = SpanishMessages;
    } else if (lang === "en-US") {
      defaultMassage = EnglishMessages;
    } else {
      defaultLocale = "en-US";
      defaultMassage = EnglishMessages;
    }
  }

  const [messages, setMessages] = useState(defaultMassage);
  const [locale, setLocale] = useState(defaultLocale);

  const establishLanguage = (language) => {
    switch (language) {
      case "es-MX":
        setMessages(SpanishMessages);
        setLocale("es-MX");
        localStorage.setItem("lang", "es-MX");
        break;
      case "en-US":
        setMessages(EnglishMessages);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;
      default:
        setMessages(EnglishMessages);
        setLocale("en-US");
    }
  };

  return (
    <langContext.Provider value={{ establishLanguage: establishLanguage,defaultLocale: defaultLocale }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
