import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps183900Navigator from '../features/Maps183900/navigator';
import Additem183899Navigator from '../features/Additem183899/navigator';
import Maps183895Navigator from '../features/Maps183895/navigator';
import UserProfile183891Navigator from '../features/UserProfile183891/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps183900: { screen: Maps183900Navigator },
Additem183899: { screen: Additem183899Navigator },
Maps183895: { screen: Maps183895Navigator },
UserProfile183891: { screen: UserProfile183891Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
