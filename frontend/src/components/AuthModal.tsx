import React from 'react';
import { useAuth } from '../context/AuthContext';
import AuthForm from './AuthForm';

const AuthModal: React.FC = () => {
  const { showAuthModal, closeAuthModal } = useAuth();

  if (!showAuthModal) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex justify-center items-center p-4">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        <AuthForm onClose={closeAuthModal} />
      </div>
    </div>
  );
};

export default AuthModal;