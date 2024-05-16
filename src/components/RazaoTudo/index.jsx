import RazaoTudoLeafIcon from '../../assets/razao-tudo-leaf-icon.png';
import RazaoTudoPicture from '../../assets/razao-tudo-picture.png';
import './styles.css';

export default function RazaoTudo() {
    const numbersBoxData = Object.entries({
        'Membros': '19',
        'Caronas': '5K',
        'Usuários': '+6K'
    });

    const textParagraphs = [
        'Nossa maior preocupação é com as pessoas e o meio ambiente. \
        Por isso, foi criado o Caronaê, a extensão que desenvolve uma alternativa inteligente e consciente para a mobilidade urbana.',
        'Compartilhando as viagens, podemos reduzir a quantidade de \
        carros nas ruas e diminuir a emissão de CO2 na natureza, fazendo a nossa parte pelo meio ambiente.',
        'Além disso, o compartilhamento de caronas também incentiva o convívio social e a economia financeira para todos os usuários.'
    ];

  return (
    <div className="razaoTudoMainContainer">
        <div className="left">
            <div className="pictureBox">
                <img src={RazaoTudoPicture} alt="A razão de tudo - imagem 1" aria-description="Amigos se abraçando" />
                <img src={RazaoTudoLeafIcon} alt="A razão de tudo - imagem 2" aria-description="Ícone de uma folha" />
            </div>
            <div className="numbersBox">
                <h2 className="title">Números</h2>
                <span className="dataBox">
                    {
                        numbersBoxData.map((item, index) => {
                            return (
                            <span className="main" key={index}>
                                <h3 className="number">{item[1]}</h3>
                                <h4 className="title">{item[0]}</h4>
                            </span>
                            );
                        })
                    }
                </span>
            </div>
        </div>
        <div className="right">
            <div className="title">
                <h1>A Razão de tudo</h1>
            </div>
            <div className="text">
                {
                    textParagraphs.map((item, index) => {
                        return (
                            <p className="textParagraph" key={index}>{item}</p>
                        );
                    })
                }
            </div>
        </div>
    </div>
  );
}
