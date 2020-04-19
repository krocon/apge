export const environment = {
  production: true,
  env: 'prod',
  version: '{BUILD_VERSION}',
  showVersionIndicator: false,
  routerTracing: false,

  loginRoute: '/anmelden',
  logoutRoute: '/abmelden',
  welcomeRoute: '/willkommen',

  authServiceConfig: {
    mock: false,
    loginUrl: 'assets/mock-data/auth/login.json',
    logoutUrl: 'assets/mock-data/auth/logout.json',
    logoutMock: true,
  },

  contentServiceConifg: {
    contentConfigUrl: 'assets/mock-data/footer/data.json'
  }
};
