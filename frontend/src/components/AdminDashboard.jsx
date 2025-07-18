import React from 'react';

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div style={{ padding: 20 }}>
      <h1>Bienvenue, Admin {user?.fullName || ''} !</h1>
      <p>Voici le tableau de bord administratif.</p>
      {/* Ajoute ici des fonctionnalités spécifiques aux admins */}
      <ul>
        <li>Gestion des utilisateurs</li>
        <li>Statistiques</li>
        <li>Paramètres système</li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
