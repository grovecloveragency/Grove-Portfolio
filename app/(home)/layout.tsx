// import Footer from "../_components/Footer";
// import MobileFooter from "../_components/MobileFooter";
// import Navbar from "../_components/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <header className="sticky top-0 z-50">
        <Navbar />
      </header> */}
      <main>{children}</main>
      {/* <footer>
        <Footer />
        <MobileFooter />
      </footer> */}
    </div>
  );
};

export default HomeLayout;
