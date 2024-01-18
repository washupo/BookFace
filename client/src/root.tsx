import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom'

interface OutletProps {
  openModal?: () => void;
  closeModal?: () => void;
}

export const CustomOutlet: React.FC<OutletProps> = ({ openModal, closeModal  }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Ajuster le comportement de défilement en fonction de l'état de la modal
  useEffect(() => {
    if (isModalOpen) {
      // Si la modal est ouverte, désactivez le défilement de la page
      document.body.style.overflow = 'hidden';
    } else {
      // Sinon, réactivez le défilement
      document.body.style.overflow = 'auto';
    }

    // Nettoyer l'effet lorsque le composant est démonté ou lorsque l'emplacement change
    return () => {
      document.body.style.overflow = 'auto';
    };

  }, [isModalOpen, location.pathname]);

  //Fonction pour ouvrir la modal
  function handleOpenModal() {
    setIsModalOpen(true);
    if (openModal) {
      openModal();
    }
  }

  //Fonction pour fermer la modal
  function handleCloseModal() {
    setIsModalOpen(false);
    if (closeModal) {
      closeModal();
    }
  }

  return (
    <>
      <Outlet 
      openModal={handleOpenModal} 
      closeModal={handleCloseModal} 
      />
    </>
  )
}
