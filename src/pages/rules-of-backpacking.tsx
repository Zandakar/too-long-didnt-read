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
                   {/* <li>{``}</li> */}
          <li>{`Don't forget to bring a towel`}</li>
          <li>{`Put your phone on silent`}</li>
          <li>{`PUT YOUR PHONE ON SILENT`}</li>
          <li>{`Always carry cash. Enough for a ticket home, not enough to worry about losing`}</li>
          <li>{`Don't forget to bring a towel (into the bathroom with you)`}</li>
          <li>{`Don't forget your passport in the hotel safe`}</li>
          <li>{`Use packing / compression cubes to organize your gear. Close them when you're done`}</li>
          <li>{`If you're thinking too little, read. If you're thinking too much, write`}</li>
          <li>{`Don't be afraid to take up some space. Don't be selfish, but if you don't use it, somebody else will.`}</li>
          <li>{`There is always someone in the room with you`}</li>
         <li>{`Get your vaccines, bring some meds`}</li>
         <li>{`Don't book too far in advance, things change. They will always have a room.`}</li>
         <li>{`Only bring what you need right now. Buy the rest later`}</li>
         <li>{`Beds are giant mousepads`}</li>
        <li>{`If you want to save some money use booking websites to see which hostels have space, then call them up directly`}</li>
        </ol>
        <br />
      </div>
      <br />
      <br />
    </Content>
  </Main>
);

export default Page;
