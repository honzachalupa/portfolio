const config = require("./config.js");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: config.url,
    generateRobotsTxt: true,
};
