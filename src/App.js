import './App.css';
import Bitpro from './components/Bitpro';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import bitproimg from './images/Bitpro.jpg';
import bitgenimg from './images/Bitgen.jpg';
import vectorimg from './images/Vector-Attack-76.jpg';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Buybitpro1 from './components/Buybitpro1';
import ShowCart1 from './components/ShowCart1';
import QuantityState from './context/productquantity/QuantityState';
import DetailState from './context/productdetail/DetailState';

function App() {
  const title = "Bitpro";
  const title1 = "Bitgen";
  const title2 = "Vector Attack 76";
  const description = "You can generate everyday 1 BTC and send to many wallets depend on you despair time after 24 hours It's too easy just install and connect wallet and create a transaction after 24 hours transaction automatic despair.";
  const description1 = "You can generate everyday 5 BTC and send to many wallets depend on you despair time after 90 Hours It's too easy just install and connect wallet and create a transaction after 90 hours transaction automatic despair.";
  const description2 = "You can generate everydayUnlimited BTC and send to many wallets depend on you despair time after After 3 Weeks It's too easy just install and connect wallet and create a transaction after 24 hours transaction automatic despair.";
  const slug = "/product/bitpro";
  const slug1 = "/product/bitgen";
  const slug2 = "/product/vector";
  const imgsrc = bitproimg
  const imgsrc1 = bitgenimg;
  const imgsrc2 = vectorimg;
  const dollar = "$350.00";
  const dollar1 = "$550.00";
  const dollar2 = "$900.00";
  return (
    <>
      <DetailState>
        <QuantityState>
          <Router>
            <Navbar />
            <div style={{ color: 'white' }}>
              <Routes>
                <Route exact path='/' element={<Bitpro slug={slug} title={title} description={description} />} />
                <Route exact path='/bitpro' element={<Bitpro slug={slug} title={title} description={description} />} />
                <Route exact path='/bitgen' element={<Bitpro slug={slug1} title={title1} description={description1} />} />
                <Route exact path='/vector' element={<Bitpro slug={slug2} title={title2} description={description2} />} />
                <Route exact path='/product/bitpro' element={<Buybitpro1 title={title} description={description} imgsrc={imgsrc} dollar={dollar} />} />
                <Route exact path='/product/bitgen' element={<Buybitpro1 title={title1} description={description1} imgsrc={imgsrc1} dollar={dollar1} />} />
                <Route exact path='/product/vector' element={<Buybitpro1 title={title2} description={description2} imgsrc={imgsrc2} dollar={dollar2} />} />
                {/* <Route exact path='/product/bitpro' element={ <Buybitpro title={title} description={description} imgsrc={imgsrc} dollar={dollar} />} />
          <Route exact path='/product/bitgen' element={ <Buybitpro title={title1} description={description1} imgsrc={imgsrc1} dollar={dollar1} />} />
          <Route exact path='/product/vector' element={ <Buybitpro title={title2} description={description2} imgsrc={imgsrc2} dollar={dollar2} />} /> */}
                {/* <Route exact path='/showcart' element={<ShowCart />} /> */}
                <Route exact path='/showcart' element={<ShowCart1 />} />
                <Route exact path='/profile' element={<Profile />} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </QuantityState>
      </DetailState>
    </>
  );
}

export default App;
