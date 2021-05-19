"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusMenu = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const constants_1 = require("../constants");
const StatusMenu_module_css_1 = __importDefault(require("./StatusMenu.module.css"));
const StatusMenu = ({ queue }) => {
    const { url } = react_router_dom_1.useRouteMatch();
    return (react_1.default.createElement("div", { className: StatusMenu_module_css_1.default.statusMenu }, constants_1.STATUS_LIST.map((status) => {
        const isLatest = status === constants_1.STATUSES.latest;
        const displayStatus = status.toLocaleUpperCase();
        return (react_1.default.createElement(react_router_dom_1.NavLink, { to: `${url}${isLatest ? '' : `?status=${status}`}`, activeClassName: StatusMenu_module_css_1.default.active, isActive: (_path, { search }) => {
                const query = new URLSearchParams(search);
                return (query.get('status') === status ||
                    (isLatest && query.get('status') === null));
            }, key: `${queue.name}-${status}` },
            react_1.default.createElement("span", { title: displayStatus }, displayStatus),
            queue.counts[status] > 0 && (react_1.default.createElement("span", { className: StatusMenu_module_css_1.default.badge }, queue.counts[status]))));
    })));
};
exports.StatusMenu = StatusMenu;
//# sourceMappingURL=StatusMenu.js.map