import type { Environment } from "./environment.model";

let environmentToExport: Environment = {
    name: 'MOCKS',
    production: false,
    apiBaseUrl: 'http://3.236.225.240:8080/silentauction'
};

export const environment = environmentToExport;