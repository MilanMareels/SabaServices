import { CustomFlowbiteTheme, Navbar } from "flowbite-react";

export default function NavBarSection() {
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;

  const customTheme: CustomFlowbiteTheme["navbar"] = {
    link: {
      base: "block py-2 pl-2 pr-4 md:p-0 text-[#101860]",
      active: {
        on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
        off: "border-b border-gray-100 hover:bg-[#F37326] dark:border-gray-700 dark:text-[#F37326] dark:hover:bg-black dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-[#F37326] md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
      disabled: {
        on: "text-[#101860] hover:cursor-not-allowed dark:text-[#F37326]",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-[#F37326] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
      icon: "h-6 w-6 shrink-0",
    },
  };

  return (
    <Navbar fluid rounded theme={customTheme}>
      <Navbar.Brand>
        <img src="/logo.JPG" className="mr-3 h-10 sm:h-10" alt="Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <button className="bg-[#F37326] text-white p-2 rounded flex items-center gap-2">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
          </svg>
          <a href="tel:+32 476 62 31 12" className="font-semibold">
            +32 476 62 31 12
          </a>
        </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg">
          Home
        </Navbar.Link>
        <Navbar.Link href="/#services" className="text-lg">
          Diensten
        </Navbar.Link>
        <Navbar.Link href="/#contact" className="text-lg">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
