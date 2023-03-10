import { IonContent, IonPage, IonButton } from '@ionic/react';

import { AppLauncher } from '@capacitor/app-launcher';

const Home: React.FC = () => {
  const checkCanOpenUrl = async (myurl:any) => {
    const { value } = await AppLauncher.canOpenUrl({ url: myurl });

    console.log('Can open url: ', value);
  };
  const openPage = async (myurl:any) => {
    await AppLauncher.openUrl({ url: myurl });
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonButton onClick={() => openPage('com.google.android.apps.translate')}>Google Translate</IonButton>
        <IonButton onClick={() => openPage('com.naver.labs.translator')}>Papago</IonButton>
        <IonButton onClick={() => openPage('com.cyanogenmod.trebuchet')}>Home</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
