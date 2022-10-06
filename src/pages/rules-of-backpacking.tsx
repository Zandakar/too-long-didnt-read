import React from "react";

import { Content } from "../content/Content";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const Page = () => (
  <Main
    meta={
      <Meta title="Rules of Backpacking" description="Rules of Backpacking" />
    }
  >
    <Content>
      <h1 className="text-center  text-3xl text-gray-900">{`Rules of Backpacking`}</h1>
      <br></br>
      <div className="flex justify-center items-center"></div>
      <div>
        <ol className="list-decimal">
          <li>{`Don't forget to bring a towel`}</li>
          <li>{`Put your phone on silent`}</li>
          <li>{`PUT YOUR PHONE ON SILENT`}</li>
          <li>{`Always carry cash`}</li>
          <li>{`Don't forget to bring a towel (into the bathroom with you)`}</li>
          <li>{`Don't forget your passport in the hotel safe`}</li>
          <li>{`Use packing / compression cubes`}</li>
        </ol>
        <br />
      </div>
      <br />
      <br />
    </Content>
  </Main>
);

export default Page;
