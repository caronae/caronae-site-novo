import React from 'react';
import historicoImage2 from '../../assets/historico2015.png';
import historicoImage3 from '../../assets/historico2016.png';
import historicoImage4 from '../../assets/historico2017.png';
import historicoImage5 from '../../assets/historico2018.png';
import historicoImage6 from '../../assets/historico2019.png';
import historicoImage7 from '../../assets/historico2020.png';
import historicoImage8 from '../../assets/historico2021.png';
import historicoImage9 from '../../assets/historico2022.png';
import historicoImage10 from '../../assets/historico2023.png';
import historicoImage11 from '../../assets/historico2024.png';
import historicoImage12 from '../../assets/historico2025.png';
import historicoImage1 from '../../assets/historicoDefault.png';
import footerImage2 from '../../assets/Year2015.png';
import footerImage3 from '../../assets/Year2016.png';
import footerImage4 from '../../assets/Year2017.png';
import footerImage5 from '../../assets/Year2018.png';
import footerImage6 from '../../assets/Year2019.png';
import footerImage7 from '../../assets/Year2020.png';
import footerImage8 from '../../assets/Year2021.png';
import footerImage9 from '../../assets/Year2022.png';
import footerImage10 from '../../assets/Year2023.png';
import footerImage11 from '../../assets/Year2024.png';
import footerImage12 from '../../assets/Year2025.png';
import footerImage1 from '../../assets/YearDefault.png';
import Carousel from '../Carousel';

const Historico = () => {
  const items = [
    {
      title: 'Histórico',
      subtitle: 'CARONAÊ',
      image: historicoImage1,
      description: 'Saiba mais sobre a nossa história, ano a ano. O aplicativo Caronaê esteve no ar de Abril de 2016 a Março de 2020.',
      footerImage: footerImage1
    },
    {
      title: '2015',
      subtitle: 'IMPLEMENTAÇÃO',
      image: historicoImage2,
      description: 'Implementação do Aplicativo para o “Concurso Fundo Verde de Soluções Sustentáveis”. Desenvolvimento inicial do sistema pela empresa júnior da engenharia.',
      footerImage: footerImage2
    },
    {
      title: '2016',
      subtitle: 'LANÇAMENTO',
      image: historicoImage3,
      description: 'Lançamento do Aplicativo.',
      footerImage: footerImage3
    },
    {
      title: '2017',
      subtitle: 'REDE CARONAÊ E CÓDIGO ABERTO',
      image: historicoImage4,
      description: `Nos tornamos um Projeto de Extensão da UFRJ, criando a Rede Caronaê: Diversas instituições já se mostraram interessadas em participar da Rede Caronaê, criando ainda mais possibilidades.

      Pensando no envolvimento da comunidade, e por acreditar na colaboração entre as pessoas, o Caronaê abriu o código fonte para que todos possam contribuir com a construção dessa ideia. Licença garantindo liberdades referentes à execução, estudo, redistribuição e aperfeiçoamento.`,
      footerImage: footerImage4
    },
    {
      title: '2018',
      subtitle: 'EXPANSÃO: PRAIA VERMELHA',
      image: historicoImage5,
      description: 'Expansão para o Campus Praia Vermelha.',
      footerImage: footerImage5
    },
    {
      title: '2019',
      subtitle: 'EXPANSÃO: MACAÉ',
      image: historicoImage6,
      description: 'Expansão para o Campus Macaé.',
      footerImage: footerImage6
    },
    {
      title: '2020',
      subtitle: 'PANDEMIA: RETIRADA DO APP DO AR',
      image: historicoImage7,
      description: 'Retirada do aplicativo do ar devido à pandemia.',
      footerImage: footerImage7
    },
    {
      title: '2021',
      subtitle: 'REESTRUTURAÇÃO',
      image: historicoImage8,
      description: `Reestruturação do projeto e da equipe:
      • Parceria iniciada com o Instituto Brasileiro de Transporte Sustentável (IBTS);
      • Participação do Caronaê no Plano de Gestão Logística Sustentável PLS-UFRJ;
      • Aprovação no edital de Projetos Especiais do Parque Tecnológico da UFRJ;
      • A entrada de alunos/as extensionistas na equipe.`,
      footerImage: footerImage8
    },
    {
      title: '2022',
      subtitle: 'DESENVOLVIMENTO DA NOVA VERSÃO',
      image: historicoImage9,
      description: 'Reconstrução do aplicativo original com melhorias em usabilidade e segurança. Tentativa de adequação do app para empresas do Parque Tecnológico.',
      footerImage: footerImage9
    },
    {
      title: '2023',
      subtitle: 'ARTIGO SOBRE EMISSÕES',
      image: historicoImage10,
      description: 'Lançamento do artigo sobre a contribuição do Caronaê na redução da emissão de carbono na atmosfera, utilizando dados da época em que o app estava operante (2016-2020).',
      footerImage: footerImage10
    },
    {
      title: '2024',
      subtitle: 'RELANÇAMENTO',
      image: historicoImage11,
      description: 'Relançamento do aplicativo atualizado, repensado e redesenhado, retomada da nossa presença digital nas redes sociais e lançamento do novo site do Caronaê.',
      footerImage: footerImage11
    },
    {
      title: '2025',
      subtitle: 'MELHORIAS: DASHBOARD',
      image: historicoImage12,
      description: `Em breve!
      Uma nova ferramenta para analisar, calcular e documentar todos os dados sobre emissões de carbono e outras informações importantes para entendermos o impacto e o papel do Caronaê na comunidade UFRJ e na sociedade.`,
      footerImage: footerImage12
    }
  ];

  return (
    <div>
      <Carousel items={items} />
    </div>
  );
};

export default Historico;