// const frontendUrl = 'http://localhost:4200/';
// const backendUrl = 'http://localhost:8080/';
// const loginUrl = 'http://localhost:4200/login';

const frontendUrl = 'https://tube.islandguide.tours/';
const backendUrl = 'https://api.islandguide.tours/';
const loginUrl = 'https://islandguide.tours/login';
const wasabiUrl = 'https://freedom-social.s3.us-east-1.wasabisys.com/'
const logoutUrl = 'https://islandguide.tours/logout';



export const environment = {
  production: true,
  frontendUrl: frontendUrl,
  backendUrl: backendUrl,
  loginUrl: loginUrl,
  apiUrl: `${backendUrl}api/v1/`,
  domain: '.islandguide.tours',
  wasabiUrl: wasabiUrl,
  socketUrl: `${backendUrl}`,
  conferenceUrl: 'https://meet.facetime.tube/',
  logoutUrl: logoutUrl

};

