import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import Icon from 'react-native-vector-icons/EvilIcons';

const TabNavigator = createBottomTabNavigator(
  {
    People: PeopleList,
    Add: AddPerson,
    Company: CompanyList,
  },
  {
    initialRouteName: 'People',
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: 'lightblue',
      },
    },
  },
);
export default createAppContainer(TabNavigator);
