import { Logo } from "./logo";

export const Navbar = () => {
    const menuOptions = ["Projects", "Stack", "Blog", "Resources", "Contact"];
    
  return (
    <nav className="flex justify-between items-center font-ibm py-8">
      <Logo />
      <ul className="flex gap-4 justify-center items-center flex-nowrap text-xl text-blue-200 font-semibold">
        {menuOptions.map((option) => (
          <li key={option} className="hover:text-yellow-100 hover:cursor-pointer">{option}</li>
        ))}
      </ul>
    </nav>
  );
};
