import {createHotContext as __vite__createHotContext} from "/@vite/client";
import.meta.hot = __vite__createHotContext("/src/layouts/parts/Footer.tsx");
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12b611e7";
const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import*as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
    if (!window.$RefreshReg$) {
        throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong.");
    }
    prevRefreshReg = window.$RefreshReg$;
    prevRefreshSig = window.$RefreshSig$;
    window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/layouts/parts/Footer.tsx");
    window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import {Link} from "/node_modules/.vite/deps/react-router.js?v=12b611e7";
const services = [{
    label: "Quantity Surveying",
    href: "/services"
}, {
    label: "Project Management",
    href: "/services"
}, {
    label: "Building Consultancy",
    href: "/services"
}, {
    label: "Contract Administration",
    href: "/services"
}, {
    label: "Dilapidations",
    href: "/services"
}, {
    label: "Condition Surveys",
    href: "/services"
}];
const quickLinks = [{
    label: "Home",
    href: "/"
}, {
    label: "Services",
    href: "/services"
}, {
    label: "About Us",
    href: "/about"
}, {
    label: "Contact",
    href: "/contact"
}];
export default function Footer() {
    return /* @__PURE__ */
    jsxDEV("footer", {
        className: "bg-primary text-primary-foreground",
        "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
        "data-dev-line": 35,
        "data-dev-id": "42358d",
        children: [/* @__PURE__ */
        jsxDEV("div", {
            className: "h-px bg-accent opacity-40",
            "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
            "data-dev-line": 37,
            "data-dev-id": "166321"
        }, void 0, false, {
            fileName: "/app/src/layouts/parts/Footer.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this), /* @__PURE__ */
        jsxDEV("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8 py-16",
            "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
            "data-dev-line": 39,
            "data-dev-id": "166322",
            children: /* @__PURE__ */
            jsxDEV("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",
                "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                "data-dev-line": 40,
                "data-dev-id": "3dac76",
                children: [/* @__PURE__ */
                jsxDEV("div", {
                    className: "lg:col-span-1",
                    "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                    "data-dev-line": 42,
                    "data-dev-id": "13a4ca",
                    children: [/* @__PURE__ */
                    jsxDEV(Link, {
                        to: "/",
                        className: "inline-block mb-6",
                        "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                        "data-dev-line": 43,
                        "data-dev-id": "920e89",
                        children: /* @__PURE__ */
                        jsxDEV("img", {
                            src: "/airo-assets/images/logo/horizontal",
                            alt: "CLM Consulting",
                            className: "block h-auto max-h-10 w-auto max-w-full object-contain",
                            "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                            "data-dev-line": 44,
                            "data-dev-id": "987557"
                        }, void 0, false, {
                            fileName: "/app/src/layouts/parts/Footer.tsx",
                            lineNumber: 63,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "/app/src/layouts/parts/Footer.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this), /* @__PURE__ */
                    jsxDEV("p", {
                        className: "text-sm leading-relaxed opacity-70 mb-6",
                        "data-dev-editable": "text",
                        "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                        "data-dev-line": 46,
                        "data-dev-id": "b0da6b",
                        children: "Independent building consultancy and quantity surveying services across Gloucestershire and the wider South West."
                    }, void 0, false, {
                        fileName: "/app/src/layouts/parts/Footer.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this), /* @__PURE__ */
                    jsxDEV("p", {
                        className: "text-xs opacity-50 font-medium tracking-wide uppercase",
                        "data-dev-editable": "text",
                        "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                        "data-dev-line": 49,
                        "data-dev-id": "b0da6c",
                        children: "Gloucestershire, United Kingdom"
                    }, void 0, false, {
                        fileName: "/app/src/layouts/parts/Footer.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this)]
                }, void 0, true, {
                    fileName: "/app/src/layouts/parts/Footer.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this), /* @__PURE__ */
                jsxDEV("div", {
                    "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                    "data-dev-line": 55,
                    "data-dev-id": "13a4cb",
                    children: [/* @__PURE__ */
                    jsxDEV("h3", {
                        className: "clm-footer-heading",
                        "data-dev-editable": "text",
                        "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                        "data-dev-line": 56,
                        "data-dev-id": "1d2ff7",
                        children: "Services"
                    }, void 0, false, {
                        fileName: "/app/src/layouts/parts/Footer.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this), /* @__PURE__ */
                    jsxDEV("ul", {
                        className: "space-y-2",
                        "data-dev-dynamic": "true",
                        "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                        "data-dev-line": 57,
                        "data-dev-id": "25435d",
                        children: services.map( (s) => /* @__PURE__ */
                        jsxDEV("li", {
                            "data-dev-conformable-array": "services",
                            "data-dev-conformable-page": "src/layouts/parts/Footer.tsx",
                            "data-dev-conformable-id": "L2C6",
                            "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                            "data-dev-line": 58,
                            "data-dev-id": "75d103",
                            children: /* @__PURE__ */
                            jsxDEV(Link, {
                                to: s.href,
                                className: "clm-footer-link",
                                "data-dev-dynamic": "true",
                                "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                                "data-dev-line": 59,
                                "data-dev-id": "f320a2",
                                children: s.label
                            }, void 0, false, {
                                fileName: "/app/src/layouts/parts/Footer.tsx",
                                lineNumber: 78,
                                columnNumber: 19
                            }, this)
                        }, s.label, false, {
                            fileName: "/app/src/layouts/parts/Footer.tsx",
                            lineNumber: 77,
                            columnNumber: 36
                        }, this))
                    }, void 0, false, {
                        fileName: "/app/src/layouts/parts/Footer.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this)]
                }, void 0, true, {
                    fileName: "/app/src/layouts/parts/Footer.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this), /* @__PURE__ */
                jsxDEV("div", {
                    "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                    "data-dev-line": 67,
                    "data-dev-id": "13a4cc",
                    children: [/* @__PURE__ */
                    jsxDEV("h3", {
                        className: "clm-footer-heading",
                        "data-dev-editable": "text",
                        "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                        "data-dev-line": 68,
                        "data-dev-id": "725898",
                        children: "Company"
                    }, void 0, false, {
                        fileName: "/app/src/layouts/parts/Footer.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this), /* @__PURE__ */
                    jsxDEV("ul", {
                        className: "space-y-2",
                        "data-dev-dynamic": "true",
                        "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                        "data-dev-line": 69,
                        "data-dev-id": "7a6bfe",
                        children: quickLinks.map( (l) => /* @__PURE__ */
                        jsxDEV("li", {
                            "data-dev-conformable-array": "quickLinks",
                            "data-dev-conformable-page": "src/layouts/parts/Footer.tsx",
                            "data-dev-conformable-id": "L21C6",
                            "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                            "data-dev-line": 70,
                            "data-dev-id": "d28644",
                            children: /* @__PURE__ */
                            jsxDEV(Link, {
                                to: l.href,
                                className: "clm-footer-link",
                                "data-dev-dynamic": "true",
                                "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                                "data-dev-line": 71,
                                "data-dev-id": "0942c3",
                                children: l.label
                            }, void 0, false, {
                                fileName: "/app/src/layouts/parts/Footer.tsx",
                                lineNumber: 90,
                                columnNumber: 19
                            }, this)
                        }, l.label, false, {
                            fileName: "/app/src/layouts/parts/Footer.tsx",
                            lineNumber: 89,
                            columnNumber: 38
                        }, this))
                    }, void 0, false, {
                        fileName: "/app/src/layouts/parts/Footer.tsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this)]
                }, void 0, true, {
                    fileName: "/app/src/layouts/parts/Footer.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this), /* @__PURE__ */
                jsxDEV("div", {
                    "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                    "data-dev-line": 79,
                    "data-dev-id": "13a4cd",
                    children: [/* @__PURE__ */
                    jsxDEV("h3", {
                        className: "clm-footer-heading",
                        "data-dev-editable": "text",
                        "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                        "data-dev-line": 80,
                        "data-dev-id": "c78139",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "/app/src/layouts/parts/Footer.tsx",
                        lineNumber: 99,
                        columnNumber: 13
                    }, this), /* @__PURE__ */
                    jsxDEV("div", {
                        className: "space-y-3 text-sm opacity-70",
                        "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                        "data-dev-line": 81,
                        "data-dev-id": "8e4261",
                        children: [/* @__PURE__ */
                        jsxDEV("p", {
                            className: "leading-relaxed",
                            "data-dev-editable": "text",
                            "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                            "data-dev-line": 82,
                            "data-dev-id": "de6b82",
                            children: ["Gloucestershire", /* @__PURE__ */
                            jsxDEV("br", {
                                "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                                "data-dev-line": 83,
                                "data-dev-id": "7182c7"
                            }, void 0, false, {
                                fileName: "/app/src/layouts/parts/Footer.tsx",
                                lineNumber: 102,
                                columnNumber: 32
                            }, this), "United Kingdom"]
                        }, void 0, true, {
                            fileName: "/app/src/layouts/parts/Footer.tsx",
                            lineNumber: 101,
                            columnNumber: 15
                        }, this), /* @__PURE__ */
                        jsxDEV("p", {
                            "data-dev-editable": "text",
                            "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                            "data-dev-line": 86,
                            "data-dev-id": "de6b83",
                            children: /* @__PURE__ */
                            jsxDEV("a", {
                                href: "mailto:info@clmconsulting.co.uk",
                                className: "clm-footer-link",
                                "data-dev-editable": "text",
                                "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                                "data-dev-line": 87,
                                "data-dev-id": "8215d5",
                                children: "info@clmconsulting.co.uk"
                            }, void 0, false, {
                                fileName: "/app/src/layouts/parts/Footer.tsx",
                                lineNumber: 106,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/src/layouts/parts/Footer.tsx",
                            lineNumber: 105,
                            columnNumber: 15
                        }, this)]
                    }, void 0, true, {
                        fileName: "/app/src/layouts/parts/Footer.tsx",
                        lineNumber: 100,
                        columnNumber: 13
                    }, this), /* @__PURE__ */
                    jsxDEV("div", {
                        className: "mt-6",
                        "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                        "data-dev-line": 92,
                        "data-dev-id": "8e4262",
                        children: /* @__PURE__ */
                        jsxDEV(Link, {
                            to: "/contact",
                            className: "clm-footer-cta",
                            "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                            "data-dev-line": 93,
                            "data-dev-id": "707121",
                            children: "Enquire Now"
                        }, void 0, false, {
                            fileName: "/app/src/layouts/parts/Footer.tsx",
                            lineNumber: 112,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "/app/src/layouts/parts/Footer.tsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, this)]
                }, void 0, true, {
                    fileName: "/app/src/layouts/parts/Footer.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this)]
            }, void 0, true, {
                fileName: "/app/src/layouts/parts/Footer.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/app/src/layouts/parts/Footer.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this), /* @__PURE__ */
        jsxDEV("div", {
            className: "border-t border-white/10",
            "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
            "data-dev-line": 102,
            "data-dev-id": "166323",
            children: /* @__PURE__ */
            jsxDEV("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3",
                "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                "data-dev-line": 103,
                "data-dev-id": "37e937",
                children: [/* @__PURE__ */
                jsxDEV("p", {
                    className: "text-xs opacity-50",
                    "data-dev-dynamic": "true",
                    "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                    "data-dev-line": 104,
                    "data-dev-id": "0b8d58",
                    children: ["© ", (/* @__PURE__ */
                    new Date()).getFullYear(), " CLM Consulting. All rights reserved."]
                }, void 0, true, {
                    fileName: "/app/src/layouts/parts/Footer.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this), /* @__PURE__ */
                jsxDEV("p", {
                    className: "text-xs opacity-40",
                    "data-dev-editable": "text",
                    "data-dev-file": "/app/src/layouts/parts/Footer.tsx",
                    "data-dev-line": 107,
                    "data-dev-id": "0b8d59",
                    children: "Building Consultancy & Quantity Surveying"
                }, void 0, false, {
                    fileName: "/app/src/layouts/parts/Footer.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, this)]
            }, void 0, true, {
                fileName: "/app/src/layouts/parts/Footer.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/app/src/layouts/parts/Footer.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, this)]
    }, void 0, true, {
        fileName: "/app/src/layouts/parts/Footer.tsx",
        lineNumber: 54,
        columnNumber: 10
    }, this);
}
_c = Footer;
var _c;
$RefreshReg$(_c, "Footer");
if (import.meta.hot && !inWebWorker) {
    window.$RefreshReg$ = prevRefreshReg;
    window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
    RefreshRuntime.__hmr_import(import.meta.url).then( (currentExports) => {
        RefreshRuntime.registerExportsForReactRefresh("/app/src/layouts/parts/Footer.tsx", currentExports);
        import.meta.hot.accept( (nextExports) => {
            if (!nextExports)
                return;
            const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/layouts/parts/Footer.tsx", currentExports, nextExports);
            if (invalidateMessage)
                import.meta.hot.invalidate(invalidateMessage);
        }
        );
    }
    );
}

//# sourceMappingURL=data:application/json;base64,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LDJMQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUE7QUFBQSxTQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FPQSxLQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FTQTtBQUFBLE9BNUVHO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E2RUw7QUFDSjtBQUFDQyxLQS9FdUJOO0FBQU0sSUFBQU07QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiTGluayIsInNlcnZpY2VzIiwibGFiZWwiLCJocmVmIiwicXVpY2tMaW5rcyIsIkZvb3RlciIsIm1hcCIsInMiLCJsIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRm9vdGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuY29uc3Qgc2VydmljZXMgPSBbe1xuICBsYWJlbDogJ1F1YW50aXR5IFN1cnZleWluZycsXG4gIGhyZWY6ICcvc2VydmljZXMnXG59LCB7XG4gIGxhYmVsOiAnUHJvamVjdCBNYW5hZ2VtZW50JyxcbiAgaHJlZjogJy9zZXJ2aWNlcydcbn0sIHtcbiAgbGFiZWw6ICdCdWlsZGluZyBDb25zdWx0YW5jeScsXG4gIGhyZWY6ICcvc2VydmljZXMnXG59LCB7XG4gIGxhYmVsOiAnQ29udHJhY3QgQWRtaW5pc3RyYXRpb24nLFxuICBocmVmOiAnL3NlcnZpY2VzJ1xufSwge1xuICBsYWJlbDogJ0RpbGFwaWRhdGlvbnMnLFxuICBocmVmOiAnL3NlcnZpY2VzJ1xufSwge1xuICBsYWJlbDogJ0NvbmRpdGlvbiBTdXJ2ZXlzJyxcbiAgaHJlZjogJy9zZXJ2aWNlcydcbn1dO1xuY29uc3QgcXVpY2tMaW5rcyA9IFt7XG4gIGxhYmVsOiAnSG9tZScsXG4gIGhyZWY6ICcvJ1xufSwge1xuICBsYWJlbDogJ1NlcnZpY2VzJyxcbiAgaHJlZjogJy9zZXJ2aWNlcydcbn0sIHtcbiAgbGFiZWw6ICdBYm91dCBVcycsXG4gIGhyZWY6ICcvYWJvdXQnXG59LCB7XG4gIGxhYmVsOiAnQ29udGFjdCcsXG4gIGhyZWY6ICcvY29udGFjdCdcbn1dO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gPGZvb3RlciBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kXCI+XG4gICAgICB7LyogR29sZCBkaXZpZGVyICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXB4IGJnLWFjY2VudCBvcGFjaXR5LTQwXCIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC02IGxnOnB4LTggcHktMTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC0xMlwiPlxuICAgICAgICAgIHsvKiBCcmFuZCBjb2x1bW4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbWItNlwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9haXJvLWFzc2V0cy9pbWFnZXMvbG9nby9ob3Jpem9udGFsXCIgYWx0PVwiQ0xNIENvbnN1bHRpbmdcIiBjbGFzc05hbWU9XCJibG9jayBoLWF1dG8gbWF4LWgtMTAgdy1hdXRvIG1heC13LWZ1bGwgb2JqZWN0LWNvbnRhaW5cIiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWQgb3BhY2l0eS03MCBtYi02XCI+XG4gICAgICAgICAgICAgIEluZGVwZW5kZW50IGJ1aWxkaW5nIGNvbnN1bHRhbmN5IGFuZCBxdWFudGl0eSBzdXJ2ZXlpbmcgc2VydmljZXMgYWNyb3NzIEdsb3VjZXN0ZXJzaGlyZSBhbmQgdGhlIHdpZGVyIFNvdXRoIFdlc3QuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG9wYWNpdHktNTAgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZSB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgR2xvdWNlc3RlcnNoaXJlLCBVbml0ZWQgS2luZ2RvbVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFNlcnZpY2VzICovfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2xtLWZvb3Rlci1oZWFkaW5nXCI+U2VydmljZXM8L2gzPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICB7c2VydmljZXMubWFwKHMgPT4gPGxpIGtleT17cy5sYWJlbH0+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz17cy5ocmVmfSBjbGFzc05hbWU9XCJjbG0tZm9vdGVyLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAge3MubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT4pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBRdWljayBsaW5rcyAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNsbS1mb290ZXItaGVhZGluZ1wiPkNvbXBhbnk8L2gzPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICB7cXVpY2tMaW5rcy5tYXAobCA9PiA8bGkga2V5PXtsLmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtsLmhyZWZ9IGNsYXNzTmFtZT1cImNsbS1mb290ZXItbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICB7bC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPil9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIENvbnRhY3QgKi99XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjbG0tZm9vdGVyLWhlYWRpbmdcIj5Db250YWN0PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIHRleHQtc20gb3BhY2l0eS03MFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICBHbG91Y2VzdGVyc2hpcmU8YnIgLz5cbiAgICAgICAgICAgICAgICBVbml0ZWQgS2luZ2RvbVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86aW5mb0BjbG1jb25zdWx0aW5nLmNvLnVrXCIgY2xhc3NOYW1lPVwiY2xtLWZvb3Rlci1saW5rXCI+XG4gICAgICAgICAgICAgICAgICBpbmZvQGNsbWNvbnN1bHRpbmcuY28udWtcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJjbG0tZm9vdGVyLWN0YVwiPlxuICAgICAgICAgICAgICAgIEVucXVpcmUgTm93XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQm90dG9tIGJhciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNiBsZzpweC04IHB5LTUgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBvcGFjaXR5LTUwXCI+XG4gICAgICAgICAgICAmY29weTsge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQ0xNIENvbnN1bHRpbmcuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgb3BhY2l0eS00MFwiPlxuICAgICAgICAgICAgQnVpbGRpbmcgQ29uc3VsdGFuY3kgJmFtcDsgUXVhbnRpdHkgU3VydmV5aW5nXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPjtcbn1cbiJdLCJmaWxlIjoiL2FwcC9zcmMvbGF5b3V0cy9wYXJ0cy9Gb290ZXIudHN4In0=
