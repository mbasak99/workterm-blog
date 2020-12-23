import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Layout, Menu, Breadcrumb /* , Switch */ } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  QuestionCircleOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import styles from "../../styles/layouts.module.css";
/* import { Moon, Sun } from "../icons/icons"; */

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function SiteLayout(props) {
  const [collapsed, setCollapsed] = useState(true);

  var breadCrumbs = [];
  var route = useRouter();

  var itemSelected = () => {
    switch (route.pathname) {
      case "/resume":
        breadCrumbs = ["Resume"];
        return "2";
      case "/workterms/kenna":
        breadCrumbs = ["Workterms", "Kenna"];
        return "3";
      case "/about/me":
        breadCrumbs = ["About", "Me"];
        return "6";
      case "/about/site":
        breadCrumbs = ["About", "Site"];
        return "7";
      default:
        breadCrumbs = ["Home"];
        return "1";
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => {
          setCollapsed(!collapsed);
        }}
        className={styles.layout_sider}
      >
        <div className={styles.logo} />
        <Menu theme="dark" defaultSelectedKeys={[itemSelected()]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FileOutlined />}>
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<DesktopOutlined />} title="Work terms">
            <Menu.Item key="3">
              <Link href="/workterms/kenna">
                <a>Kenna</a>
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="4">
              <Link href="/workterms/work2">
                <a>Work term 2</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link href="/workterms/work3">
                <a>Work term 3</a>
              </Link>
            </Menu.Item> */}
          </SubMenu>
          <SubMenu key="sub2" icon={<QuestionCircleOutlined />} title="Learn">
            <Menu.Item key="6">
              <Link href="/about/me">
                <a>About Me</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link href="/about/site">
                <a>About The Site</a>
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className={styles.personal_links} style={{ float: "right" }}>
            {/* <span style={{ marginRight: "60px" }}>
              <Sun style={{ margin: "-10px 10px" }} />
              <Switch
                defaultChecked
                onClick={() => {
                  props.children.props.setDarkTheme(
                    !props.children.props.darkTheme
                  );
                }}
              />
              <Moon style={{ margin: "-6px 5px" }} />
            </span> */}
            <span>
              <a
                href="https://www.linkedin.com/in/monark-basak-402172144/"
                title="LinkedIn"
              >
                <LinkedinOutlined className={styles.icon_links} />
              </a>
            </span>
            <span>
              <a href="https://github.com/mbasak99" title="GitHub">
                <GithubOutlined className={styles.icon_links} />
              </a>
            </span>
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 30px" }}>
            {breadCrumbs.map((item, index) => {
              return <Breadcrumb.Item key={index + 1}>{item}</Breadcrumb.Item>;
            })}
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              margin: 24,
              padding: 24,
              minHeight: "93%",
              minWidth: "90%",
              borderRadius: "1%",
              backgroundColor: "#292929",
            }}
          >
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
