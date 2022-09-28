import React from "react";

import { Content } from "../content/Content";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const About = () => (
  <Main meta={<Meta title="About" description="About" />}>
    <Content>
      <div>
        {`My name is Tom L. de Ruijter (TLDR), and this is my personal travel blog. The
        main purpose of this blog is to:`}
        <br />
        <br />
        <li>{`Document my travels for myself, friends and family`}</li>
        <li>{`Provide insight into the ins and outs of backpacking and solo travel`}</li>
        <li>{`Share tips and tricks learned along the way`}</li>
        <br />
      </div>
      <div>
        {`Thanks for stopping by, and I hope you get something valueable out of reading this. Any questions, recommendations,
        or simply wish to say hello, reach out at `}
        <a href="mailto: tom.deruijter@hotmail.com">
          tom.deruijter@hotmail.com
        </a>
      </div>
      <br />
      <div>
        This blog was created using a templete made by{" "}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>. Check
        out the GitHub repo{" "}
        <a href="https://github.com/ixartz/Next-js-Blog-Boilerplate">here</a>
      </div>
    </Content>
  </Main>
);

export default About;
