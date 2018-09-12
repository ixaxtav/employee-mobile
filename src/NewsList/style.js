import { StyleSheet } from 'react-native'

import { PITAZO_GRAY } from '../constants/colors'

export default StyleSheet.create({
  firstLoadError: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
  },
  lastDateUpdated: {
    backgroundColor: PITAZO_GRAY,
    fontSize: 14,
    paddingBottom: 2,
    paddingTop: 2,
    textAlign: 'center',
  },
})
