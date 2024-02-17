import './CouponsContainer.css';
import React, { useEffect, useState } from 'react';
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail,
} from '@ionic/react';
import { signCoupon } from '../helpers/signCoupon';
import { getData, setData } from '../data/helpers/localStorageService';
import { DataKey } from '../data/const/localStorageConst';

interface UserProfileProps {

}

const changeName = (newName: string | number | null | undefined) => {
    if (!!newName) {
        setData(DataKey.Name, `${newName}`);
    }
}

const UserProfileContainer: React.FC<UserProfileProps> = () => {

    const [shares, setShares] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setShares(84);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again.'); // You might want to handle the error more gracefully
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>My name:</IonCardSubtitle>
                    <IonCardTitle>
                        <IonInput clearOnEdit={true} value={getData(DataKey.Name)} onIonBlur={(e) => changeName(e.target.value)}></IonInput>
                    </IonCardTitle>
                </IonCardHeader>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>My shares:</IonCardSubtitle>
                    <IonCardTitle>{shares}</IonCardTitle>
                </IonCardHeader>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>0x932890843298943298</IonCardTitle>
                    <IonInput label="Private key:" type='password' value='132123123132123123'></IonInput>
                </IonCardHeader>
            </IonCard>
        </>
    );
};

export default UserProfileContainer;
