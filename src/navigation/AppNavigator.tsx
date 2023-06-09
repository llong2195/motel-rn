import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {AuthInitial} from '../entities/ReducersEntities';
import {User} from '../entities/User';
import {useAppDispatch, useAppSelector} from '../stores';
import {AuthenStackScreen, DrawerStackScreen} from './NavigationConfig';

interface Props {
  loggedIn?: boolean;
  settings?: any;
  loginInfo?: AuthInitial;
  userInfo?: User;
}
const AppNavigator = (props: Props) => {
  const {auth} = useAppSelector(state => state);
  const Stack = createStackNavigator();
  const dispatch = useAppDispatch();

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: 'screen',
        headerShown: false,
      }}
    >
      {auth.loggedIn ? ( //&& !loginInfo.isLoading
        <Stack.Screen
          key="startupStack"
          name="startupStack"
          component={DrawerStackScreen}
          // initialParams={{ isNew: loginInfo.isNew }}
        />
      ) : (
        <Stack.Screen
          key="authStack"
          name="authStack"
          component={AuthenStackScreen}
          // initialParams={{ test: 'test', maintenance: startup.isMaintenance }}
        />
      )}
    </Stack.Navigator>
  );
};
// const mapStateToProps = (state: RootState) => ({
//     loginInfo: state.auth,
//     settings: state.settings,
//     userInfo: state.userInfo,
//     loggedIn: state.userInfo ? state.userInfo.isLoggedIn : false,
//   })

//   const mapDispatchToProps = {
//   }

//   export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
export default AppNavigator;
