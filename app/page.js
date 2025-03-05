
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/page";
import Hero from "./component/Hero/Hero";
import Info from "./component/Info/Info";
export default function Home() {
  return (
    <> <Header />
      <div className="lg:mx-60 mx-4 ">
        <Hero />
        <Info />
        <Footer />
      </div>
    </>



  );
}
