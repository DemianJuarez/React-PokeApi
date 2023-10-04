import { Navbar } from "../components/Navbar";

export const LayoutPage = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
