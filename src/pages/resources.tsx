import React from "react";

import { Content } from "../content/Content";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const Page = () => (
  <Main
    meta={
      <Meta title="Resources" description="Resources" />
    }
  >
    <Content>
      <h1 className="text-center  text-3xl text-gray-900">{`Resources`}</h1>
      <br></br>
      <h2 className="text-center  text-2xl text-gray-900">{`General cool things`}</h2>
      <br></br>
      <div>       <a href="https://www.youtube.com/watch?v=_Qqp62SWWXM&ab_channel=MARATONNIETRAVELS">Same Same But Different </a>{`- One of the best 
      documentaries about backpacking I've come across`}</div>
      <br></br>
            <div>       <a href="https://www.goodreads.com/book/show/100247.Vagabonding"> Vagabonding, the Art of Long Term Travel</a>{`- Great book about
            how to approach backpacking. The mentality, how to get started etc. Short read`}</div>
      <br></br>
      <h2 className="text-center  text-2xl text-gray-900">{`Useful Apps`}</h2>
      <br></br>
      <h2 className="text-center  text-2xl text-gray-900">{`General`}</h2>
      <div className="flex justify-center items-center"></div>
      <div>
        <ol className="list-decimal">
                   <li>{`AirBnB - Other than accomidation, the experiences you can find on here are pretty cool`}</li>
                   <li>{`GetYourGuide - Walking tours, bar crawls, general experiences`}</li>
                   <li>{`GuruWalk - Similar to above`}</li>
                  <li>{`Workaway - find volunteer work. Costs 50€ / year but has some really cool gigs`}</li>
                  <li>{`Blablacar - Hitchhiking app. They can sometimes request money`}</li>
                  <li>{`FlixBus - Cheap European intra and international travel`}</li>
                  <li>{`HostelWorld - For booking hostels`}</li>
        </ol>
        <br />
      </div>
            <h2 className="text-center  text-2xl text-gray-900">{`The Netherlands`}</h2>
            <br></br>
      <div className="flex justify-center items-center"></div>
      <div>
        <ol className="list-decimal">
                   <li>{`NSRail - Google maps can't be trusted in NL. Use this instead if you have to, although simply
                   rocking up to a train station and waiting ~20 mins never failed me`}</li>
                   <li>{`DonkeyRepublic - Bike sharing app. Best around Amsterdam, although there are many similar
                   services like it.`}</li>
        </ol>
        <br />
      </div>
      <br />
      <br />
    </Content>
  </Main>
);

export default Page;