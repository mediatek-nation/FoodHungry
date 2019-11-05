import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import LocalDining from '@material-ui/icons/LocalDining';
import LocationOn from '@material-ui/icons/LocationOn';
import Notifications from '@material-ui/icons/Notifications';
// core components/views for Admin layout
import DashboardPage from 'views/RestAdminViews/Dashboard/Dashboard.js';
import RestaurantProfile from 'views/RestAdminViews/RestaurantProfile/RestaurantProfile.js';
import FoodList from 'views/RestAdminViews/FoodList/FoodList.js';
import Typography from 'views/RestAdminViews/Typography/Typography.js';
import Icons from 'views/RestAdminViews/Icons/Icons.js';
import Maps from 'views/RestAdminViews/Maps/Maps.js';
import NotificationsPage from 'views/RestAdminViews/Notifications/Notifications.js';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    rtlName: 'لوحة القيادة',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin'
  },
  {
    path: '/upcomings',
    name: 'Upcoming Orders',
    rtlName: 'الرموز',
    icon: LocalDining,
    component: Icons,
    layout: '/admin'
  },
  {
    path: '/pasts',
    name: 'Past Orders',
    rtlName: 'الرموز',
    icon: 'restaurants',
    component: Icons,
    layout: '/admin'
  },

  {
    path: '/foods',
    name: 'Foods',
    rtlName: 'قائمة الجدول',
    icon: 'cake',
    component: FoodList,
    layout: '/admin'
  },
  {
    path: '/maps',
    name: 'Maps',
    rtlName: 'خرائط',
    icon: LocationOn,
    component: Maps,
    layout: '/admin'
  },
  {
    path: '/notifications',
    name: 'Notifications',
    rtlName: 'إخطارات',
    icon: Notifications,
    component: NotificationsPage,
    layout: '/admin'
  },
  {
    path: '/user',
    name: 'Restaurant Profile',
    rtlName: 'ملف تعريفي للمستخدم',
    icon: Person,
    component: RestaurantProfile,
    layout: '/admin'
  }
];

export default dashboardRoutes;
