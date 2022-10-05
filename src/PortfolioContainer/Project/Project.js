import React, { useState, useEffect } from 'react';
import './Project.css';
import  Hellobonsai from '../../assets/pro.jpg'
import TannerGoods from '../../assets/tanner.png';
import Bellavita from '../../assets/bellavita.png';
import Kimaye from '../../assets/kimaye.png';
import chakra from '../../assets/chakra.png'
import react from '../../assets/react.png'
import express from '../../assets/express.jpg'
import node from '../../assets/nod.jpg'
import mongo from '../../assets/mongo.jpg'
import {AiOutlineGithub} from 'react-icons/ai';
import {TbExternalLink} from 'react-icons/tb';
import html5 from '../../assets/icons8-html-5-144.png';
import css3 from '../../assets/icons8-css3-144.png';
import js from '../../assets/icons8-javascript-144.png';

export default function Project() {
    

  return (
    <div className="project-container" id="Projects">
      <div className="project-header">
        <h3>Projects</h3>
        <p>Tech Stack and Projects</p>
        <span className="header-underline">
          <span className="header-underline1"></span>
        </span>
      </div>

      <div className="projectDetails">
        <div className="projectCard">
          {/* card */}
          <div className="project-card">
            <img id="spe" src={Hellobonsai} alt="" />
            <div className="card-body">
              <div class="badge">BACKEND & FRONTEND</div>
              <div className="projectName">
                Hellobonsai clone[Group Project]
              </div>
              <div className="techStack">
                <img src={react} />
                <img src={node} />
                <img src={express} />
                <img src={mongo} />
                <img src={chakra} />
              </div>
              <div className="contentProject">
                Hello Bonsai is a freelance business management application that
                allows freelancers to send proposals, create contracts, generate
                invoices, and more.
              </div>
              <div className="projectLinks">
                <a
                  className="projectbtn1"
                  href="https://github.com/PRASHANT7277/petite-swing-7786"
                  target="_blank"
                >
                  <AiOutlineGithub /> GitHub
                </a>
                <a
                  className="projectbtn2"
                  href="https://hellobonsai.vercel.app/"
                  target="_blank"
                >
                  Demo <TbExternalLink />
                </a>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="project-card">
            <img id="spec"  src={TannerGoods} alt="" />
            <div className="card-body">
              <div class="badge">Frontend</div>
              <div className="projectName">Tanner Goods clone</div>
              <div className="techStack">
                <img src={react} />
                <img src={chakra} />
                <img src={html5} />
                <img src={css3} />
                <img src={js} />
              </div>
              <div className="contentProject">
                This is a clone of E-commerce site which Deals with the highest
                quality leather belts, wallets and accessories, including the
                Mazama Wares collection of handcrafted glassware etc.
              </div>
              <div className="projectLinks">
                <a
                  className="projectbtn1"
                  href="https://github.com/PRASHANT7277/tanner_good"
                  target="_blank"
                >
                  <AiOutlineGithub /> GitHub
                </a>
                <a
                  className="projectbtn2"
                  href="https://tannergoods-woad.vercel.app/"
                  target="_blank"
                >
                  Demo <TbExternalLink />
                </a>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="project-card">
            <img src={Bellavita} alt="" />
            <div className="card-body">
              <div class="badge">Frontend</div>
              <div className="projectName">Bella Vita Organics Clone</div>
              <div className="techStack">
                <img src={react} />
                <img src={chakra} />
                <img src={html5} />
                <img src={css3} />
                <img src={js} />
              </div>
              <div className="contentProject">
                This is a clone of E-commerce website where we offers Ayurvedic
                & Natural Beauty Care Products made from 100% Natural
                Ingredients..
              </div>
              <div className="projectLinks">
                <a
                  className="projectbtn1"
                  href="https://github.com/PRASHANT7277/-breakable-bikes-2790"
                  target="_blank"
                >
                  <AiOutlineGithub /> GitHub
                </a>
                <a
                  className="projectbtn2"
                  href="https://bellavita-alpha.vercel.app/"
                  target="_blank"
                >
                  Demo <TbExternalLink />
                </a>
              </div>
            </div>
          </div>
          {/* card 1 */}
          <div className="project-card">
            <img src={Kimaye} alt="" />
            <div className="card-body">
              <div class="badge">FRONTEND</div>
              <div className="projectName">Kimaye clone[Group Project]</div>
              <div className="techStack">
                <img src={html5} />
                <img src={css3} />
                <img src={js} />
              </div>
              <div className="contentProject">
                This is a E-commerce Website where you can buy Super Fresh
                Fruits,Fresh-cuts,Fruit-combos etc directly from farms directly
                at your doorsteps.
              </div>
              <div className="projectLinks">
                <a
                  className="projectbtn1"
                  href="https://github.com/PRASHANT7277/Kimaye"
                  target="_blank"
                >
                  <AiOutlineGithub /> GitHub
                </a>
                <a
                  className="projectbtn2"
                  href="https://kimaye-masai.netlify.app/"
                  target="_blank"
                >
                  Demo <TbExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
