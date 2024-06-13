import appleLogo from '../../assets/apple_logo.svg';
import iphoneFront from '../../assets/iphone_front.png';
import iphoneSide from '../../assets/iphone_side.png';
import jeepIcon from '../../assets/jeep-icon.svg';
import leafIcon from '../../assets/leaf_white.svg';
import peopleIcon from '../../assets/people_blue.svg';
import playStoreLogo from '../../assets/play_store_logo.svg';
import shieldIcon from '../../assets/shield_white.svg';
import windIcon from '../../assets/wind-icon.svg';
import { colors } from './colors';
import styles from './VaDeCaronae.module.css';

const URLCaronaeAppleAppStore = 'https://www.apple.com/app-store/';
const URLCaronaeGooglePlayStore = 'https://play.google.com/';

export default function VaDeCaronae () {
  return (
    <div className={ styles.vaDeCaronae }>
      <Headings />
      <BackgroundCircles />
      <Roads />
      <Icon src={ peopleIcon }
            backgroundColor={ colors.peopleIconBackground }
            imgSize="40px"
            width="140px"
            top="80px"
            left="750px" />
      <Icon src={ shieldIcon }
            backgroundColor={ colors.shieldIconBackground }
            imgSize="27px"
            top="400px"
            left="760px" />
      <Icon src={ leafIcon }
            backgroundColor={ colors.leafIconBackground }
            top="110px"
            left="1180px" />
      <IphoneFront />
      <IphoneSide />
      <DoubleIcon src={ [windIcon, jeepIcon] }
                  backgroundColor={ colors.jeepIconBackground }
                  width="180px"
                  top="460px"
                  left="1080px" />
    </div>
  );
}

const Headings = () => {
  return (
    <div className={ styles.heading }>
      <h2>Juntos vamos mais longe,</h2>
      <h1>Vá de Caronaê!</h1>
    </div>
  );
};

const BackgroundCircles = () => {
  return (
    <>
      <div className={ styles.circleOuter }>
        <div className={ styles.circleInner } />
      </div>
    </>
  );
};

const StoreButton = (props) => {
  return (
    <a className={ styles.storeButton } href={ props.href }>
      <img src={ props.storeLogo } />
      <div>
        <p className={ styles.buttonSmallText }>Disponível na</p>
        <p className={ styles.buttonLargeText }>{ props.storeName }</p>
      </div>
    </a>
  );
};

const Roads = () => {
  return (
    <div className={ styles.roads }>
      <VerticalRoad />
      <div style={{ display: 'flex', gap: '40px', position: 'relative', left: '-60px' }} >
        <StoreButton storeName="App Store" storeLogo={ appleLogo }
                     href={ URLCaronaeAppleAppStore } />
        <StoreButton storeName="Google Play" storeLogo={ playStoreLogo }
                     href={ URLCaronaeGooglePlayStore } />
      </div>
      <div style={{ position: 'relative', left: '-65px' }} >
        <HorizontalRoad />
      </div>
    </div>
  );
};

const VerticalRoad = () => {
  return (
    <div className={ styles.verticalRoad } >
      <div className={ styles.verticalDash } />
      <div className={ styles.verticalDash } />
      <div className={ styles.verticalRoadBackground } />
    </div>
  );
};

const HorizontalRoad = () => {
  return (
    <div className={ styles.horizontalRoad } >
      <div className={ styles.horizontalDash } />
      <div className={ styles.horizontalDash } />
      <div className={ styles.horizontalDash } />
      <div className={ styles.horizontalDash } />
    </div>
  );
};

const Icon = (props) => {
  return (
    <div style={{ position: 'absolute',
                  top: props.top,
                  left: props.left,
                  display: 'flex',
                  backgroundColor: props.backgroundColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '90px',
                  width: props.width,
                  minWidth: '90px',
                  borderRadius: '90px' }} >
      <img style={{ width: props.imgSize }} src={ props.src } />
    </div>
  );
};

const DoubleIcon = (props) => {
  return (
    <div style={{ position: 'absolute',
                  display: 'flex',
                  top: props.top,
                  left: props.left,
                  backgroundColor: props.backgroundColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '90px',
                  width: 'fit-content',
                  minWidth: props.width,
                  padding: '0 40px',
                  borderRadius: '90px' }} >
      <img style={{ width: props.imgSize }} src={ props.src[0] } />
      <img style={{ width: props.imgSize }} src={ props.src[1] } />
    </div>
  );
};

const IphoneFront = () => {
  return (
    <div className={ styles.iphoneFront } >
      <img src={ iphoneFront } />
    </div>
  );
};

const IphoneSide = () => {
  return (
    <div className={ styles.iphoneSide } >
      <img src={ iphoneSide } />
    </div>
  );
};

