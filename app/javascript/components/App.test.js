import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./components/Header";
import ShowCoin from "./pages/ShowCoin";
import CoinEdit from "./pages/CoinEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("when the header loads...", () => {
  let header;

  beforeEach(() => {
    header = shallow(<Header />);
  });

  it("displays a navlink on the header", () => {
    const a = header.find("a");
    expect(a.length).toEqual(3);
  });
});

/*describe("when the coin loads...", () => {
  let coin;

  beforeEach(() => {
    coin = shallow(<ShowCoin match={{ params: { id: "bitcoin" } }} />);
  });

  it("displays a coin", () => {
    const cardtext = ShowCoin.find("cardtext");
    expect(cardtext.length).toEqual(2);

  });
});
*/
