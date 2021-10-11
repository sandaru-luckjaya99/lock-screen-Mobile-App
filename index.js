/**
 * @format
 */

import {AppRegistry} from 'react-native';
import app from './app/Root';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => app);
