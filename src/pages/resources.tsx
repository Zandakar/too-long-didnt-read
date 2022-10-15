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
      <h2 className="text-center  text-2xl text-gray-900">{`Useful Apps`}</h2>
      <br></br>
      <h2 className="text-center  text-2xl text-gray-900">{`General`}</h2>
      <div className="flex justify-center items-center"></div>
      <div>
        <ol className="list-decimal">
                   <li>{`AirBnB - The experiences you can find on here are pretty cool`}</li>
                   <li>{`FlixBus - Cheap European intra and international travel`}</li>
                   <li>{`GetYourGuide - Walking tours, bar crawls, general experiences`}</li>
                   <li>{`GuruWalk - Similar to above`}</li>
        </ol>
        <br />
      </div>
            <h2 className="text-center  text-2xl text-gray-900">{`The Netherlands`}</h2>
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
