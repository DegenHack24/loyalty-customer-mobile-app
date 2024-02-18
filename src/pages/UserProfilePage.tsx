import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import CouponsContainer from '../components/CouponsContainer';
import ExploreContainer from '../components/ExploreContainer';
import QRCodeContainer from '../components/QRCodeContainer';
import UserProfileContainer from '../components/UserProfileContainer';
import './Page.css';

const UserProfilePage: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [isOpen, setIsOpen] = useState(false);
    const [signedCoupon, setSignedCoupon] = useState("");
    const pageName = "My profile";


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
                    <QRCodeContainer isOpen={isOpen} setIsOpen={setIsOpen} signedCoupon={signedCoupon} />
                    <IonToolbar>
                        <IonTitle size="large">{pageName}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <UserProfileContainer />
            </IonContent>
        </IonPage>
    );
};

export default UserProfilePage;
