import { pgrme } from './secrets';

// ::urls
export const proxy = 'https://proxycall-gj5n6pnsva-uc.a.run.app?url=';
export const baseUrl = proxy + 'https://api.pagar.me/core/v5';

// ::vars
const currEnv = 'dev2';

// **************************************
// ******** DATABASE FIRESTORE **********
// **************************************

export const firestoreId = currEnv;

// **************************************
// **************************************

// ----------------------------
// -- SITEs FIRESTORE (hosting)
// ----------------------------
export const sites = {
  // --- Testes
  dev2: 'dev2-goodbike', // --- adm & app (deploy unificado)
};

// ----------------------
// ------------- PAGAR.ME
// ----------------------
export const secrets = { ...pgrme[currEnv] };
