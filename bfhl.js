const app = require("../app");
const serverless = require("serverless-http");

// Export a serverless function for Vercel
module.exports = serverless(app);
