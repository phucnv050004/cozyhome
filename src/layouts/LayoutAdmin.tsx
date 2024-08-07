import {
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ProductOutlined,
    ShoppingCartOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Loading from "src/components/Loading";
import { useLoading } from "src/contexts/loading";

const LayoutAdmin: React.FC = () => {
  const { Header, Sider, Content } = Layout;
  const navigate = useNavigate();
  const userJson = localStorage.getItem("user");
  const role = userJson ? JSON.parse(userJson)?.user.role : null;

  useEffect(() => {
      if (role !== "admin") {
          navigate("/");
      }
  }, [navigate, role]);
  const { loading } = useLoading();
  console.log(loading);
  const [collapsed, setCollapsed] = useState(false);
  const {
      token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
      <>
          <Loading isShow={loading} />
          <Layout
              style={{
                  marginLeft: "-8px",
                  marginTop: "-8px",
                  marginBottom: "-8px",
              }}
          >
              <Sider
                  trigger={null}
                  collapsible
                  collapsed={collapsed}
                  style={{ height: "auto" }}
              >
                  <div className="demo-logo-vertical" />
                  <Menu
                      theme="dark"
                      mode="inline"
                      defaultSelectedKeys={["1"]}
                      items={[
                          {
                              key: "0",
                              label: "Hello Admin",
                          },
                          {
                              key: "1",
                              icon: <ProductOutlined />,
                              label: "Quản lí sản phẩm",
                          },
                          {
                              key: "2",
                              icon: <UserOutlined />,
                              label: "Quản lí tài khoản",
                          },
                          {
                              key: "3",
                              icon: <ShoppingCartOutlined />,
                              label: "Quản lí đơn hàng",
                          },
                          {
                              key: "4",
                              icon: <LogoutOutlined />,
                              label: <NavLink to="/">Thoát</NavLink>,
                          },
                      ]}
                  />
              </Sider>
              <Layout>
                  <Header
                      style={{ padding: 0, background: colorBgContainer }}
                  >
                      <Button
                          type="text"
                          icon={
                              collapsed ? (
                                  <MenuUnfoldOutlined />
                              ) : (
                                  <MenuFoldOutlined />
                              )
                          }
                          onClick={() => setCollapsed(!collapsed)}
                          style={{
                              fontSize: "16px",
                              width: 64,
                              height: 64,
                          }}
                      />
                  </Header>
                  <Content
                      style={{
                          margin: "24px 16px",
                          padding: 24,
                          minHeight: 280,
                          background: colorBgContainer,
                          borderRadius: borderRadiusLG,
                      }}
                  >
                 <Outlet/>
                  </Content>
              </Layout>
          </Layout>
      </>
  );
};

export default LayoutAdmin;
