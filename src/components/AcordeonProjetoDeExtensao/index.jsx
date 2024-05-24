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

const data = [
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
  }
];

const AcordeonProjetoDeExtensao = () => {
    return (
      <div className="accordion-container">
        <h1 className="title">PROJETO DE EXTENSÃO</h1>
        {data.map((item, index) => (
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