import type { Environment } from "./environment.model";

let environmentToExport: Environment = {
    name: 'MOCKS',
    production: false,
    apiBaseUrl: 'http://localhost:8080/silentauction'
};

export const environment = environmentToExport;