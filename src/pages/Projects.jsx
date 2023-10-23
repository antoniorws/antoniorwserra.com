import React from 'react';
import styled from "styled-components";
import JavaImage from '../assets/images/JavaImage.png';
import ThisSiteImage from '../assets/images/ThisSiteImage.png'
import { inject } from '@vercel/analytics';

const cardProjects = [
  {
    title: "This Web Site",
    value: "thisWebSite",
    description: "Click here and you can see the code from this website.",
    url: "https://github.com/antoniorws/antoniorwserra.com",
    image: ThisSiteImage
  },
  {
    title: "Roadmap Java",
    value: "Roadmap Java",
    description: "A GitHub repository with a primary Java trail to start your carrer in Java world.",
    url: "https://github.com/antoniorws/basic-java",
    image: JavaImage
  }
];

function Projects(){
  inject();
  return <Main>
              <Ul>
                  {cardProjects.map(project => (
                    <A target="_blank" rel="noreferrer" href={project.url}>
                      <Li key={project.value}>
                          <ImageLi src={project.image} alt="" />
                          <LiStrong>{project.title}</LiStrong>
                          <PCard>{project.description}</PCard>
                      </Li>
                    </A>
                  ))}
              </Ul>         
          </Main>
};

const Main = styled.main`
    margin-top: 3em;
`;

const Ul = styled.ul`
    height: 100%;
    flex-wrap: wrap;
    place-content: center;
    width: 80vw;
    gap: 16px;
    -webkit-box-pack: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: inline-flex;
    position: relative;
    top: 5px;
    justify-content: space-around;
    border-radius: 30px;
`;

const A = styled.a`
  text-decoration: none;
  background: linear-gradient(135deg, var(--current-line) 0%, var(--background) 50%, var(--current-line) 90%);
  border-radius: 20px;
  @media screen and (min-width: 600px) {
      opacity: 0.7;
      &:hover{
          opacity: 1;
      }
  }
`;

const Li = styled.li`
  width: 350px;
  height: auto;
  border-radius: 10px;
  list-style: none;
  margin: 20px 16px;
  animation: 1s showItens;
  @media screen and (min-width: 600px) {
    width: 550px;
    &:hover{
        transition-duration: 0.3s;
        opacity: 1;
    }
  }
  @keyframes showItens {
    from {
        opacity: 0;
    }
  }
`;

const LiStrong = styled.strong`
  color: var(--color-primary);
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0px 12px;
`;

const ImageLi = styled.img`
  width: 100%;
  border-radius: 10px;
  &:hover{
      transition: 0.2s;
      transform-origin: center center;
      transform: scale(1.03) rotate(0.5deg);
      
  }
`;

const PCard = styled.p`
  text-align: center;
  opacity: 0.8;
  color: var(--color-primary);
`;

export default Projects;