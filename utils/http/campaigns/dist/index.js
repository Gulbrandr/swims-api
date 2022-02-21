"use strict";
exports.__esModule = true;
var http_1 = require("utils/http/");
var campaignsHTTP = {
    get: function (param) {
        return http_1["default"].helper({
            entity: "campaigns",
            action: "get",
            param: param
        });
    },
    list: function () {
        return http_1["default"].helper({
            entity: "campaigns",
            action: "get",
            param: ""
        });
    }
};
exports["default"] = campaignsHTTP;
