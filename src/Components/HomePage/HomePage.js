import React from "react";
import { Card } from "antd";
import Main from "../Main/Main";

const HomePage = () => {
  return (
    <Main>
      <div>
        <div style={{ marginBottom: "1em" }}>
          Hello my name is Clint and this is my web page.
        </div>
        <h3>A few projects of mine...</h3>
        <Card title={"yabalog"} style={{ marginBottom: "1em" }}>
          <div>
            Electron app that gathers logs recursively in a local folder or
            gathers them from kubectl. Search local logs or connect to the
            cloud.
          </div>
          <a href="https://github.com/clintonmedbery/yabalog" target="_blank">
            yabalog - GitHub
          </a>
        </Card>
        <Card title={"FreeAAC"} style={{ marginBottom: "1em" }}>
          <div>
            Open Source React Native tablet application aimed at helping people
            who have trouble speaking communicate.
          </div>
          <a
            href="https://www.assistiveware.com/learn-aac/what-is-aac"
            target="_blank"
          >
            What is AAC?
          </a>
          <br />
          <a href="https://github.com/clintonmedbery/FreeAAC" target="_blank">
            FreeAAC - GitHub
          </a>
        </Card>
        <Card title={"This site"}>
          <div>clintonmedbery.dev written in React using Ant Design.</div>
          <a
            href="https://github.com/clintonmedbery/clinton-dev-site"
            target="_blank"
          >
            clinton-dev-site - GitHub
          </a>
        </Card>
      </div>
    </Main>
  );
};

export default HomePage;
