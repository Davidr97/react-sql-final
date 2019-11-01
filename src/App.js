import React from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Wizard from "./components/wizard/wizard";
import SideNavigation from "./components/Navigation/sideNavigation";

fetch('https://localhost:44383/api/orders/secondQueryPayments',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({Query:'SELECT contactLastName,contactFirstName,country,checkNumber,paymentDate,amount FROM CustomersPayments'})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));

function App() {
  return (
      <div className="flexible-content">
          <SideNavigation/>
        <main id="content" className="p-5">
            <Wizard/>
        </main>
      </div>
  );
}

export default App;
