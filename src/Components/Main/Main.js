import React, { useState } from "react";
import { Avatar, Layout, Menu, Row } from "antd";
import Icon from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faDesktop, faHdd } from "@fortawesome/free-solid-svg-icons";
import HomePage from "../HomePage/HomePage";
import { Link } from "react-router-dom";
import MeLogo from "../../Images/Avatar.jpeg";
import styles from "./Main.module.css";

const { Header, Content, Sider } = Layout;

const Main = (props) => {
  let [sideCollapsed, setSideCollapsed] = useState(false);

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1" style={{ marginTop: "-.2em" }}>
            <Link to="/">
              <div className={styles.header}>
                <Avatar src={MeLogo} />
                <div className={styles.text}>ClintonMedbery.dev</div>
              </div>
              <div className="logo" />
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/desktop">
              <Icon>
                <FontAwesomeIcon icon={faDesktop} fixedWidth />
              </Icon>
              <span>Desktop</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="http://www.clintonmedbery.com/" target="_blank">
              <Icon>
                <FontAwesomeIcon icon={faHdd} fixedWidth />
              </Icon>
              <span>My Old Stuff</span>
            </a>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className={styles.mainContainer}>{props.children}</div>
      </Content>
    </Layout>
  );
};
export default Main;
