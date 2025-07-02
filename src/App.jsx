import React, { useEffect, useState } from "react";
import { Card, Image, Row, Col, Tag } from "antd";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((apiData) => setData(apiData.products));
  }, []);

  return (
    <div
      style={{
        padding: "60px 0",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: 40,
          color: "#1a1a1a",
          fontWeight: 700,
          letterSpacing: 2,
          fontSize: 40,
          fontFamily: "Playfair Display, serif",
          textShadow: "0 2px 16px #d4af3777",
        }}
      >
        LUXURY COLLECTION
      </h1>
      <Row gutter={[32, 32]} justify="center">
        {data &&
          data.map((item, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                hoverable
                style={{
                  borderRadius: 22,
                  border: "none",
                  background: "rgba(255,255,255,0.95)",
                  boxShadow: "0 8px 32px 0 rgba(212,175,55,0.18)",
                  padding: 0,
                  minHeight: 420,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "box-shadow 0.3s",
                  overflow: "hidden",
                }}
                cover={
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    style={{
                      height: 200,
                      objectFit: "cover",
                      borderRadius: "22px 22px 0 0",
                      background: "#f4f4f4",
                      borderBottom: "2px solid #d4af37",
                      filter: "brightness(0.96) saturate(1.1)",
                    }}
                    preview={false}
                  />
                }
                bodyStyle={{ padding: 24 }}
              >
                <div style={{ marginBottom: 18 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 20,
                      color: "#1a1a1a",
                      marginBottom: 10,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontFamily: "Playfair Display, serif",
                      letterSpacing: 1,
                    }}
                    title={item.title}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      color: "#7a6c4d",
                      fontSize: 15,
                      minHeight: 48,
                      marginBottom: 10,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      fontStyle: "italic",
                    }}
                  >
                    {item.description}
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Tag
                    color="#fffbe6"
                    style={{
                      color: "#bfa145",
                      borderRadius: 10,
                      fontSize: 14,
                      padding: "4px 16px",
                      border: "1px solid #d4af37",
                      fontWeight: 500,
                      letterSpacing: 1,
                      background: "linear-gradient(90deg, #fffbe6 60%, #f7e7b6 100%)",
                    }}
                  >
                    {item.brand}
                  </Tag>
                  <span
                    style={{
                      fontWeight: 700,
                      color: "#d4af37",
                      fontSize: 22,
                      fontFamily: "Playfair Display, serif",
                      letterSpacing: 1,
                      textShadow: "0 1px 8px #d4af3722",
                    }}
                  >
                    ${item.price}
                  </span>
                </div>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default App;