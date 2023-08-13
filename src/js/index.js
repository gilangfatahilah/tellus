// Import our custom CSS
import '../scss/main.scss';

// Import javascript file as needed
import * as bootstrap from 'bootstrap';

// Import Component
import './components/index';
import Dashboard from './pages/dashboard';
import Add from './pages/add';

const routes = {
  '/': Dashboard,
  '/add.html': Add,
};

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', async () => {
  const route = detectRoute();
  route.init();
});
