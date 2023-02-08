/**
 * Constants
 */
const DEV = "DEV";
const PRODUCTION = "PRODUCTION";
const TESTING = "TESTING";

const devBaseURL = "https://dummyjson.com";
const productionBaseURL = "https://dummyjson.com";
const testingBaseURL = "https://dummyjson.com";

const devBasePath = "";
const productionBasePath = "";
const testingBasePath = "";

const devApiTimeOverAllowance = 50 * 1000; // 50 seconds timeout
const productionApiTimeOverAllowance = 50 * 1000;
const testingApiTimeOverAllowance = 50 * 1000;

// Change this value to test different environment
export const ENVIRONMENT = DEV;

export const getBuildConfig = () => {
    switch (ENVIRONMENT) {
        case DEV:
            return {
                baseUrl: devBaseURL,
                basePath: devBasePath,
                apiTimeOverAllowance: devApiTimeOverAllowance,
            }
        case PRODUCTION:
            return {
                baseUrl: productionBaseURL,
                basePath: productionBasePath,
                apiTimeOverAllowance: productionApiTimeOverAllowance,
            }
        case TESTING:
            return {
                baseUrl: testingBaseURL,
                basePath: testingBasePath,
                apiTimeOverAllowance: testingApiTimeOverAllowance,
            }
        default:
            throw new Error("Unsupported Environment");
    }
}