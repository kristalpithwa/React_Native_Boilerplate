import {Dimensions} from 'react-native';
import {name as appName} from '../../app.json';
import {showAlert} from '@src/Functions/Alerts';

export const commonConstant = {
  // Screen Width And Height
  appName: appName,
  scrWidth: Dimensions.get('screen').width,
  scrHeight: Dimensions.get('screen').height,
};

export const asyncStorageKeys = {
  UserDetails: 'UserDetails',
  LanguageCode: 'LanguageCode',
  HapticFeedback: 'HapticFeedback',
};

export const apiResponse = {
  success: 200,
  fail: 500,
};

export function errorHandle(response) {
  if (response && response.data && response.data.message) {
    showAlert(response.data.message);
  } else {
    showAlert('Please try again');
  }
}

export default {
  errorHandle,
  apiResponse,
  commonConstant,
  asyncStorageKeys,
};
