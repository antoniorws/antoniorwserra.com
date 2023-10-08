import React from 'react';
import styled from "styled-components";

const TabsNav = {
  position: "relative"
}

const TabsHighlight = styled.div`
  background: hsl(0deg 1.89% 19.17%);
  position: absolute;
  top: 9px;
  left: 0;
  border-radius: 4px;
  height: 32px;
  transition: 0.15s ease;
  transition-property: width, transform, opacity;
`;

const Tab = styled.a`
  padding: 16px 12px;
  font-size: large;
  color: hsl(0deg 6.65% 82.62%);
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: color 250ms;
  font-weight: bold;
  text-decoration: none;
`;

const tabsData = [
  {
    title: "Home",
    value: "home",
    href: "./"
  },
  {
    title: "About",
    value: "about",
    href: "./about"
  },
  {
    title: "Articles",
    value: "articles",
    href: "./articles"
  }
];

const Header = () => {
  const [tabBoundingBox, setTabBoundingBox] = React.useState(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = React.useState(null);
  const [highlightedTab, setHighlightedTab] = React.useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = React.useState(true);

  const highlightRef = React.useRef(null);
  const wrapperRef = React.useRef(null);

  const repositionHighlight = (e, tab) => {
    setTabBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const resetHighlight = () => setHighlightedTab(null);

  const highlightStyles = {};

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? "0ms" : "450ms";
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  return (
    <header  style={TabsNav} ref={wrapperRef} onMouseLeave={resetHighlight}>
      <TabsHighlight ref={highlightRef} style={highlightStyles} />
      {tabsData.map((tab) => (
        <Tab href={tab.href} key={tab.value} onMouseOver={(ev) => repositionHighlight(ev, tab)}>
          {tab.title}
        </Tab>
      ))}
    </header>
  );
};

export default Header;