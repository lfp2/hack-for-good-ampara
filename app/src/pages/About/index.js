import React from 'react';
import { Container, Text, Link, Logo, Description, Section } from './styles';
import Header from '../../components/Header';

const AboutScreen = () => (
  <Container>
    <Header type="secondary" title="Sobre" />
    <Logo />
    <Description>
      O Ampara app foi criado a partir de um evento designado a encontrar uma
      solução para apoiar à sociedade no momento da pandemia do COVID-19. Com
      parceria com a Twilio e a Rede de Apoio, o projeto deu continuidade para
      entender os benefícios que esta iniciativa pode gerar.
    </Description>
    <Section>
      <Text>Para saber mais acesse </Text>
      <Link>www.amparaapp.com.br</Link>
    </Section>
    <Section>
      <Text>Sobre a Twilio: </Text>
      <Link to="https://www.twilio.com/">www.twilio.com</Link>
    </Section>
    <Section>
      <Text>Sobre a Rede de Apoio:</Text>
      <Link to="https://www.rededeapoiopsicologico.org.br/">
        www.rededeapoiopsicologico.org.br
      </Link>
    </Section>
  </Container>
);

export default AboutScreen;
