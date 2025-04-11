import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from '../finalApp/main.js';

// Import our custom CSS
import '../scss/styles.scss';
// import '../finalApp/components/sdiebar/sidebars.css';

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap';

// import JavaScript plugins individually as needed to keep bundle sizes down
// import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';

console.log('111111111111');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
