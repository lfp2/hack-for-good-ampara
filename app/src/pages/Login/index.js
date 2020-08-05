import React, { useRef, useState } from "react";
import {
  Container,
  Logo,
  Forgot,
  Button,
  Error,
  InfoRow,
  Separator,
  Link,
  ClickableRow,
  Text,
} from "./styles";
import { Form } from "@unform/mobile";
import { BackHandler } from "react-native";
import Input, { SecretInput } from "src/components/Input";
import Selector from "src/components/Selector";
import validate from "src/util/validate";
import { schema } from "./validation";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import api from "src/services/api";
import useAwait from "src/util/useAwait";
import LoadingButton from "src/components/LoadingButton";
import { useStoreActions } from "easy-peasy";

const rolesOptions = [
  { value: "none", label: "Escolha seu perfil" },
  { value: "volunteer", label: "Voluntário" },
  { value: "health", label: "Paciente" },
];

const showError = (path, action, error) => {
  console.error(error);
  const isFormated = path;
  if (isFormated) {
    const formattedError = path;
    action(formattedError);
  }
};

const LoginScreen = () => {
  const formRef = useRef(null);
  const signIn = useStoreActions((actions) => actions.login);
  const navigation = useNavigation();
  const [isLoading, login, { toggle }] = useAwait(signIn);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (data) => {
    const isValid = await validate(schema, data, formRef);
    if (!isValid) {
      return;
    }
    const { role, email, password } = data;
    try {
      await login({ role, data: { email, password } });
      navigation.navigate("FirstScreen");
      toggle(false);
    } catch (error) {
      toggle(false);
      showError(
        error?.response?.data?.error,
        (newErrorMessage) => setErrorMessage(newErrorMessage),
        error
      );
    }
  };
  return (
    <Container>
      <Logo />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          label="E-MAIL"
          placeholder="email@gmail.com"
          type="email"
          blurOnSubmit={false}
          returnKeyType="next"
          onSubmitEditing={() => {
            formRef.current?.getFieldRef("password").focus();
          }}
        />
        <SecretInput
          name="password"
          label="SENHA"
          placeholder="digite sua senha"
          type="password"
        />
        <InfoRow>
          {errorMessage !== "" && <Error>{errorMessage}</Error>}
          <Forgot
            onPress={() => {
              navigation.navigate("LoginTroubleshoot");
            }}
          >
            Esqueceu a senha?
          </Forgot>
        </InfoRow>

        <Selector defaultValue="none" name="role" options={rolesOptions} />
        <LoadingButton
          isLoading={isLoading}
          onPress={() => formRef.current.submitForm()}
        >
          Login
        </LoadingButton>
      </Form>
      <Separator />
      <ClickableRow
        onPress={() => {
          navigation.navigate("Welcome");
        }}
      >
        <Text>Não tem uma conta?</Text>
        <Link>Cadastrar-se</Link>
      </ClickableRow>
    </Container>
  );
};

export default LoginScreen;
