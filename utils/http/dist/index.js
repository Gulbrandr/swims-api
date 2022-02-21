"use strict";
exports.__esModule = true;
exports.getHelper = void 0;
var axios_1 = require("axios");
var BASEURL = "https://my.api.mockaroo.com/";
var client = axios_1["default"].create({
    baseURL: BASEURL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    }
});
var server = axios_1["default"].create({
    baseURL: BASEURL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    }
});
exports.getHelper = function (_a) {
    var entity = _a.entity, param = _a.param;
    var url = "" + entity + (param === "all" ? "" : "/" + param) + "?key=5e5c5a80";
    if (typeof window === "undefined") {
        console.log("server");
        return server.get(url);
    }
    return client.get(url);
};
exports["default"] = { client: client, server: server, helper: exports.getHelper };
