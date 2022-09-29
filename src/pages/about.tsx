import React from "react";

import { Content } from "../content/Content";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const About = () => (
  <Main meta={<Meta title="About" description="About" />}>
    <Content>
      <h1 className="text-center  text-3xl text-gray-900">{`About`}</h1>
      <br></br>
      <div className="flex justify-center items-center">
        <img
          src="..\assets\images\posts\about-pic.jpg"
          alt="Italian Trulli"
          className="w-1/2"
        ></img>
      </div>
      <div className="pt-14">
        {`My name is Tom L. de Ruijter (TLDR), and this is my personal travel blog. The
        main purpose of this blog is to:`}
        <li>{`Document my travels for myself, friends and family`}</li>
        <li>{`Provide insight into the ins and outs of backpacking and solo travel`}</li>
        <li>{`Share tips and tricks learned along the way`}</li>
        <br />
      </div>
      <div>
        {`Thanks for stopping by, and I hope you get something valueable out of reading this.`}
      </div>
      <br></br>
      <div>
        {`Any questions, recommendations, or simply wish to say hello, reach out at `}
        <a href="mailto: tom.deruijter@hotmail.com">
          tom.deruijter@hotmail.com
        </a>
      </div>
      <br />
      <br />
      <div className="mb-48">
        This blog was created using a templete made by{" "}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>. Check
        out the GitHub repo{" "}
        <a href="https://github.com/ixartz/Next-js-Blog-Boilerplate">here</a>
      </div>
    </Content>
  </Main>
);

export default About;
