import {createHotContext as __vite__createHotContext} from "/@vite/client";
import.meta.hot = __vite__createHotContext("/src/layouts/parts/Header.tsx");
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
    window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/layouts/parts/Header.tsx");
    window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=12b611e7";
const useState = __vite__cjsImport3_react["useState"];
const useEffect = __vite__cjsImport3_react["useEffect"];
import {Link, useLocation} from "/node_modules/.vite/deps/react-router.js?v=12b611e7";
const navLinks = [{
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
export default function Header() {
    _s();
    const [menuOpen,setMenuOpen] = useState(false);
    const [scrolled,setScrolled] = useState(false);
    const location = useLocation();
    useEffect( () => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }
    , []);
    useEffect( () => {
        setMenuOpen(false);
    }
    , [location.pathname]);
    return /* @__PURE__ */
    jsxDEV("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200",
        style: {
            boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.10)" : "0 1px 0 rgba(0,0,0,0.06)",
            transition: "box-shadow 0.3s ease"
        },
        "data-dev-dynamic": "true",
        "data-dev-file": "/app/src/layouts/parts/Header.tsx",
        "data-dev-line": 28,
        "data-dev-id": "d07c01",
        children: [/* @__PURE__ */
        jsxDEV("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8",
            "data-dev-file": "/app/src/layouts/parts/Header.tsx",
            "data-dev-line": 32,
            "data-dev-id": "24b095",
            children: /* @__PURE__ */
            jsxDEV("div", {
                className: "flex items-center justify-between h-24",
                "data-dev-file": "/app/src/layouts/parts/Header.tsx",
                "data-dev-line": 33,
                "data-dev-id": "7b0429",
                children: [/* @__PURE__ */
                jsxDEV(Link, {
                    to: "/",
                    className: "flex items-center shrink-0",
                    "data-dev-file": "/app/src/layouts/parts/Header.tsx",
                    "data-dev-line": 35,
                    "data-dev-id": "868d08",
                    children: /* @__PURE__ */
                    jsxDEV("img", {
                        src: "/airo-assets/images/logo/horizontal",
                        alt: "CLM Consulting",
                        className: "block h-auto max-h-16 md:max-h-20 w-auto max-w-[220px] object-contain",
                        "data-dev-file": "/app/src/layouts/parts/Header.tsx",
                        "data-dev-line": 36,
                        "data-dev-id": "979716"
                    }, void 0, false, {
                        fileName: "/app/src/layouts/parts/Header.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "/app/src/layouts/parts/Header.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this), /* @__PURE__ */
                jsxDEV("nav", {
                    "aria-label": "Main navigation",
                    className: "hidden md:flex items-center gap-8",
                    "data-dev-dynamic": "true",
                    "data-dev-file": "/app/src/layouts/parts/Header.tsx",
                    "data-dev-line": 40,
                    "data-dev-id": "5f48bf",
                    children: [navLinks.map( (link) => {
                        const isActive = location.pathname === link.href;
                        return /* @__PURE__ */
                        jsxDEV(Link, {
                            to: link.href,
                            className: "clm-nav-link",
                            "data-active": isActive ? "true" : "false",
                            style: {
                                textDecoration: "none"
                            },
                            "data-dev-conformable-array": "navLinks",
                            "data-dev-conformable-page": "src/layouts/parts/Header.tsx",
                            "data-dev-conformable-id": "L3C6",
                            "data-dev-dynamic": "true",
                            "data-dev-file": "/app/src/layouts/parts/Header.tsx",
                            "data-dev-line": 43,
                            "data-dev-id": "090cde",
                            children: link.label
                        }, link.href, false, {
                            fileName: "/app/src/layouts/parts/Header.tsx",
                            lineNumber: 62,
                            columnNumber: 20
                        }, this);
                    }
                    ), /* @__PURE__ */
                    jsxDEV(Link, {
                        to: "/contact",
                        className: "clm-cta-btn",
                        style: {
                            textDecoration: "none"
                        },
                        "data-dev-file": "/app/src/layouts/parts/Header.tsx",
                        "data-dev-line": 49,
                        "data-dev-id": "090cdf",
                        children: "Get in Touch"
                    }, void 0, false, {
                        fileName: "/app/src/layouts/parts/Header.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this)]
                }, void 0, true, {
                    fileName: "/app/src/layouts/parts/Header.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, this), /* @__PURE__ */
                jsxDEV("button", {
                    className: "md:hidden flex flex-col gap-1.5 p-2",
                    onClick: () => setMenuOpen(!menuOpen),
                    "aria-label": "Toggle navigation menu",
                    "aria-expanded": menuOpen,
                    "data-dev-editable": "text",
                    "data-dev-file": "/app/src/layouts/parts/Header.tsx",
                    "data-dev-line": 57,
                    "data-dev-id": "8d9cf6",
                    children: [/* @__PURE__ */
                    jsxDEV("span", {
                        className: "block w-6 h-0.5 bg-primary transition-transform duration-200",
                        style: {
                            transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none"
                        },
                        "data-dev-editable": "text",
                        "data-dev-file": "/app/src/layouts/parts/Header.tsx",
                        "data-dev-line": 58,
                        "data-dev-id": "e66519"
                    }, void 0, false, {
                        fileName: "/app/src/layouts/parts/Header.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this), /* @__PURE__ */
                    jsxDEV("span", {
                        className: "block w-6 h-0.5 bg-primary transition-opacity duration-200",
                        style: {
                            opacity: menuOpen ? 0 : 1
                        },
                        "data-dev-editable": "text",
                        "data-dev-file": "/app/src/layouts/parts/Header.tsx",
                        "data-dev-line": 61,
                        "data-dev-id": "e6651a"
                    }, void 0, false, {
                        fileName: "/app/src/layouts/parts/Header.tsx",
                        lineNumber: 80,
                        columnNumber: 13
                    }, this), /* @__PURE__ */
                    jsxDEV("span", {
                        className: "block w-6 h-0.5 bg-primary transition-transform duration-200",
                        style: {
                            transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none"
                        },
                        "data-dev-editable": "text",
                        "data-dev-file": "/app/src/layouts/parts/Header.tsx",
                        "data-dev-line": 64,
                        "data-dev-id": "e6651b"
                    }, void 0, false, {
                        fileName: "/app/src/layouts/parts/Header.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this)]
                }, void 0, true, {
                    fileName: "/app/src/layouts/parts/Header.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this)]
            }, void 0, true, {
                fileName: "/app/src/layouts/parts/Header.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/app/src/layouts/parts/Header.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this), menuOpen && /* @__PURE__ */
        jsxDEV("div", {
            className: "md:hidden bg-white border-t border-gray-200 shadow-md",
            "data-dev-file": "/app/src/layouts/parts/Header.tsx",
            "data-dev-line": 72,
            "data-dev-id": "24b096",
            children: /* @__PURE__ */
            jsxDEV("nav", {
                "aria-label": "Mobile navigation",
                className: "flex flex-col px-6 py-4 gap-1",
                "data-dev-dynamic": "true",
                "data-dev-file": "/app/src/layouts/parts/Header.tsx",
                "data-dev-line": 73,
                "data-dev-id": "25d2ec",
                children: navLinks.map( (link) => /* @__PURE__ */
                jsxDEV(Link, {
                    to: link.href,
                    className: "py-2 text-sm font-semibold text-primary hover:text-accent transition-colors",
                    "data-active": location.pathname === link.href ? "true" : "false",
                    style: {
                        textDecoration: "none"
                    },
                    "data-dev-conformable-array": "navLinks",
                    "data-dev-conformable-page": "src/layouts/parts/Header.tsx",
                    "data-dev-conformable-id": "L3C6",
                    "data-dev-dynamic": "true",
                    "data-dev-file": "/app/src/layouts/parts/Header.tsx",
                    "data-dev-line": 74,
                    "data-dev-id": "62c26b",
                    children: link.label
                }, link.href, false, {
                    fileName: "/app/src/layouts/parts/Header.tsx",
                    lineNumber: 93,
                    columnNumber: 37
                }, this))
            }, void 0, false, {
                fileName: "/app/src/layouts/parts/Header.tsx",
                lineNumber: 92,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "/app/src/layouts/parts/Header.tsx",
            lineNumber: 91,
            columnNumber: 20
        }, this)]
    }, void 0, true, {
        fileName: "/app/src/layouts/parts/Header.tsx",
        lineNumber: 47,
        columnNumber: 10
    }, this);
}
_s(Header, "wIyP7BVf0XWRNZqnqZCeFChPPfc=", false, function() {
    return [useLocation];
});
_c = Header;
var _c;
$RefreshReg$(_c, "Header");
if (import.meta.hot && !inWebWorker) {
    window.$RefreshReg$ = prevRefreshReg;
    window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
    RefreshRuntime.__hmr_import(import.meta.url).then( (currentExports) => {
        RefreshRuntime.registerExportsForReactRefresh("/app/src/layouts/parts/Header.tsx", currentExports);
        import.meta.hot.accept( (nextExports) => {
            if (!nextExports)
                return;
            const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/layouts/parts/Header.tsx", currentExports, nextExports);
            if (invalidateMessage)
                import.meta.hot.invalidate(invalidateMessage);
        }
        );
    }
    );
}

//# sourceMappingURL=data:application/json;base64,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QUFPO0FBQUEsVUFDdEZpQixXQUFXakIsV0FBVyxvQ0FBb0M7QUFBQSxRQUM1RCxHQUFFLG1JQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBLFdBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVVBO0FBQUEsU0FsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQW1DQSxLQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBcUNBO0FBQUEsSUFHQ0EsWUFBWSx1QkFBQyxTQUFJLFdBQVUseURBQXVELG9HQUMvRSxpQ0FBQyxTQUFJLGNBQVcscUJBQW9CLFdBQVUsaUNBQStCLGdJQUMxRUwsbUJBQVNrQixJQUFJLENBQUFDLFNBQVEsdUJBQUMsUUFBcUIsSUFBSUEsS0FBS2pCLE1BQU0sV0FBVSwrRUFBOEUsZUFBYU8sU0FBU00sYUFBYUksS0FBS2pCLE9BQU8sU0FBUyxTQUFTLE9BQU87QUFBQSxNQUM3Tm1CLGdCQUFnQjtBQUFBLElBQ2xCLEdBQUUsMFFBQ09GLGVBQUtsQixTQUh1QmtCLEtBQUtqQixNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSXBCLENBQU8sS0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTUEsS0FQUztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBUVg7QUFBQSxPQXBEQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBcURMO0FBQ0o7QUFBQ0UsR0FsRXVCRCxRQUFNO0FBQUEsVUFHWEosV0FBVztBQUFBO0FBQUEsS0FITkk7QUFBTSxJQUFBcUI7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwidXNlTG9jYXRpb24iLCJuYXZMaW5rcyIsImxhYmVsIiwiaHJlZiIsIkhlYWRlciIsIl9zIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInNjcm9sbGVkIiwic2V0U2Nyb2xsZWQiLCJsb2NhdGlvbiIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBhdGhuYW1lIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsIm1hcCIsImxpbmsiLCJpc0FjdGl2ZSIsInRleHREZWNvcmF0aW9uIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkhlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuY29uc3QgbmF2TGlua3MgPSBbe1xuICBsYWJlbDogJ0hvbWUnLFxuICBocmVmOiAnLydcbn0sIHtcbiAgbGFiZWw6ICdTZXJ2aWNlcycsXG4gIGhyZWY6ICcvc2VydmljZXMnXG59LCB7XG4gIGxhYmVsOiAnQWJvdXQgVXMnLFxuICBocmVmOiAnL2Fib3V0J1xufSwge1xuICBsYWJlbDogJ0NvbnRhY3QnLFxuICBocmVmOiAnL2NvbnRhY3QnXG59XTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4gc2V0U2Nyb2xsZWQod2luZG93LnNjcm9sbFkgPiAyMCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TWVudU9wZW4oZmFsc2UpO1xuICB9LCBbbG9jYXRpb24ucGF0aG5hbWVdKTtcbiAgcmV0dXJuIDxoZWFkZXIgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei01MCBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIiBzdHlsZT17e1xuICAgIGJveFNoYWRvdzogc2Nyb2xsZWQgPyAnMCAycHggMTZweCByZ2JhKDAsMCwwLDAuMTApJyA6ICcwIDFweCAwIHJnYmEoMCwwLDAsMC4wNiknLFxuICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IDAuM3MgZWFzZSdcbiAgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTI0XCI+XG4gICAgICAgICAgey8qIExvZ28gKi99XG4gICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fpcm8tYXNzZXRzL2ltYWdlcy9sb2dvL2hvcml6b250YWxcIiBhbHQ9XCJDTE0gQ29uc3VsdGluZ1wiIGNsYXNzTmFtZT1cImJsb2NrIGgtYXV0byBtYXgtaC0xNiBtZDptYXgtaC0yMCB3LWF1dG8gbWF4LXctWzIyMHB4XSBvYmplY3QtY29udGFpblwiIC8+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgey8qIERlc2t0b3AgTmF2ICovfVxuICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIk1haW4gbmF2aWdhdGlvblwiIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtOFwiPlxuICAgICAgICAgICAge25hdkxpbmtzLm1hcChsaW5rID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gbG9jYXRpb24ucGF0aG5hbWUgPT09IGxpbmsuaHJlZjtcbiAgICAgICAgICAgIHJldHVybiA8TGluayBrZXk9e2xpbmsuaHJlZn0gdG89e2xpbmsuaHJlZn0gY2xhc3NOYW1lPVwiY2xtLW5hdi1saW5rXCIgZGF0YS1hY3RpdmU9e2lzQWN0aXZlID8gJ3RydWUnIDogJ2ZhbHNlJ30gc3R5bGU9e3tcbiAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJ1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L0xpbms+O1xuICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cImNsbS1jdGEtYnRuXCIgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgR2V0IGluIFRvdWNoXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICB7LyogTW9iaWxlIGhhbWJ1cmdlciAqL31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBmbGV4IGZsZXgtY29sIGdhcC0xLjUgcC0yXCIgb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4oIW1lbnVPcGVuKX0gYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uIG1lbnVcIiBhcmlhLWV4cGFuZGVkPXttZW51T3Blbn0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB3LTYgaC0wLjUgYmctcHJpbWFyeSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0yMDBcIiBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBtZW51T3BlbiA/ICd0cmFuc2xhdGVZKDVweCkgcm90YXRlKDQ1ZGVnKScgOiAnbm9uZSdcbiAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdy02IGgtMC41IGJnLXByaW1hcnkgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTIwMFwiIHN0eWxlPXt7XG4gICAgICAgICAgICBvcGFjaXR5OiBtZW51T3BlbiA/IDAgOiAxXG4gICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHctNiBoLTAuNSBiZy1wcmltYXJ5IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTIwMFwiIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IG1lbnVPcGVuID8gJ3RyYW5zbGF0ZVkoLTVweCkgcm90YXRlKC00NWRlZyknIDogJ25vbmUnXG4gICAgICAgICAgfX0gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIE1vYmlsZSBtZW51ICovfVxuICAgICAge21lbnVPcGVuICYmIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGJnLXdoaXRlIGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCBzaGFkb3ctbWRcIj5cbiAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJNb2JpbGUgbmF2aWdhdGlvblwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHgtNiBweS00IGdhcC0xXCI+XG4gICAgICAgICAgICB7bmF2TGlua3MubWFwKGxpbmsgPT4gPExpbmsga2V5PXtsaW5rLmhyZWZ9IHRvPXtsaW5rLmhyZWZ9IGNsYXNzTmFtZT1cInB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtcHJpbWFyeSBob3Zlcjp0ZXh0LWFjY2VudCB0cmFuc2l0aW9uLWNvbG9yc1wiIGRhdGEtYWN0aXZlPXtsb2NhdGlvbi5wYXRobmFtZSA9PT0gbGluay5ocmVmID8gJ3RydWUnIDogJ2ZhbHNlJ30gc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG4gICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICA8L0xpbms+KX1cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+fVxuICAgIDwvaGVhZGVyPjtcbn1cbiJdLCJmaWxlIjoiL2FwcC9zcmMvbGF5b3V0cy9wYXJ0cy9IZWFkZXIudHN4In0=
