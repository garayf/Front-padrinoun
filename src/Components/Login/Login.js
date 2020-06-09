import React from "react";
import { Form, Icon, Input, Button, Typography, message, Modal } from "antd";
import { withRouter } from "react-router-dom";
import { PrimButton } from "../Home/HomeStyles";
import {
  LoginFormForgot,
  LoginGeneral,
  LoginWelcome,
  StyledCol,
} from "./LoginStyled";


const { Title, Text } = Typography;

class NormalLoginForm extends React.Component {
  

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.performLogin();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
      <StyledCol>
            <LoginGeneral>
              <LoginWelcome>
                <Title>
                  Ingreso al
                  portal UN padrino de Ingeniería
                </Title>
                <p>
                  <Text>
                    login
                  </Text>
                </p>
              </LoginWelcome>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator("username", {
                    rules: [
                      {
                        required: true,
                        message: "Por favor, ingrese su usuario.",
                      },
                    ],
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Usuario SIA"
                      onChange={(text) => {
                        this.setState({ username: text.target.value });
                      }}
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Por favor, ingrese su contraseña.",
                      },
                    ],
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="Contraseña"
                      onChange={(text) => {
                        this.setState({ password: text.target.value });
                      }}
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  <PrimButton>
                    <Button type="primary" htmlType="submit" block>
                      Ingresar
                    </Button>
                  </PrimButton>
                  <LoginFormForgot
                    className="login-form-forgot"
                    href="https://cuenta.unal.edu.co/index.php?p=recoverPassword"
                  >
                    Olvidé mi contraseña
                  </LoginFormForgot>
                </Form.Item>
              </Form>
            </LoginGeneral>
          </StyledCol>
                 
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default withRouter(Form.create()(WrappedNormalLoginForm));
