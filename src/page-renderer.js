import React from "react";
import { useRouteMatch } from "react-router-dom";

const generatePage = (page) => {
  const component = () => require(`./components/pages/${page}`).default;

  try {
    return React.createElement(component());
  } catch (err) {
    console.warn(err);
    return React.createElement(() => 400);
  }
};

export default function PageRenderer() {
  const {
    params: { page },
  } = useRouteMatch();

  return generatePage(page);
}
