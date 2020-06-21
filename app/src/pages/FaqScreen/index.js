import React from 'react';
import { Container, Description, Section, Title, Wrapper } from './styles';
import Header from 'src/components/Header';

const FaqScreen = () => (
  <Wrapper>
    <Header type="secondary" title="Problemas com o Aplicativo" />
    <Container>
      <Section>
        <Title>Quem pode receber atendimento?</Title>
        <Description>
          Agentes de saúde, de qualquer parte do Brasil, que estão trabalhando
          no combate ao COVID-19 e precisam de ajuda qualificada para lidar com
          esse cenário atípico e grave no sistema de saúde.
        </Description>
      </Section>
      <Section>
        <Title>Como funciona o atendimento?</Title>
        <Description>
          O atendimento é pontual, gratuito e online. Não providenciamos um
          acompanhamento psicológico contínuo, mas sim um apoio pontual durante
          e após a pandemia. As consultas serão realizadas através de
          ferramentas de videoconferência da escolha de ambos profissionais. As
          diretrizes de atendimento terão como base as diretrizes éticas do CFP.
        </Description>
      </Section>
      <Section>
        <Title>Existe alguma triagem dos psicólogos?</Title>
        <Description>
          Sim. Antes de fazer qualquer conexão, há uma checagem do CRP de cada
          voluntário e serão incluídos somente aqueles com o CRP ativo. Além
          disso, todo profissional de psicologia cadastrado na plataforma aceita
          o Termo de Uso e é orientado pelas diretrizes do projeto. Caso
          identifique alguma conduta incoerente, entre em contato com a equipe
          do aplicativo através do e-mail: hello@amparaapp.com.br
        </Description>
      </Section>
      <Section>
        <Title>Existe alguma triagem dos agentes da saúde?</Title>
        <Description>
          Não. Consideramos que todos os agentes trabalhando no combate ao
          COVID-19 estão aptos para receber atendimento.
        </Description>
      </Section>
      <Section>
        <Title>
          Em caso de dúvidas sobre o aplicativo com quem eu posso falar?
        </Title>
        <Description>
          Para entrar em contato com a equipe, envie um e-mail com suas dúvida
          para o: hello@amparaapp.com.br
        </Description>
      </Section>
      <Section>
        <Title>Não tenho CRP ativo, como posso ajudar?</Title>
        <Description>
          Cadastramos apenas psicólogos (as) com registro profissional ativo no
          CRP, pois é necessário do respaldo do Conselho para garantir que os
          profissionais da saúde inscritos na plataforma recebam uma boa escuta
          profissional qualificada. Mas você pode sempre ajudar na divulgação e
          expansão da iniciativa.
        </Description>
      </Section>
    </Container>
  </Wrapper>
);

export default FaqScreen;
