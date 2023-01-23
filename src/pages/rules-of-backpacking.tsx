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
          <li>{`Don't forget to bring a towel (Hand towels make great travel towels)`}</li>
          <li>{`Put your phone on silent`}</li>
          <li>{`PUT YOUR PHONE ON SILENT`}</li>
          <li>{`Always carry cash. Enough for a train ticket home, not enough to worry about losing`}</li>
          <li>{`Don't forget to bring a towel (into the bathroom with you)`}</li>
          <li>{`Don't forget your passport in the hotel safe`}</li>
          <li>{`Use packing / compression cubes to organize your gear. Close them when you're done`}</li>
          <li>{`If you're thinking too little, read. If you're thinking too much, write`}</li>
          <li>{`There is always someone in the room with you`}</li>
          <li>{`Get your vaccines and bring some meds`}</li>
          <li>{`The vibes are the most important thing in a hostel. Read the reviews`}</li>
          <li>{`Avoid booking too many days at once if you can avoid it, sometimes you just don't like the place`}</li>
          <li>{`Call hostels directly to save 10 - 15%`}</li>
          <li>{`Only bring what you absolutely need right now. Buy the rest as you need it`}</li>
          <li>{`Beds are giant mousepads`}</li>
          <li>{`Eat a salad sometimes`}</li>
          <li>{`I hope you like snoring`}</li>
          <li>{`I hope you like other people's text notifications`}</li>
          <li>{`I hope you're not a shy pooper`}</li>
          <li>{`Bring earplugs and a eye mask. A Buff or wrapping a Tshirt can do in a pinch`}</li>
          <li>{`Avoid places that charge you to hold luggage between checkins. They tend to miss the point / feel stale`}</li>
          <li>{`It's OK to spend the day doing nothing`}</li>
          <li>{`If you want to party, look for party hostels`}</li>
          <li>{`Most cities have apps that let you buy public transport tickets`}</li>
          <li>{`Don't forget your shampoo / conditioner in the shower`}</li>
          <li>{`You can use a fanny pack to keep your belongings organised in bed if it has no storage compartment. Can sometimes clip it overhead.`}</li>
          <li>{`Get an online bank card (Revolut / Ubank etc). They have great conversion rates and less fees`}</li>
          <li>{`If asked by the ATM to do "conversion", select do not convert, else they charge a ~10%-20% conversion fee to do it for you`}</li>
          <li>{`Some kind of a project will keep you sane`}</li>
          <li>{`Learn to say hello, goodbye, thank you and excuse me in the local language`}</li>
          <li>{`Don't wait in lines (unless you really want to), there's plenty of good food around`}</li>
          <li>{`Book directly with the airline website instead of gotogate etc, they usually charge for check-in luggage`}</li>
          <li>{`Bring one thick and one thin (wired) padlock since hostels have different lockers`}</li>
          <li>{`This rule is omitted, for obvious reasons`}</li>
        </ol>
        <br />
      </div>
      <br />
      <br />
    </Content>
  </Main>
);

export default Page;
