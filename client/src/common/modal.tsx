import { Icon } from '../components/Icon';
import { Layout } from '../components/layout/Layout';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({ isOpen, setIsOpen, children, className }: ModalProps) => {
  const handleCloseModal = (e: any) => {
    // Check if the click happened directly on the parent div, not its children
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  if (!isOpen) {
    document.body.style.overflow = 'auto';
    return null;
  }

  document.body.style.overflow = 'hidden';

  return (
    <div onClick={handleCloseModal} className='fixed top-0 left-0'>
        <Layout background='brown'>
        <button>
          <Icon name='close' size='small' fill='white'/>
        </button>
        {children}
        </Layout>
    </div>
  );
};

