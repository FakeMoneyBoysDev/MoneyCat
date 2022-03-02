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
const mockCoin = { location: { coin: {} } };

describe("when the coin loads...", () => {
  let coin;

  beforeEach(() => {
    coin = shallow(<ShowCoin location={mockCoin} />);
  });

  it("displays a coin", () => {
    const CardTitle = ShowCoin.find("CardTitle");
    expect(CardTitle.length).toEqual(2);
  });
});

/*describe("when the page loads a header is displayed...", () => {
  let coinEdit;

  beforeEach(() => {
    coinEdit = shallow(<CoinEdit />);
  });

  it("displays a heading", () => {
    const h2 = CoinEdit.find("h2");
    expect(h2.length).toEqual(2);
  });
});
*/
