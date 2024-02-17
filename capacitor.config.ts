import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'loyalty customer mobile app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
