"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsContent = void 0;
const react_1 = __importDefault(require("react"));
const Highlight_1 = require("../../../Highlight/Highlight");
const JobLogs_1 = require("./JobLogs/JobLogs");
const DetailsContent = ({ selectedTab, job: { stacktrace, data, returnValue, opts, failedReason }, actions, }) => {
    switch (selectedTab) {
        case 'Data':
            return (react_1.default.createElement(Highlight_1.Highlight, { language: "json" }, JSON.stringify({ data, returnValue }, null, 2)));
        case 'Options':
            return (react_1.default.createElement(Highlight_1.Highlight, { language: "json" }, JSON.stringify(opts, null, 2)));
        case 'Error':
            return (react_1.default.createElement(react_1.default.Fragment, null, stacktrace.length === 0 ? (react_1.default.createElement("div", { className: "error" }, !!failedReason ? failedReason : 'NA')) : (react_1.default.createElement(Highlight_1.Highlight, { language: "stacktrace", key: "stacktrace" }, stacktrace.join('\n')))));
        case 'Logs':
            return react_1.default.createElement(JobLogs_1.JobLogs, { actions: actions });
        default:
            return null;
    }
};
exports.DetailsContent = DetailsContent;
//# sourceMappingURL=DetailsContent.js.map