import logo from "../../assets/foobar-logo.svg";
import leaf1 from "../../assets/illustrations/leaf1.svg";
import leaf2 from "../../assets/illustrations/leaf2.svg";
import straw1 from "../../assets/illustrations/straw1.svg";
import straw2 from "../../assets/illustrations/straw2.svg";
export default function Homepage(props) {
  return (
    <div className="Home">
      <img className="left" src={leaf1} alt={"hop leaf"} />
      <img className="right" src={straw1} alt={"straw leaf"} />
      <div className="center">
        <img className="foobar-logo" src={logo} alt={"foobar-logo"} />
        <h1>sip sip</h1>
        <button>order a beer</button>
      </div>
      <img className="bottom right" src={leaf2} alt={"hop leaf"} />
      <img className="bottom left" src={straw2} alt={"straw leaf"} />
      {/* <Router>
        <Routes>
          <Route path="/beerlist" element={<Beerlist data={data} />}></Route>
        </Routes>
      </Router> */}
    </div>
  );
}
