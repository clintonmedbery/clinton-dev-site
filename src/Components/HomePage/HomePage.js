import React from "react";
import Main from "../Main/Main";
import yabalogLogo from "../../Images/yabalog.png";
import oldSchoolWeather from "../../Images/oldSchoolWeather.png";
import freeAac from "../../Images/freeaac.png";
import gigabodes from "../../Images/gigabodes.png";
import clintonDev from "../../Images/clintonDev.png";

const HomePage = () => {
  const cardWrapperStyle = "mx-auto";
  const descriptionStyle = "mt-4 text-purplegray";
  const cardStyle = { marginBottom: "1em", height: "100%" };
  return (
    <Main>
      <div>
        <div
          className="text-purplegray text-xl"
          style={{ marginBottom: ".5em" }}
        >
          Hello my name is Clint and this is my web page.
        </div>
        <div
          className="text-purplegray text-lg"
          style={{ marginBottom: ".5em" }}
        >
          A few projects of mine...
        </div>
        <div className={`grid md:grid-cols-3 justify-items-stretch  gap-4`}>
          <div className={cardWrapperStyle}>
            <NewCard title={"Gigabodes"} style={cardStyle}>
              <img
                className="object-cover h-48 w-full mt-3"
                src={gigabodes}
                alt="gigabodes"
              />
              <div className={descriptionStyle}>
                Interactive VR application written in react-xr and
                react-three-fiber.
              </div>
              <a href="https://gigabodes.com" target="_blank" rel="noreferrer">
                Gigabodes
              </a>
            </NewCard>
          </div>
          <div className={cardWrapperStyle}>
            <NewCard title={"yabalog"} style={cardStyle}>
              <img
                className="object-contain h-48 w-full mt-3"
                src={yabalogLogo}
                alt="yabalog"
              />
              <div className={descriptionStyle}>
                Electron app that gathers logs recursively in a local folder or
                gathers them from kubectl. Search local logs or connect to the
                cloud.
              </div>
              <a
                href="https://github.com/clintonmedbery/yabalog"
                target="_blank"
                rel="noreferrer"
              >
                yabalog - GitHub
              </a>
            </NewCard>
          </div>
          <div className={cardWrapperStyle}>
            <NewCard title={"Old School Weather"} style={cardStyle}>
              <img
                className="object-contain h-48 w-full mt-3"
                src={oldSchoolWeather}
                alt="old school weather site"
              />
              <div className={descriptionStyle}>
                Simple weather app inspired by the old school weather channel
                and similar other weather apps.
              </div>
              <a
                href="https://www.oldschoolweather.com/"
                target="_blank"
                rel="noreferrer"
              >
                OldSchoolWeather.com
              </a>
              <br />
              <a
                href="https://github.com/clintonmedbery/weather-client"
                target="_blank"
                rel="noreferrer"
              >
                weather-client - GitHub
              </a>
            </NewCard>
          </div>
          <div className={cardWrapperStyle}>
            <NewCard title={"FreeAAC"} style={cardStyle}>
              <img
                className="object-contain h-48 w-full mt-3"
                src={freeAac}
                alt="free-aac"
              />
              <div className={descriptionStyle}>
                Open Source React Native tablet application aimed at helping
                people who have trouble speaking communicate.
              </div>
              <a
                href="https://www.assistiveware.com/learn-aac/what-is-aac"
                target="_blank"
                rel="noreferrer"
              >
                What is AAC?
              </a>
              <br />
              <a
                href="https://github.com/clintonmedbery/FreeAAC"
                target="_blank"
                rel="noreferrer"
              >
                FreeAAC - GitHub
              </a>
            </NewCard>
          </div>
          <div className={cardWrapperStyle}>
            <NewCard title={"This site"} style={cardStyle}>
              <img
                className="object-cover h-48 w-full mt-3"
                src={clintonDev}
                alt="this site"
              />
              <div className={descriptionStyle}>
                clintonmedbery.dev written in React using Craco, Tailwind, and
                Ant Design.
              </div>
              <a
                href="https://github.com/clintonmedbery/clinton-dev-site"
                target="_blank"
                rel="noreferrer"
              >
                clinton-dev-site - GitHub
              </a>
            </NewCard>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default HomePage;

const NewCard = ({ title, style, ...props }) => {
  return (
    <div
      className="px-3 py-2 bg-gray-300 rounded-md border-blueGreen border-2 divide-y-2 divide-blueGreen"
      style={style}
    >
      <div className="text-purplegray text-xl">{title}</div>
      <div className="my-3">{props.children}</div>
    </div>
  );
};
