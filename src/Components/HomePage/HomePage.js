import React from 'react'
import styles from './HomePageStyles.module.css'
import {Card} from "antd";
import Main from "../Main/Main";

const HomePage = () => {
  return (
    <Main>
      <div>
        <div style={{marginBottom: '1em'}}>
          Hello my name is Clint and this is my web page. There is crap all here but we are just getting started.
        </div>
        <h3>A few projects of mine...</h3>
        <Card title={"yabalog"}>
          <div>
            Electron app that gathers logs recursively in a local folder or gathers them from kubectl. Search local logs or connect to the cloud.
          </div>
          <a href="https://github.com/clintonmedbery/yabalog" target="_blank">
            yabalog - GitHub
          </a>
        </Card>
      </div>
    </Main>
  )
};

export default HomePage;
