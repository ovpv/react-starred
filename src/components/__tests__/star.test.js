import React from "react";
import { faStar as StarFill } from "@fortawesome/free-solid-svg-icons";
import renderer from "react-test-renderer";
import Star from "../star";

it("renders correctly", () => {
  const tree = renderer.create(<Star type={StarFill} />).toJSON();
  expect(tree).toMatchSnapshot();
});
