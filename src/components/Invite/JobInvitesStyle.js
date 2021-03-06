import { StyleSheet } from 'react-native';
import {
  BLUE_MAIN,
  VIOLET_MAIN,
  GRAY_MAIN,
  RED_MAIN,
  BLACK_MAIN,
} from '../../shared/colorPalette';

const inviteStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCustom: {
    backgroundColor: BLUE_MAIN,
  },
  badge: {
    backgroundColor: RED_MAIN,
    position: 'absolute',
    right: 20,
    top: 5,
  },
  titleHeader: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
  },
  buttomApply: {
    backgroundColor: BLUE_MAIN,
  },
  buttomReject: {
    backgroundColor: VIOLET_MAIN,
  },
  viewListItem: {
    paddingLeft: 20,
    paddingRight: 75,
  },
  viewDataOffers: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 15,
    paddingRight: 15,
  },
  textOne: {
    color: VIOLET_MAIN,
    fontSize: 12,
    textAlign: 'left',
  },
  textTwo: {
    color: GRAY_MAIN,
    fontSize: 12,
    textAlign: 'left',
  },
  textThree: {
    color: BLUE_MAIN,
    fontSize: 12,
    textAlign: 'left',
  },
  textRed: {
    color: RED_MAIN,
    fontSize: 12,
    textAlign: 'left',
  },
  textBlack: {
    color: BLACK_MAIN,
    fontSize: 12,
    textAlign: 'left',
  },
  viewTitleInfo: {
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
});

export { inviteStyles };
export default inviteStyles;
