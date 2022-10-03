import React from "react";

import { Content } from "../content/Content";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const About = () => (
  <Main meta={<Meta title="About" description="About" />}>
    <Content>
      <h1 className="text-center  text-3xl text-gray-900">{`Rules of backpacking`}</h1>
      <br></br>
      <div className="pt-14">
        <ol className="list-decimal">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
      </div>
      <br />
      <br />
    </Content>
  </Main>
);

export default About;
