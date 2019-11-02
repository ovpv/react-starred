import React from "react";
import renderer from "react-test-renderer";
import Stars from "../stars";
import Enzyme, { shallow, mount, render } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("should recieve a number for given prop", () => {
  const wrapper = shallow(<Stars given={3} on={10} />);
  expect(wrapper).toHaveProp("given");
});

it("renders correctly", () => {
  const tree = renderer.create(<Stars given={3} on={10} />).toJSON();
  expect(tree).toMatchSnapshot();
});
