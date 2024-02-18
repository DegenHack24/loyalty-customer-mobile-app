import "./CouponsContainer.css";
import React, { useEffect, useState } from "react";
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
} from "@ionic/react";
import { signCoupon } from "../helpers/signCoupon";
import { createCouponQRMessage } from "../helpers/createCouponMessage";
import { getCoupons } from "../services/loyaltyService";

interface ContainerProps {
  setIsOpen: (state: boolean) => void;
  setQRCodeMessage: (text: string) => void;
}

interface Coupon {
  couponCode: number;
  name: string;
  image: string;
  description: string;
}

const CouponsContainer: React.FC<ContainerProps> = ({
  setIsOpen,
  setQRCodeMessage,
}) => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [error, setError] = useState<string | null>(null);
  console.log(coupons, "coupons");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCoupons(); // Fetch data from the API using getCoupons function
        setCoupons(data.activeCoupons); // Set the fetched data to the state
        console.log(data.activeCoupons, "data");
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
      }
    };

    fetchData();
  }, []);

  return (
    <IonCard>
      <IonCardContent>
        <IonList>
          {coupons.length > 0 &&
            coupons.map((coupon, index) => (
              <IonItem key={coupon.couponCode}>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src={coupon.image} />
                </IonThumbnail>
                <IonLabel>{coupon.name}</IonLabel>
                <IonButton
                  fill="clear"
                  onClick={() => {
                    setIsOpen(true);
                    signCoupon(`${coupon.couponCode}`).then((value) => {
                      setQRCodeMessage(
                        createCouponQRMessage(
                          coupon.couponCode,
                          `${coupon.couponCode}`,
                          value
                        )
                      );
                    });
                  }}
                >
                  Redeem
                </IonButton>
              </IonItem>
            ))}
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default CouponsContainer;
