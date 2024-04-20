const colors = {
  background1: 'rgb(43, 56, 138)',
  background2: 'rgb(50, 64, 153)',
  background3: 'rgb(62, 75, 154',
  text: 'rgb(254, 254, 254)',
  highlight: 'rgb(255, 255, 255)',
  shadow: 'rgb(23, 23, 23)',
  peopleIconBackground: 'rgb(235, 114, 172)',
  shieldIconBackground: 'rgb(110, 54, 31)',
  leafIconBackground: 'rgb(23, 178, 112)',
  jeepIconBackground: 'rgb(237, 128, 36)'
};

const styles = {

  vaDeCaronae: {
    position: 'relative',
    overflow: 'hidden',
    marginTop: '20px',
    width: '1370px',
    height: '640px',
    borderRadius: '20px',
    backgroundColor: colors.background1
  },

  heading: {
    position: 'absolute',
    top: '230px',
    left: '65px'
  },

  h1: {
    fontFamily: 'Karla, sans-serif',
    fontWeight: '700',
    color: colors.text,
    fontSize: '60px'
  },

  h2: {
    fontFamily: 'Karla, sans-serif',
    fontWeight: '700',
    color: colors.text,
    fontSize: '32px'
  },

  circleOuter: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '-30px',
    left: '650px',
    width: '700px',
    height: '700px',
    borderRadius: '50%',
    backgroundColor: colors.background2
  },

  circleInner: {
    position: 'relative',
    display: 'flex',
    width: '560px',
    height: '560px',
    borderRadius: '50%',
    backgroundColor: colors.background3
  },

  storeButton: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.shadow,
    width: '145px',
    height: '50px',
    borderRadius: '5px'
  },

  buttonSmallText: {
    margin: '0px',
    padding: '0px',
    lineHeight: '100%',
    fontFamily: 'Karla, sans-serif',
    fontSize: '10px',
    fontWeight: '700',
    color: colors.text
  },

  buttonLargeText: {
    margin: '0px',
    padding: '0px',
    lineHeight: '100%',
    letterSpacing: '-0.5px',
    fontFamily: 'Karla, sans-serif',
    fontSize: '16px',
    fontWeight: '700',
    color: colors.text
  },

  roads: {
    position: 'absolute',
    top: '425px',
    left: '60px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'row'
  },

  verticalRoad: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '35px',
    backgroundColor: colors.shadow,
    width: '80px',
    height: '250px',
    borderRadius: '20px 0 0 0'
  },

  verticalDash: {
    position: 'relative',
    backgroundColor: colors.highlight,
    left: '17px',
    top: '60px',
    height: '50px',
    width: '6px',
    borderRadius: '6px'
  },

  verticalRoadBackground: {
    position: 'absolute',
    backgroundColor: colors.background1,
    top: '50px',
    left: '40px',
    borderRadius: '20px 0 0 0',
    width: '40px',
    height: '200px'
  },

  horizontalRoad: {
    position: 'relative',
    display: 'flex',
    gap: '35px',
    backgroundColor: colors.shadow,
    height: '50px',
    width: '350px',
    borderRadius: '0 20px 20px 0'
  },

  horizontalDash: {
    position: 'relative',
    backgroundColor: colors.highlight,
    left: '17px',
    top: '22px',
    height: '6px',
    width: '50px',
    borderRadius: '6px'
  },

  iphoneFront: {
    position: 'absolute',
    left: '825px',
    top: '120px'
  },

  iphoneSide: {
    position: 'absolute',
    left: '1050px',
    top: '160px'
  }
};

export { colors, styles };
