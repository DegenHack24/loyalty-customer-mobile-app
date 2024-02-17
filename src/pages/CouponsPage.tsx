import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import CouponsContainer from '../components/CouponsContainer';
import ExploreContainer from '../components/ExploreContainer';
import QRCodeContainer from '../components/QRCodeContainer';
import './Page.css';

const CouponsPage: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [isOpen, setIsOpen] = useState(false);
    const [qrCodeMessage, setQRCodeMessage] = useState("");
    const pageName = "Coupons";

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{pageName}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <QRCodeContainer isOpen={isOpen} setIsOpen={setIsOpen} qrCodeMessage={qrCodeMessage}/>
                    <IonToolbar>
                        <IonTitle size="large">{pageName}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <CouponsContainer setIsOpen={setIsOpen} setQRCodeMessage={setQRCodeMessage}/>
            </IonContent>
        </IonPage>
    );
};

export default CouponsPage;
