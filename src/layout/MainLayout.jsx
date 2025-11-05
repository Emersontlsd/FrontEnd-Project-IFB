import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Layout, Menu, Drawer, Button } from "antd";
import {
  UserAddOutlined,
  UnorderedListOutlined,
  MenuOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  MailOutlined,
} from "@ant-design/icons";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

function MainLayout() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentKey =
    location.pathname.startsWith("/listar") ||
      location.pathname.startsWith("/visualizar")
      ? "/listar"
      : "/cadastrar";

  const menuItems = [
    {
      key: "/cadastrar",
      icon: <UserAddOutlined />,
      label: <Link to="/cadastrar">Cadastrar</Link>,
    },
    {
      key: "/listar",
      icon: <UnorderedListOutlined />,
      label: <Link to="/listar">Listar</Link>,
    },
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ===== Cabeçalho ===== */}
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: 16,
        }}
      >
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            color: "#333",
          }}
        >
          Sistema de Cadastro
        </div>

        {!isMobile && (
          <Menu
            mode="horizontal"
            selectedKeys={[currentKey]}
            items={menuItems}
            style={{
              background: "transparent",
              borderBottom: "none",
              fontWeight: 500,
              flex: 1,
              justifyContent: "flex-end",
            }}
          />
        )}

        {isMobile && (
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 22 }} />}
            onClick={() => setDrawerVisible(true)}
          />
        )}
      </Header>

      {/* ===== Drawer (menu lateral mobile) ===== */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="inline"
          selectedKeys={[currentKey]}
          items={menuItems}
          onClick={() => setDrawerVisible(false)}
        />
      </Drawer>

      {/* ===== Conteúdo principal ===== */}
      <Content
        style={{
          flex: 1,
          padding: "24px",
          margin: "24px",
          background: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          overflowY: "auto",
        }}
      >
        <Outlet />
      </Content>

      {/* ===== Rodapé ===== */}


      <Footer
        style={{
          textAlign: "center",
          background: "#3B82F6", // azul claro
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          padding: "20px 50px",
        }}
      >
        Sistema de Cadastro de Pessoas ©2025

        <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookOutlined
              style={{
                fontSize: "24px",
                color: "#fff",
                border: "2px solid #000", // borda preta
                borderRadius: "50%",
                padding: "8px",
                transition: "all 0.3s",
              }}
            />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramOutlined
              style={{
                fontSize: "24px",
                color: "#fff",
                border: "2px solid #000", // borda preta
                borderRadius: "50%",
                padding: "8px",
                transition: "all 0.3s",
              }}
            />
          </a>

          <a href="mailto:contato@exemplo.com">
            <MailOutlined
              style={{
                fontSize: "24px",
                color: "#fff",
                border: "2px solid #000", // borda preta
                borderRadius: "50%",
                padding: "8px",
                transition: "all 0.3s",
              }}
            />
          </a>
        </div>
      </Footer>

    </Layout>
  );
}

export default MainLayout;
