import React from 'react';
import { Container } from './styles';
import Header from 'src/components/Header';
import Section, { Title, Description, BgEffect } from 'src/components/Section';

const NiceHabitsScreen = () => {
  return (
    <Container>
      <Header type="secondary" title="Boas Práticas" />
      <Section>
        <Title>Disponibilizar agenda</Title>
        <Description>
          Ao se cadastrar no aplicativo, acesse "Meus horários" na página
          inicial e selecione as datas e horários de atendimento. Você poderá
          selecionar todos os horários que deseja disponibilizar no aplicativo.
          Os horários tem um intervalo de 1 hora e cada consulta deverá ter até
          50 minutos.
        </Description>
      </Section>
      <Section>
        <Title>Consultas</Title>
        <Description>
          Ao receber um agendamento, vá até "Consultas" na página inicial e
          acione o botão para confirmar a nova consulta. Enviaremos um e-mail
          com os dados do agendamento e do paciente. Após receber o e-mail, você
          deverá entrar em contato com o paciente e definir o melhor formato de
          comunicação para a realização da consulta. Essa ação é essencial para
          que o paciente possa se organizar.
        </Description>
      </Section>
      <Section>
        <Title>Cancelamento da consulta</Title>
        <Description>
          Caso você não possa realizar à consulta, efetue o cancelamento em
          "Consultas" na página inicial com até 1 hora antes do horário e acione
          o botão de cancelamento. O paciente será notificado pelo aplicativo e
          por e-mail. Se houver cancelamento da consulta pelo paciente, você
          também será notificado.
        </Description>
      </Section>
      <Section>
        <Title>Plantão</Title>
        <Description>
          Caso deseje trabalhar em formato de plantão, habilite o botão na
          página inicial e você poderá receber uma chamada telefônica a qualquer
          momento. O tempo da chamada respeitará o tempo máximo de 45 minutos
          por consulta. Cobranças poderão ser feitas de acordo com sua
          operadora. Lembre-se de ativar novamente o plantão após cada
          atendimento realizado.
        </Description>
      </Section>
      <BgEffect />
    </Container>
  );
};

export default NiceHabitsScreen;
