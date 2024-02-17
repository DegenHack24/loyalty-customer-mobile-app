import './CouponsContainer.css';
import React, { useEffect, useState } from 'react';
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail,
} from '@ionic/react';
import { signCoupon } from '../helpers/signCoupon';
import { createCouponQRMessage } from '../helpers/createCouponMessage';

interface ContainerProps {
    setIsOpen: (state: boolean) => void,
    setQRCodeMessage: (text: string) => void

}

interface Coupon {
    couponId: number,
    name: string,
    image: string,
    description: string,
}


const CouponsContainer: React.FC<ContainerProps> = ({ setIsOpen, setQRCodeMessage }) => {
    const [coupons, setCoupons] = useState<Coupon[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                setCoupons([
                    {
                        couponId: 1,
                        name: "Koszulka adidas domowa",
                        image: "https://sklep.legia.com/wp-content/uploads/2023/01/1K2022_Sklep_1-min.png",
                        description: "Znika dla udziałowców"
                    },
                    {
                        couponId: 2,
                        name: "Bordowa bluza Fundacja Legii",
                        image: "https://sklep.legia.com/wp-content/uploads/2024/02/kwadrat3-scaled.jpg",
                        description: "Znika dla udziałowców"
                    },
                    {
                        couponId: 3,
                        name: "Legia Warszawa vs. Puszcza Niepołomice",
                        image: "https://robostaticcontent.s3.amazonaws.com/Content/Legia/Images/Ticket_srennab/3530_medium_pl-PL?nocache=8b20fdf469d841ee8c295c346d740b01",
                        description: "Znika dla udziałowców"
                    }
                ]);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again.'); // You might want to handle the error more gracefully
            }
        };

        fetchData();
    }, []);
    return (
        <IonCard>
            <IonCardContent>
                <IonList>
                    {coupons.map((coupon, index) => {
                        return (
                            <IonItem>
                                <IonThumbnail slot="start">
                                    <img alt="Silhouette of mountains" src={coupon.image} />
                                </IonThumbnail>
                                <IonLabel>{coupon.name}</IonLabel>
                                <IonButton fill="clear" onClick={() => {
                                    setIsOpen(true);
                                    signCoupon(`${coupon.couponId}`).then(value => {
                                        setQRCodeMessage(createCouponQRMessage(coupon.couponId, `${coupon.couponId}`, value));
                                    });
                                }}>Redeem</IonButton>
                            </IonItem>
                        );
                    })}
                </IonList>
            </IonCardContent>
        </IonCard>
    );
};

export default CouponsContainer;
