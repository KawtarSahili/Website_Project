import React from 'react';

const UserDashboard = () => {
  // Tu peux récupérer le user dans le localStorage si besoin
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div style={{ padding: 20 }}>
      <h1>Bienvenue, {user?.fullName || 'Utilisateur'} !</h1>
      <p>Voici ton tableau de bord utilisateur.</p>
      <ul>
        <li>Email: {user?.email}</li>
        <li>Téléphone: {user?.phoneNumber}</li>
        <li>Rôle: {user?.role || 'USER'}</li>
      </ul>
      {/* Ajoute ici plus de fonctionnalités utilisateur */}
    </div>
  );
};

export default UserDashboard;
