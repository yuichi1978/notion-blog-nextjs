import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="global-container container mx-auto">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout;