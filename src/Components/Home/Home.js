import React from "react";
import { Row, Divider, Col } from "antd";
import {
  CardWrapper,
  TextResponsive,
  ButtonResponsive
} from "../Godson/GodsonStyled";

class Home extends React.Component {
  
  render() {
    return (
      <div style={{ marginHorizontal: "50px" }}>
        <Divider style={{ background: "#ffffff00" }} />
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px"
          }}
        >
          <CardWrapper>
            <Col>
              <TextResponsive>Solicitudes de estudiantes</TextResponsive>
            </Col>            
          </CardWrapper>
        </Row>        
      </div>
    );
  } 
}

export default Home;
