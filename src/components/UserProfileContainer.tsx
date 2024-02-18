import "./CouponsContainer.css";
import React, {useEffect, useState} from "react";
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonProgressBar,} from "@ionic/react";
import {getData, setData} from "../data/helpers/localStorageService";
import {DataKey} from "../data/const/localStorageConst";
import {getShares} from "../services/loyaltyService";

interface UserProfileProps {
}

const changeName = (newName: string | number | null | undefined) => {
    if (!!newName) {
        setData(DataKey.Name, `${newName}`);
    }
};

const UserProfileContainer: React.FC<UserProfileProps> = () => {
    const [shares, setShares] = useState<any>(0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            console.log(shares);
            try {
                const data = await getShares(); // Call the getShares function
                setShares(data); // Assuming that the returned data has a 'shares' property
                console.log("Shares data:", data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Error fetching data. Please try again.");
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>
                        <IonInput
                            clearOnEdit={true}
                            value={getData(DataKey.Name)}
                            onIonBlur={(e) => changeName(e.target.value)}
                        ></IonInput>
                    </IonCardTitle>
                    <IonCardSubtitle>My name:</IonCardSubtitle>
                </IonCardHeader>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>
                        {shares?.numberOfShares
                            ? shares.numberOfShares
                            : <IonProgressBar style={{"margin-top": "5px"}} type="indeterminate"></IonProgressBar>}
                    </IonCardTitle>
                    <IonCardSubtitle>My shares: </IonCardSubtitle>
                </IonCardHeader>
            </IonCard>
            <IonCard>
                <IonCardHeader>

                    <IonCardTitle
                        style={{"font-size": "25px", "text-align": "center"}}>0x932890843298943298</IonCardTitle>
                    <IonInput
                        label="Private key:"
                        type="password"
                        value="132123123132123123"
                    ></IonInput>
                </IonCardHeader>
            </IonCard>
        </>
    );
};

export default UserProfileContainer;
