const appPassword = process.argv[2];
const settings = { user: "demo", password: appPassword };
console.log("Starting with settings: " + JSON.stringify(settings));
