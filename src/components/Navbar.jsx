import React, { useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FormattedMessage } from "react-intl";
import { langContext } from "../context/langContext";

const navigation = [
  {
    name: <FormattedMessage id="menu.home" defaultMessage="Home" />,
    href: "#Home",
  },
  {
    name: <FormattedMessage id="menu.education" defaultMessage="Education" />,
    href: "#Education",
  },
  {
    name: (
      <FormattedMessage id="menu.technologies" defaultMessage="Technologies" />
    ),
    href: "#Technologies",
  },
  {
    name: <FormattedMessage id="menu.projects" defaultMessage="Projects" />,
    href: "#Projects",
  },
  {
    name: <FormattedMessage id="menu.contact" defaultMessage="Contact Me" />,
    href: "#Contact",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const language = useContext(langContext);

  return (
    <Disclosure as="nav" className="sticky top-0 w-full z-10 font-roboto">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-5 border-b backdrop-blur-xl border-gray-500">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only"> Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "text-gray-50 hover:underline decoration-orange-500 hover:text-orange-500  rounded-md px-3 py-2 text-md font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex sm:flex">
                <button className=" inline-block justify-center items-center w-10 ml-3" onClick={() => language.establishLanguage("es-MX")}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/Flags/spain.png"}
                    alt=""
                  />
                </button>
                <button className=" inline-block justify-center items-center w-10 ml-3" onClick={() => language.establishLanguage("en-US")}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/Flags/united-kingdom.png"
                    }
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden backdrop-blur-xl">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    "text-gray-300 hover:text-orange-500 block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
