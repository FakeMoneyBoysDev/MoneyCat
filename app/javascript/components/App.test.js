import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./components/Header";

Enzyme.configure({ adapter: new Adapter() });

describe("when the header loads...", () => {
  let header;

  beforeEach(() => {
    header = shallow(<Header />);
  });

  it("displays a navlink on the header", () => {
    const a = header.find("a");
    expect(a.length).toEqual(2);
  });
});
