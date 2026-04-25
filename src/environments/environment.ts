import type { Environment } from "./environment.model";

let environmentToExport: Environment = {
    name: 'MOCKS',
    production: false,
    apiBaseUrl: 'https://api.crmdynamics.click/silentauction'
};

export const environment = environmentToExport;