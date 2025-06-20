import Navbar from '../../components/Navbar';
import ImageGrid from '../../components/ImageGrid';
import Footer from '../../components/Footer';

const Home = () => (
	<>

  <div className="dark:bg-black bg-white h-screen  px-5 md:px-20  duration-500">
    <Navbar />
    <div className="container mx-auto">
      <h1 className="text-4xl pt-10 pb-8 font-bold">PORTFOLIO</h1>
      <ImageGrid />
    </div>
    <Footer />
  </div>
	</>

);

export default Home;
