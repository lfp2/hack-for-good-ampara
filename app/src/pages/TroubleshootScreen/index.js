import React from 'react';
import {
  Container,
  Description,
  Section,
  Title,
  Button,
  ButtonContainer,
} from './styles';
import Header from '../../components/Header';

const TroubleshootScreen = () => (
  <Container>
    <Header type="secondary" title="Problemas com o Aplicativo" />
    <Section>
      <Title>Problemas de conexão.</Title>
      <Description>
        1. Verifique se seu celular está com acesso à internet; {'\n'}
        2. Reinicie seu celular; {'\n'}
        3. Atualize o sistema operacional; {'\n'}
        4. Faça a última atualização do aplicativo. {'\n'}
      </Description>
    </Section>
    <Section>
      <Title>Problema com o recebimento das notificações.</Title>
      <Description>
        Verifique se está habilitada a opção de recebimento de notificações no
        seu perfil. Caso esteja já habilitado e, ainda assim, não receber as
        notificações, entre em contato com a nossa equipe através do e-mail:
        hello@amparaapp.com.br
      </Description>
    </Section>
    <Section>
      <Title>
        Não recebi o e-mail de confirmação ou cancelamento das consultas.
      </Title>
      <Description>
        Verifique se consegue visualizar a consulta agendada em "Consultas" na
        página inicial. Se não houver nenhum registro, será necessário efetuar o
        agendamento ou cancelamento da consulta. Caso haja um agendamento
        efetuado, por gentileza, entre em contato através do e-mail:
        hello@amparaapp.com.br
      </Description>
    </Section>
    <Section>
      <Title>Não há profissionais disponíveis na minha região.</Title>
      <Description>
        A primeira tentativa de agendamento será feita através da
        geolocalização, ou seja, o aplicativo encontrará os profissionais mais
        próximos à sua localidade. Se isso não for possível, disponibilizaremos
        a agenda de outros profissionais para não deixar de atendê-lo.
      </Description>
    </Section>
    <Section>
      <Title>Conseguiu resolver o seu problema?</Title>
      <ButtonContainer>
        <Button>Sim</Button>
        <Button type={'secondary'}>Não</Button>
      </ButtonContainer>
    </Section>
  </Container>
);

export default TroubleshootScreen;
