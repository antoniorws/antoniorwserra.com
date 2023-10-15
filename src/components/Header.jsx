import React from 'react';
import styled from "styled-components";

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
  },
  {
    title: "Projects",
    value: "projects",
    href: "./projects"
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
    highlightStyles.transitionDuration = isHoveredFromNull ? "0ms" : "250ms";
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  return (
    <TabsNav ref={wrapperRef} onMouseLeave={resetHighlight}>
      <TabsHighlight ref={highlightRef} style={highlightStyles} />
      {tabsData.map((tab) => (
        <Tab href={tab.href} key={tab.value} onMouseOver={(ev) => repositionHighlight(ev, tab)}>
          {tab.title}
        </Tab>
      ))}
      <Divider/>
    </TabsNav>
  );
};

const Divider = styled.div`
  background: linear-gradient(135deg, var(--background) 0%, var(--current-line) 40%, var(--purple) 50%, var(--current-line) 60%);
  height: 3px;
  margin: 0 30%;
`;

const TabsNav = styled.header`
  position: relative;
  margin-bottom: 5%;
`;

const TabsHighlight = styled.div`
  background: var(--current-line);
  position: absolute;
  top: 9px;
  left: 0;
  border-radius: 4px;
  height: 40px;
  transition: 0.15s ease;
  transition-property: width, transform, opacity;
`;

const Tab = styled.a`
  padding: 16px 12px;
  font-size: large;
  color: var(--color-primary);
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: color 250ms;
  font-weight: bold;
  text-decoration: none;
`;

export default Header;