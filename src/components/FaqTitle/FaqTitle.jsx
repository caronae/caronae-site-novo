import './styles.css';
import leaf from '../../assets/leaf_blue.png';
import mail from '../../assets/mail.png';
import jeep from '../../assets/Jeep.png';
import target from '../../assets/target.png';
import shield from '../../assets/shield.png';
import users from '../../assets/users_black.png';

function IconForm(props) {
  const {
    alt,
    src,
    width,
    height,
    size,
    margin,
    backgroundColor,
    shadow,
    left,
    right,
    top,
    bottom,
    rotation,
    padding,
    flip
  } = props;

  return (
    <img
      alt={alt}
      src={src}
      style={{
        position: 'relative',
        width: width? width : size,
        height: height? height : size,
        backgroundColor: backgroundColor,
        marginRight: margin,
        marginLeft: margin,
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        borderRadius: '200px',
        padding: padding,
        boxShadow: `14px 0 0 ${shadow}`,
        transform: flip? `rotate(${rotation}deg) rotatey(180deg)` : `rotate(${rotation}deg)`
      }}
    />
  );
}

const FAQTitle = () => {

  return (
    <div>
      <div className="title-section">
        <h1 className="title">Perguntas frequentes</h1>
        <p className="subtext">
          Tem alguma dúvida? Estamos aqui para ajudar.            
        </p>
      </div>
      <IconForm
        src={leaf}
        left="960px"
        top="-370px"
        padding="28px"
        size="115px"
        backgroundColor="#17B270"
      />
      <IconForm
        src={mail}
        left="1000px"
        top="-375px"
        padding="28px"
        size="140px"
        backgroundColor="#eb3d38"
      />
      <IconForm
        src={jeep}
        left="780px"
        top="-250px"
        rotation="10"
        widht="160px"
        height="80px"
        padding='20px 40px'
        backgroundColor="#ed8024"
        flip
      />
      <IconForm
        src={target}
        left="-390px"
        top="-390px"
        size="110px"
        padding="26px"
        backgroundColor="#eb72ac"
      />
      <IconForm
        src={shield}
        left="-630px"
        top="-350px"
        size="90px"
        padding="14px"
        backgroundColor="#2b388a"
      />
      <IconForm
        src={users}
        left="-640px"
        top="-270px"
        rotation="-10"
        widht="160px"
        height="80px"
        padding='22px 48px'
        backgroundColor="#6e361f"
      />
    </div>
  );
};

export default FAQTitle;
