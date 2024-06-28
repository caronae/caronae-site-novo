import React, { useState } from 'react';
import './style.css';
import Down from '../../assets/Arrow_down.png';
import Up from '../../assets/Arrow_up.png';
import IconForm from '../IconForm';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-section">
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <div>
          {title}
        </div>
        <div className="accordion-icon">
          {isOpen ? <IconForm
            src={Up}
            widht="24px"
            backgroundColor="#ffffff"
          />:
          <IconForm
            src={Down}
            widht="24px"
            backgroundColor="#ffffff"
          /> }
        </div>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const dataProjeto = [
  {
    title: 'O que é o projeto de extensão universitário do Caronaê?',
    content: 'O Caronaê é um projeto de extensão da UFRJ, criado por estudantes da UFRJ teve a primeira versão do seu aplicativo em 2016 como um sistema de caronas compartilhadas seguro e prático direcionado à comunidade acadêmica. Agora somos o Rede Caronaê, uma Rede que desenvolve soluções para mobilidades alternativas sustentáveis.'
  },
  {
    title: 'Qual é o objetivo do projeto?',
    content: 'Nossa maior preocupação é com as pessoas e o meio ambiente. Por isso, foi criado o Caronaê, a extensão que desenvolve uma alternativa inteligente e consciente para a mobilidade urbana. Compartilhando as viagens, podemos reduzir a quantidade de carros nas ruas e diminuir a emissão de CO2 na natureza, fazendo a nossa parte pelo meio ambiente. Além disso, o compartilhamento de caronas também incentiva o convívio social e a economia financeira para todos os usuários.'
  },
  {
    title: 'Quais são as frentes em que os membros do projeto atuam?',
    content: 'São Comunicação, Desenvolvimento e Dados.'
  },
  {
    title: 'Qual é o papel dos membros do projeto na frente de comunicação?',
    content: 'Já a equipe de comunicação se dedica a disseminar informações sobre o projeto e conscientizar a população sobre a importância das caronas para a sustentabilidade.'
  },
  {
    title: 'Qual é o papel dos membros do projeto na frente de desenvolvimento?',
    content: 'A equipe de desenvolvimento trabalha para garantir um aplicativo de qualidade e com uma experiência de usuário agradável.'
  },
  {
    title: 'Qual é o objetivo do projeto?',
    content: 'Nossa maior preocupação é com as pessoas e o meio ambiente. Por isso, foi criado o Caronaê, a extensão que desenvolve uma alternativa inteligente e consciente para a mobilidade urbana. Compartilhando as viagens, podemos reduzir a quantidade de carros nas ruas e diminuir a emissão de CO2 na natureza, fazendo a nossa parte pelo meio ambiente. Além disso, o compartilhamento de caronas também incentiva o convívio social e a economia financeira para todos os usuários.'
  },
  {
    title: 'Quais são as frentes em que os membros do projeto atuam?',
    content: 'São Comunicação, Desenvolvimento e Dados.'
  },
  {
    title: 'Qual é o papel dos membros do projeto na frente de comunicação?',
    content: 'Já a equipe de comunicação se dedica a disseminar informações sobre o projeto e conscientizar a população sobre a importância das caronas para a sustentabilidade.'
  },
  {
    title: 'Qual é o papel dos membros do projeto na frente de desenvolvimento?',
    content: 'A equipe de desenvolvimento trabalha para garantir um aplicativo de qualidade e com uma experiência de usuário agradável.'
  },
  {
    title: 'Qual é o papel dos membros do projeto na frente de dados?',
    content: 'Por fim, a equipe de dados é responsável por coletar e analisar informações relevantes para aprimorar o projeto e torná-lo cada vez mais eficiente.'
  },
  {
    title: 'Como posso me tornar um membro do projeto de extensão da Rede Caronaê?',
    content: ''
  },
  {
    title: 'Quais são os requisitos para ser um membro do projeto?',
    content: ''
  },
  {
    title: 'Como o projeto de extensão universitário do Caronaê contribui para a formação acadêmica dos membros?',
    content: ''
  },
  {
    title: 'Quais são as possibilidades de atuação dos membros do projeto após o término da extensão?',
    content: ''
  }
];

const dataAplicativo = [
  {
    title: 'Como funciona o aplicativo?',
    content: ''
  },
  {
    title: 'O Caronaê funciona em todas as cidades do Brasil?',
    content: ''
  },
  {
    title: 'Como faço para me cadastrar no Caronaê?',
    content: ''
  },
  {
    title: 'O Caronaê é seguro?',
    content: ''
  },
  {
    title: 'Como faço para encontrar uma carona?',
    content: ''
  },
  {
    title: 'Como faço para oferecer uma carona?',
    content: ''
  },
  {
    title: 'Como o pagamento funciona no Caronaê?',
    content: ''
  },
  {
    title: 'Como o passageiro entra em contato com o motorista?',
    content: ''
  },
  {
    title: 'O que devo fazer se um passageiro ou motorista não aparecer para a carona?',
    content: ''
  },
  {
    title: 'O que devo fazer se houver algum problema com a carona, como um acidente ou atraso?',
    content: ''
  },
  {
    title: 'Como posso entrar em contato com o suporte do Caronaê?',
    content: ''
  }
];

const dataDados = [
  {
    title: 'Como funciona o aplicativo?',
    content: ''
  },
  {
    title: 'O Caronaê funciona em todas as cidades do Brasil?',
    content: ''
  },
  {
    title: 'Como faço para me cadastrar no Caronaê?',
    content: ''
  },
  {
    title: 'O Caronaê é seguro?',
    content: ''
  }
];

const AcordeonProjetoDeExtensao = () => {
    return (
      <div className="accordion-container">
        <h1 className="sub-title">PROJETO DE EXTENSÃO</h1>
        {dataProjeto.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
        <h1 className="sub-title">APLICATIVO</h1>
        {dataAplicativo.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
        {dataDados.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    );
  };

  export default AcordeonProjetoDeExtensao;