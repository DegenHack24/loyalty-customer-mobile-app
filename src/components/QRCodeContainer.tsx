import "./QRCodeContainer.css";
import React, { useEffect, useState } from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
} from "@ionic/react";
import { QRCodeSVG } from "qrcode.react";

interface ContainerProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  qrCodeMessage: string;
}

const QRCodeContainer: React.FC<ContainerProps> = ({
  isOpen,
  setIsOpen,
  qrCodeMessage,
}) => {
  useEffect(() => {});
  return (
    <IonContent className="ion-padding">
      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Modal</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div className="qr-code">
            <QRCodeSVG value={qrCodeMessage} height={300} width={300} />
          </div>
        </IonContent>
      </IonModal>
    </IonContent>
  );
};

export default QRCodeContainer;
