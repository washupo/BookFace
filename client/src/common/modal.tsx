import { Icon } from '../components/Icon';
import { Layout } from '../components/layout/Layout';

interface ModalProps {
    //   isOpen: boolean;
    //   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    // className?: string;
}

export const Modal = ({ children }: ModalProps) => {

    return (
        <div className='fixed top-0 left-0'>
            <Layout background='brown'>
                <button onClick={() => handleClose()}>
                    <Icon name='close' size='small' fill='white' />
                </button>
                {children}
            </Layout>
        </div>
    );
};

