import './style.css';

import leaf from '../../assets/leaf_white.svg';
import link from '../../assets/Link_Chain.svg';
import sustentabilidade from '../../assets/svg_sustentabilidade.svg';
import Chip from '../Chip';
import  equipe  from './equipe';

const dadosChip = [
    {
        name: 'Gestão',
        backgroundColor: '#ED8024',
        width: '213px',
        textColor: 'black'
    },
    {
        name: 'Design',
        backgroundColor: '#EB3D38',
        width: '285px',
        textColor: 'black'
    },
    {
        name: 'Dados',
        backgroundColor: '#17B270',
        width: '206px',
        textColor: 'black'
    },
    {
        name: 'Desenvolvimento',
        backgroundColor: '#2B388A',
        width: '319px',
        textColor: '#FEFEFE'
    }
];

function EquipeCaronae () {
  let curriculo = 'Currículo Lattes';
    return (

        <div>
            <h1 className="title">Equipe Caronaê</h1>
            <div className="cargos">
                {
                    dadosChip.map(chip =>
                        <div key={chip.name}>
                            <Chip
                                textContent={chip.name}
                                backgroundColor={chip.backgroundColor}
                                background={chip.backgroundColor}
                                width={chip.width}
                                color={chip.textColor}
                                height="100px"
                                imgSrc={chip.name === 'Desenvolvimento' ? leaf : sustentabilidade}
                                imgSize="25px"
                            />

                            <div className="profiles">
                                {
                                    equipe
                                        .filter(profile => profile.funcao === chip.name)
                                        .map(profile =>
                                            <div className="profile" key={profile}>
                                                <div className="profileData">
                                                    <img style={{

                                                        backgroundColor: 'gray',
                                                        borderRadius: '50%',
                                                        width: '135px',
                                                        height: '135px',
                                                        textAlign: 'center',
                                                        justifyContent: 'center',
                                                        borderStyle: 'solid',
                                                        borderColor: `${chip.backgroundColor}`,
                                                        borderWidth: '8px',
                                                        padding: '0px',
                                                        margin: '20px'
                                                    }}
                                                        src={profile.foto}
                                                        alt="foto-usuario"
                                                    />
                                                    <h3>{profile.nome}</h3>
                                                    <p>{profile.cargo} | {profile.funcao}</p>
                                                    <a href={profile.linkedin === null ? profile.curriculo : [profile.linkedin, curriculo = 'Linkedin']}>{curriculo}<img className="link_chain" src={link}/> </a>
                                                </div>
                                            </div>
                                        )
                                }
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
}
export default EquipeCaronae;