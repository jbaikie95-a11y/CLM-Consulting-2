import {createHotContext as __vite__createHotContext} from "/@vite/client";
import.meta.hot = __vite__createHotContext("/src/pages/index.tsx");
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=12b611e7";
const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"];
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
    window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/index.tsx");
    window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import {FormattedBoundText} from "/src/components/FormattedBoundText.tsx";
import {Helmet} from "/node_modules/.vite/deps/@dr__pogodin_react-helmet.js?v=12b611e7";
import {Link} from "/node_modules/.vite/deps/react-router.js?v=12b611e7";
import {motion} from "/node_modules/.vite/deps/motion_react.js?v=12b611e7";
import {home} from "/@id/__x00__virtual:content";
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 24
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: "easeOut"
        }
    }
};
const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};
const site = "https://clmconsulting.co.uk";
export default function HomePage() {
    return /* @__PURE__ */
    jsxDEV(Fragment, {
        children: [/* @__PURE__ */
        jsxDEV(Helmet, {
            "data-dev-file": "/app/src/pages/index.tsx",
            "data-dev-line": 30,
            "data-dev-id": "556fec",
            children: [/* @__PURE__ */
            jsxDEV("title", {
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 31,
                "data-dev-id": "bf619f",
                children: "CLM Consulting — Building Consultancy & Quantity Surveying, Gloucestershire"
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("meta", {
                name: "description",
                content: "Independent building consultancy and quantity surveying services across Gloucestershire and the South West. Expert advice on cost management, project management, dilapidations and more.",
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 32,
                "data-dev-id": "f4b9e4"
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("link", {
                rel: "canonical",
                href: `${site}/`,
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 33,
                "data-dev-id": "e4d38b"
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("meta", {
                property: "og:title",
                content: "CLM Consulting — Building Consultancy & Quantity Surveying",
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 34,
                "data-dev-id": "f4b9e5"
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("meta", {
                property: "og:description",
                content: "Independent building consultancy and quantity surveying services across Gloucestershire and the South West.",
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 35,
                "data-dev-id": "f4b9e6"
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("meta", {
                property: "og:url",
                content: `${site}/`,
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 36,
                "data-dev-id": "f4b9e7"
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("meta", {
                property: "og:type",
                content: "website",
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 37,
                "data-dev-id": "f4b9e8"
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("meta", {
                property: "og:image",
                content: `${site}/og-image.svg`,
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 38,
                "data-dev-id": "f4b9e9"
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("meta", {
                property: "og:image:width",
                content: "1200",
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 39,
                "data-dev-id": "f4b9ea"
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("meta", {
                property: "og:image:height",
                content: "630",
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 40,
                "data-dev-id": "f4b9eb"
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("meta", {
                property: "og:image:alt",
                content: "CLM Consulting — Independent Building Consultancy & Quantity Surveying, Gloucestershire",
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 41,
                "data-dev-id": "f4b9ec"
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("meta", {
                name: "twitter:card",
                content: "summary_large_image",
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 42,
                "data-dev-id": "f4b9ed"
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("meta", {
                name: "twitter:image",
                content: `${site}/og-image.svg`,
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 43,
                "data-dev-id": "8bf6b5"
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("meta", {
                name: "twitter:image:alt",
                content: "CLM Consulting — Independent Building Consultancy & Quantity Surveying, Gloucestershire",
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 44,
                "data-dev-id": "8bf6b6"
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("script", {
                type: "application/ld+json",
                "data-dev-dynamic": "true",
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 45,
                "data-dev-id": "b31892",
                children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [{
                        "@type": "WebSite",
                        "@id": `${site}/#website`,
                        name: "CLM Consulting",
                        url: `${site}/`
                    }, {
                        "@type": "ProfessionalService",
                        "@id": `${site}/#organization`,
                        name: "CLM Consulting",
                        url: `${site}/`,
                        logo: `${site}/og-image.svg`,
                        description: "Independent building consultancy and quantity surveying practice based in Gloucestershire.",
                        address: {
                            "@type": "PostalAddress",
                            addressRegion: "Gloucestershire",
                            addressCountry: "GB"
                        },
                        areaServed: ["Gloucestershire", "Worcestershire", "Oxfordshire", "Wiltshire", "Bristol", "South West England"],
                        knowsAbout: ["Quantity Surveying", "Building Consultancy", "Project Management", "Contract Administration", "Dilapidations", "Condition Surveys"]
                    }, {
                        "@type": "WebPage",
                        "@id": `${site}/#webpage`,
                        url: `${site}/`,
                        isPartOf: {
                            "@id": `${site}/#website`
                        },
                        about: {
                            "@id": `${site}/#organization`
                        },
                        datePublished: "2026-08-17",
                        dateModified: "2026-08-17"
                    }]
                })
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)]
        }, void 0, true, {
            fileName: "/app/src/pages/index.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this), /* @__PURE__ */
        jsxDEV("main", {
            "data-dev-file": "/app/src/pages/index.tsx",
            "data-dev-line": 82,
            "data-dev-id": "641c92",
            children: [/* @__PURE__ */
            jsxDEV("section", {
                className: "relative flex items-center justify-center min-h-screen",
                style: {
                    paddingTop: "96px"
                },
                "aria-label": "Hero",
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 84,
                "data-dev-id": "8c0c78",
                children: [/* @__PURE__ */
                jsxDEV("img", {
                    src: "/airo-assets/images/pages/home/hero",
                    alt: "",
                    "aria-hidden": "true",
                    className: "absolute inset-0 w-full h-full object-cover",
                    loading: "eager",
                    fetchPriority: "high",
                    "data-dev-file": "/app/src/pages/index.tsx",
                    "data-dev-line": 87,
                    "data-dev-id": "faea86"
                }, void 0, false, {
                    fileName: "/app/src/pages/index.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this), /* @__PURE__ */
                jsxDEV("div", {
                    className: "absolute inset-0 pointer-events-none clm-hero-overlay",
                    "data-dev-file": "/app/src/pages/index.tsx",
                    "data-dev-line": 89,
                    "data-dev-id": "9e7e4c"
                }, void 0, false, {
                    fileName: "/app/src/pages/index.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this), /* @__PURE__ */
                jsxDEV("div", {
                    className: "relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center text-white",
                    "data-dev-file": "/app/src/pages/index.tsx",
                    "data-dev-line": 91,
                    "data-dev-id": "9e7e4d",
                    children: [/* @__PURE__ */
                    jsxDEV(motion.span, {
                        className: "clm-gold-rule mx-auto mb-8",
                        initial: {
                            scaleX: 0
                        },
                        animate: {
                            scaleX: 1
                        },
                        transition: {
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.2
                        },
                        style: {
                            transformOrigin: "left"
                        },
                        "data-dev-editable": "text",
                        "data-dev-file": "/app/src/pages/index.tsx",
                        "data-dev-line": 92,
                        "data-dev-id": "198bf4"
                    }, void 0, false, {
                        fileName: "/app/src/pages/index.tsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, this), /* @__PURE__ */
                    jsxDEV(motion.h1, {
                        className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",
                        style: {
                            whiteSpace: "pre-line",
                            fontFamily: "var(--font-heading)",
                            letterSpacing: "-0.02em"
                        },
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.65,
                            ease: "easeOut",
                            delay: 0.3
                        },
                        "data-dev-content-key": "home.hero.headline",
                        "data-dev-bound-text": "true",
                        "data-dev-bound-source-kind": "content-key",
                        "data-dev-file": "/app/src/pages/index.tsx",
                        "data-dev-line": 104,
                        "data-dev-id": "d5a69b",
                        children: /* @__PURE__ */
                        jsxDEV(FormattedBoundText, {
                            devId: "d5a69b",
                            guard: {
                                file: "src/pages/index.tsx",
                                tagName: "h1",
                                sourceKind: "content-key",
                                contentKey: "home.hero.headline",
                                contentKeyTemplate: null,
                                expressionHash: null
                            },
                            children: home.hero.headline
                        }, void 0, false, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 137,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "/app/src/pages/index.tsx",
                        lineNumber: 123,
                        columnNumber: 13
                    }, this), /* @__PURE__ */
                    jsxDEV(motion.p, {
                        className: "text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed clm-hero-sub",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.5
                        },
                        style: {
                            whiteSpace: "pre-line"
                        },
                        "data-dev-content-key": "home.hero.subheadline",
                        "data-dev-bound-text": "true",
                        "data-dev-bound-source-kind": "content-key",
                        "data-dev-file": "/app/src/pages/index.tsx",
                        "data-dev-line": 121,
                        "data-dev-id": "352552",
                        children: /* @__PURE__ */
                        jsxDEV(FormattedBoundText, {
                            devId: "352552",
                            guard: {
                                file: "src/pages/index.tsx",
                                tagName: "p",
                                sourceKind: "content-key",
                                contentKey: "home.hero.subheadline",
                                contentKeyTemplate: null,
                                expressionHash: null
                            },
                            children: home.hero.subheadline
                        }, void 0, false, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 151,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "/app/src/pages/index.tsx",
                        lineNumber: 140,
                        columnNumber: 13
                    }, this), /* @__PURE__ */
                    jsxDEV(motion.div, {
                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.55,
                            ease: "easeOut",
                            delay: 0.65
                        },
                        "data-dev-file": "/app/src/pages/index.tsx",
                        "data-dev-line": 135,
                        "data-dev-id": "622cc5",
                        children: [/* @__PURE__ */
                        jsxDEV(Link, {
                            to: "/services",
                            className: "clm-btn-primary",
                            "data-dev-content-key": "home.hero.cta_primary",
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 146,
                            "data-dev-id": "ee6e24",
                            children: home.hero.cta_primary
                        }, void 0, false, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 165,
                            columnNumber: 15
                        }, this), /* @__PURE__ */
                        jsxDEV(Link, {
                            to: "/contact",
                            className: "clm-btn-outline",
                            "data-dev-content-key": "home.hero.cta_secondary",
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 149,
                            "data-dev-id": "ee6e25",
                            children: home.hero.cta_secondary
                        }, void 0, false, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 168,
                            columnNumber: 15
                        }, this)]
                    }, void 0, true, {
                        fileName: "/app/src/pages/index.tsx",
                        lineNumber: 154,
                        columnNumber: 13
                    }, this)]
                }, void 0, true, {
                    fileName: "/app/src/pages/index.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, this), /* @__PURE__ */
                jsxDEV("div", {
                    className: "absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none",
                    "data-dev-file": "/app/src/pages/index.tsx",
                    "data-dev-line": 156,
                    "data-dev-id": "9e7e4e",
                    children: /* @__PURE__ */
                    jsxDEV(motion.div, {
                        className: "clm-scroll-line",
                        animate: {
                            y: [0, 8, 0]
                        },
                        transition: {
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        "data-dev-file": "/app/src/pages/index.tsx",
                        "data-dev-line": 157,
                        "data-dev-id": "a26666"
                    }, void 0, false, {
                        fileName: "/app/src/pages/index.tsx",
                        lineNumber: 176,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "/app/src/pages/index.tsx",
                    lineNumber: 175,
                    columnNumber: 11
                }, this)]
            }, void 0, true, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("section", {
                className: "py-24 bg-background",
                "aria-label": "About CLM Consulting",
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 168,
                "data-dev-id": "8c0c79",
                children: /* @__PURE__ */
                jsxDEV("div", {
                    className: "max-w-7xl mx-auto px-6 lg:px-8",
                    "data-dev-file": "/app/src/pages/index.tsx",
                    "data-dev-line": 169,
                    "data-dev-id": "98bb0d",
                    children: /* @__PURE__ */
                    jsxDEV("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                        "data-dev-file": "/app/src/pages/index.tsx",
                        "data-dev-line": 170,
                        "data-dev-id": "9b08a1",
                        children: [/* @__PURE__ */
                        jsxDEV(motion.div, {
                            variants: stagger,
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: true,
                                margin: "-80px"
                            },
                            "data-dev-dynamic": "true",
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 171,
                            "data-dev-id": "01df99",
                            children: [/* @__PURE__ */
                            jsxDEV(motion.span, {
                                className: "clm-gold-rule mb-6",
                                variants: fadeUp,
                                "data-dev-editable": "text",
                                "data-dev-file": "/app/src/pages/index.tsx",
                                "data-dev-line": 175,
                                "data-dev-id": "874240"
                            }, void 0, false, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 194,
                                columnNumber: 17
                            }, this), /* @__PURE__ */
                            jsxDEV(motion.h2, {
                                className: "text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight",
                                style: {
                                    whiteSpace: "pre-line",
                                    fontFamily: "var(--font-heading)",
                                    letterSpacing: "-0.02em"
                                },
                                variants: fadeUp,
                                "data-dev-content-key": "home.intro.heading",
                                "data-dev-bound-text": "true",
                                "data-dev-bound-source-kind": "content-key",
                                "data-dev-file": "/app/src/pages/index.tsx",
                                "data-dev-line": 176,
                                "data-dev-id": "895e28",
                                children: /* @__PURE__ */
                                jsxDEV(FormattedBoundText, {
                                    devId: "895e28",
                                    guard: {
                                        file: "src/pages/index.tsx",
                                        tagName: "h2",
                                        sourceKind: "content-key",
                                        contentKey: "home.intro.heading",
                                        contentKeyTemplate: null,
                                        expressionHash: null
                                    },
                                    children: home.intro.heading
                                }, void 0, false, {
                                    fileName: "/app/src/pages/index.tsx",
                                    lineNumber: 199,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 195,
                                columnNumber: 17
                            }, this), home.intro.body.map( (p, _airoIdx) => /* @__PURE__ */
                            jsxDEV(motion.p, {
                                className: "text-muted-foreground leading-relaxed mb-4 text-base",
                                variants: fadeUp,
                                "data-dev-content-list": "home.intro.body",
                                "data-dev-content-list-index": _airoIdx,
                                "data-dev-item-id": p.id,
                                "data-dev-file": "/app/src/pages/index.tsx",
                                "data-dev-line": 182,
                                "data-dev-id": "599f1e",
                                children: /* @__PURE__ */
                                jsxDEV("span", {
                                    style: {
                                        whiteSpace: "pre-line"
                                    },
                                    "data-dev-content-key-template": "home.intro.body[].text",
                                    "data-dev-file": "/app/src/pages/index.tsx",
                                    "data-dev-line": 183,
                                    "data-dev-id": "256a41",
                                    children: p.text
                                }, void 0, false, {
                                    fileName: "/app/src/pages/index.tsx",
                                    lineNumber: 202,
                                    columnNumber: 21
                                }, this)
                            }, p.id, false, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 201,
                                columnNumber: 55
                            }, this)), /* @__PURE__ */
                            jsxDEV(motion.div, {
                                className: "mt-8",
                                variants: fadeUp,
                                "data-dev-file": "/app/src/pages/index.tsx",
                                "data-dev-line": 185,
                                "data-dev-id": "8c4991",
                                children: /* @__PURE__ */
                                jsxDEV(Link, {
                                    to: "/about",
                                    className: "clm-btn-primary",
                                    "data-dev-file": "/app/src/pages/index.tsx",
                                    "data-dev-line": 186,
                                    "data-dev-id": "96ad70",
                                    children: "About CLM Consulting"
                                }, void 0, false, {
                                    fileName: "/app/src/pages/index.tsx",
                                    lineNumber: 205,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 204,
                                columnNumber: 17
                            }, this)]
                        }, void 0, true, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 190,
                            columnNumber: 15
                        }, this), /* @__PURE__ */
                        jsxDEV(motion.div, {
                            variants: stagger,
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: true,
                                margin: "-80px"
                            },
                            "data-dev-dynamic": "true",
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 192,
                            "data-dev-id": "01df9a",
                            children: home.intro.credentials.map( (c, _airoIdx2) => /* @__PURE__ */
                            jsxDEV(motion.div, {
                                className: "flex gap-5 py-5 border-b border-border last:border-0",
                                variants: fadeUp,
                                "data-dev-content-list": "home.intro.credentials",
                                "data-dev-content-list-index": _airoIdx2,
                                "data-dev-item-id": c.id,
                                "data-dev-file": "/app/src/pages/index.tsx",
                                "data-dev-line": 196,
                                "data-dev-id": "cc8332",
                                children: [/* @__PURE__ */
                                jsxDEV("span", {
                                    className: "clm-gold-rule-sm mt-2 shrink-0",
                                    "data-dev-file": "/app/src/pages/index.tsx",
                                    "data-dev-line": 197,
                                    "data-dev-id": "146fd5"
                                }, void 0, false, {
                                    fileName: "/app/src/pages/index.tsx",
                                    lineNumber: 216,
                                    columnNumber: 21
                                }, this), /* @__PURE__ */
                                jsxDEV("div", {
                                    "data-dev-file": "/app/src/pages/index.tsx",
                                    "data-dev-line": 198,
                                    "data-dev-id": "af9886",
                                    children: [/* @__PURE__ */
                                    jsxDEV("p", {
                                        className: "font-semibold text-foreground text-sm mb-1",
                                        style: {
                                            fontFamily: "var(--font-heading)"
                                        },
                                        "data-dev-file": "/app/src/pages/index.tsx",
                                        "data-dev-line": 199,
                                        "data-dev-id": "584c27",
                                        children: /* @__PURE__ */
                                        jsxDEV("span", {
                                            style: {
                                                whiteSpace: "pre-line"
                                            },
                                            "data-dev-content-key-template": "home.intro.credentials[].label",
                                            "data-dev-file": "/app/src/pages/index.tsx",
                                            "data-dev-line": 202,
                                            "data-dev-id": "8ff32a",
                                            children: c.label
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/index.tsx",
                                            lineNumber: 221,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/app/src/pages/index.tsx",
                                        lineNumber: 218,
                                        columnNumber: 23
                                    }, this), /* @__PURE__ */
                                    jsxDEV("p", {
                                        className: "text-muted-foreground text-sm leading-relaxed",
                                        "data-dev-file": "/app/src/pages/index.tsx",
                                        "data-dev-line": 204,
                                        "data-dev-id": "584c28",
                                        children: /* @__PURE__ */
                                        jsxDEV("span", {
                                            style: {
                                                whiteSpace: "pre-line"
                                            },
                                            "data-dev-content-key-template": "home.intro.credentials[].detail",
                                            "data-dev-file": "/app/src/pages/index.tsx",
                                            "data-dev-line": 205,
                                            "data-dev-id": "d1c80b",
                                            children: c.detail
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/index.tsx",
                                            lineNumber: 224,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/app/src/pages/index.tsx",
                                        lineNumber: 223,
                                        columnNumber: 23
                                    }, this)]
                                }, void 0, true, {
                                    fileName: "/app/src/pages/index.tsx",
                                    lineNumber: 217,
                                    columnNumber: 21
                                }, this)]
                            }, c.id, true, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 215,
                                columnNumber: 63
                            }, this))
                        }, void 0, false, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 211,
                            columnNumber: 15
                        }, this)]
                    }, void 0, true, {
                        fileName: "/app/src/pages/index.tsx",
                        lineNumber: 189,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "/app/src/pages/index.tsx",
                    lineNumber: 188,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 187,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("section", {
                className: "py-24 bg-muted",
                "aria-label": "Services",
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 215,
                "data-dev-id": "8c0c7a",
                children: /* @__PURE__ */
                jsxDEV("div", {
                    className: "max-w-7xl mx-auto px-6 lg:px-8",
                    "data-dev-file": "/app/src/pages/index.tsx",
                    "data-dev-line": 216,
                    "data-dev-id": "92f7ce",
                    children: [/* @__PURE__ */
                    jsxDEV(motion.div, {
                        className: "max-w-2xl mb-16",
                        variants: stagger,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            margin: "-80px"
                        },
                        "data-dev-file": "/app/src/pages/index.tsx",
                        "data-dev-line": 217,
                        "data-dev-id": "704fe6",
                        children: [/* @__PURE__ */
                        jsxDEV(motion.span, {
                            className: "clm-gold-rule mb-6",
                            variants: fadeUp,
                            "data-dev-editable": "text",
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 221,
                            "data-dev-id": "f5b54d"
                        }, void 0, false, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 240,
                            columnNumber: 15
                        }, this), /* @__PURE__ */
                        jsxDEV(motion.h2, {
                            className: "text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight",
                            style: {
                                whiteSpace: "pre-line",
                                fontFamily: "var(--font-heading)",
                                letterSpacing: "-0.02em"
                            },
                            variants: fadeUp,
                            "data-dev-content-key": "home.services.heading",
                            "data-dev-bound-text": "true",
                            "data-dev-bound-source-kind": "content-key",
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 222,
                            "data-dev-id": "b5a9f5",
                            children: /* @__PURE__ */
                            jsxDEV(FormattedBoundText, {
                                devId: "b5a9f5",
                                guard: {
                                    file: "src/pages/index.tsx",
                                    tagName: "h2",
                                    sourceKind: "content-key",
                                    contentKey: "home.services.heading",
                                    contentKeyTemplate: null,
                                    expressionHash: null
                                },
                                children: home.services.heading
                            }, void 0, false, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 245,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 241,
                            columnNumber: 15
                        }, this), /* @__PURE__ */
                        jsxDEV(motion.p, {
                            className: "text-muted-foreground leading-relaxed",
                            variants: fadeUp,
                            "data-dev-editable": "text",
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 228,
                            "data-dev-id": "15254b",
                            children: /* @__PURE__ */
                            jsxDEV("span", {
                                style: {
                                    whiteSpace: "pre-line"
                                },
                                "data-dev-content-key": "home.services.intro",
                                "data-dev-bound-text": "true",
                                "data-dev-bound-source-kind": "content-key",
                                "data-dev-file": "/app/src/pages/index.tsx",
                                "data-dev-line": 229,
                                "data-dev-id": "809bce",
                                children: /* @__PURE__ */
                                jsxDEV(FormattedBoundText, {
                                    devId: "809bce",
                                    guard: {
                                        file: "src/pages/index.tsx",
                                        tagName: "span",
                                        sourceKind: "content-key",
                                        contentKey: "home.services.intro",
                                        contentKeyTemplate: null,
                                        expressionHash: null
                                    },
                                    children: home.services.intro
                                }, void 0, false, {
                                    fileName: "/app/src/pages/index.tsx",
                                    lineNumber: 248,
                                    columnNumber: 251
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 248,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 247,
                            columnNumber: 15
                        }, this)]
                    }, void 0, true, {
                        fileName: "/app/src/pages/index.tsx",
                        lineNumber: 236,
                        columnNumber: 13
                    }, this), /* @__PURE__ */
                    jsxDEV(motion.div, {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        variants: stagger,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            margin: "-60px"
                        },
                        "data-dev-dynamic": "true",
                        "data-dev-file": "/app/src/pages/index.tsx",
                        "data-dev-line": 233,
                        "data-dev-id": "704fe7",
                        children: home.services.items.map( (s, i) => /* @__PURE__ */
                        jsxDEV(motion.div, {
                            className: "clm-service-card",
                            variants: fadeUp,
                            "data-dev-content-list": "home.services.items",
                            "data-dev-content-list-index": i,
                            "data-dev-item-id": s.id,
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 237,
                            "data-dev-id": "82489f",
                            children: [/* @__PURE__ */
                            jsxDEV("p", {
                                className: "text-xs font-semibold tracking-widest uppercase mb-4 clm-accent-text",
                                style: {
                                    fontFamily: "var(--font-heading)"
                                },
                                "data-dev-dynamic": "true",
                                "data-dev-file": "/app/src/pages/index.tsx",
                                "data-dev-line": 238,
                                "data-dev-id": "c760c0",
                                children: ["0", i + 1]
                            }, void 0, true, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 257,
                                columnNumber: 19
                            }, this), /* @__PURE__ */
                            jsxDEV("h3", {
                                className: "text-lg font-semibold text-foreground mb-3 leading-snug",
                                style: {
                                    fontFamily: "var(--font-heading)"
                                },
                                "data-dev-file": "/app/src/pages/index.tsx",
                                "data-dev-line": 243,
                                "data-dev-id": "af584b",
                                children: /* @__PURE__ */
                                jsxDEV("span", {
                                    style: {
                                        whiteSpace: "pre-line"
                                    },
                                    "data-dev-content-key-template": "home.services.items[].title",
                                    "data-dev-file": "/app/src/pages/index.tsx",
                                    "data-dev-line": 246,
                                    "data-dev-id": "436ece",
                                    children: s.title
                                }, void 0, false, {
                                    fileName: "/app/src/pages/index.tsx",
                                    lineNumber: 265,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 262,
                                columnNumber: 19
                            }, this), /* @__PURE__ */
                            jsxDEV("p", {
                                className: "text-muted-foreground text-sm leading-relaxed",
                                "data-dev-file": "/app/src/pages/index.tsx",
                                "data-dev-line": 248,
                                "data-dev-id": "c760c1",
                                children: /* @__PURE__ */
                                jsxDEV("span", {
                                    style: {
                                        whiteSpace: "pre-line"
                                    },
                                    "data-dev-content-key-template": "home.services.items[].description",
                                    "data-dev-file": "/app/src/pages/index.tsx",
                                    "data-dev-line": 249,
                                    "data-dev-id": "5a9684",
                                    children: s.description
                                }, void 0, false, {
                                    fileName: "/app/src/pages/index.tsx",
                                    lineNumber: 268,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 267,
                                columnNumber: 19
                            }, this)]
                        }, s.id, true, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 256,
                            columnNumber: 50
                        }, this))
                    }, void 0, false, {
                        fileName: "/app/src/pages/index.tsx",
                        lineNumber: 252,
                        columnNumber: 13
                    }, this), /* @__PURE__ */
                    jsxDEV(motion.div, {
                        className: "mt-12 text-center",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.3
                        },
                        "data-dev-file": "/app/src/pages/index.tsx",
                        "data-dev-line": 254,
                        "data-dev-id": "704fe8",
                        children: /* @__PURE__ */
                        jsxDEV(Link, {
                            to: "/services",
                            className: "clm-btn-primary",
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 264,
                            "data-dev-id": "574be7",
                            children: "View All Services"
                        }, void 0, false, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 283,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "/app/src/pages/index.tsx",
                        lineNumber: 273,
                        columnNumber: 13
                    }, this)]
                }, void 0, true, {
                    fileName: "/app/src/pages/index.tsx",
                    lineNumber: 235,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 234,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("section", {
                className: "py-24 bg-primary text-primary-foreground",
                "aria-label": "Why choose CLM Consulting",
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 272,
                "data-dev-id": "8c0c7b",
                children: /* @__PURE__ */
                jsxDEV("div", {
                    className: "max-w-7xl mx-auto px-6 lg:px-8",
                    "data-dev-file": "/app/src/pages/index.tsx",
                    "data-dev-line": 273,
                    "data-dev-id": "8d348f",
                    children: [/* @__PURE__ */
                    jsxDEV(motion.div, {
                        className: "max-w-xl mb-16",
                        variants: stagger,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            margin: "-80px"
                        },
                        "data-dev-file": "/app/src/pages/index.tsx",
                        "data-dev-line": 274,
                        "data-dev-id": "977e47",
                        children: [/* @__PURE__ */
                        jsxDEV(motion.span, {
                            className: "clm-gold-rule mb-6",
                            variants: fadeUp,
                            "data-dev-editable": "text",
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 278,
                            "data-dev-id": "25f96e"
                        }, void 0, false, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 297,
                            columnNumber: 15
                        }, this), /* @__PURE__ */
                        jsxDEV(motion.h2, {
                            className: "text-3xl md:text-4xl font-bold leading-tight",
                            style: {
                                whiteSpace: "pre-line",
                                fontFamily: "var(--font-heading)",
                                letterSpacing: "-0.02em"
                            },
                            variants: fadeUp,
                            "data-dev-content-key": "home.why.heading",
                            "data-dev-bound-text": "true",
                            "data-dev-bound-source-kind": "content-key",
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 279,
                            "data-dev-id": "1471d6",
                            children: /* @__PURE__ */
                            jsxDEV(FormattedBoundText, {
                                devId: "1471d6",
                                guard: {
                                    file: "src/pages/index.tsx",
                                    tagName: "h2",
                                    sourceKind: "content-key",
                                    contentKey: "home.why.heading",
                                    contentKeyTemplate: null,
                                    expressionHash: null
                                },
                                children: home.why.heading
                            }, void 0, false, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 302,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 298,
                            columnNumber: 15
                        }, this)]
                    }, void 0, true, {
                        fileName: "/app/src/pages/index.tsx",
                        lineNumber: 293,
                        columnNumber: 13
                    }, this), /* @__PURE__ */
                    jsxDEV(motion.div, {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-0",
                        variants: stagger,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            margin: "-60px"
                        },
                        "data-dev-dynamic": "true",
                        "data-dev-file": "/app/src/pages/index.tsx",
                        "data-dev-line": 287,
                        "data-dev-id": "977e48",
                        children: home.why.items.map( (w, _airoIdx3) => /* @__PURE__ */
                        jsxDEV(motion.div, {
                            className: "clm-why-card",
                            variants: fadeUp,
                            "data-dev-content-list": "home.why.items",
                            "data-dev-content-list-index": _airoIdx3,
                            "data-dev-item-id": w.id,
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 291,
                            "data-dev-id": "ba0ca0",
                            children: [/* @__PURE__ */
                            jsxDEV("h3", {
                                className: "text-lg font-semibold mb-3 clm-accent-text",
                                style: {
                                    fontFamily: "var(--font-heading)"
                                },
                                "data-dev-file": "/app/src/pages/index.tsx",
                                "data-dev-line": 292,
                                "data-dev-id": "b6c4ec",
                                children: /* @__PURE__ */
                                jsxDEV("span", {
                                    style: {
                                        whiteSpace: "pre-line"
                                    },
                                    "data-dev-content-key-template": "home.why.items[].title",
                                    "data-dev-file": "/app/src/pages/index.tsx",
                                    "data-dev-line": 295,
                                    "data-dev-id": "a03c4f",
                                    children: w.title
                                }, void 0, false, {
                                    fileName: "/app/src/pages/index.tsx",
                                    lineNumber: 314,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 311,
                                columnNumber: 19
                            }, this), /* @__PURE__ */
                            jsxDEV("p", {
                                className: "text-sm leading-relaxed clm-why-body",
                                "data-dev-file": "/app/src/pages/index.tsx",
                                "data-dev-line": 297,
                                "data-dev-id": "533d41",
                                children: /* @__PURE__ */
                                jsxDEV("span", {
                                    style: {
                                        whiteSpace: "pre-line"
                                    },
                                    "data-dev-content-key-template": "home.why.items[].body",
                                    "data-dev-file": "/app/src/pages/index.tsx",
                                    "data-dev-line": 298,
                                    "data-dev-id": "616304",
                                    children: w.body
                                }, void 0, false, {
                                    fileName: "/app/src/pages/index.tsx",
                                    lineNumber: 317,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 316,
                                columnNumber: 19
                            }, this)]
                        }, w.id, true, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 310,
                            columnNumber: 53
                        }, this))
                    }, void 0, false, {
                        fileName: "/app/src/pages/index.tsx",
                        lineNumber: 306,
                        columnNumber: 13
                    }, this)]
                }, void 0, true, {
                    fileName: "/app/src/pages/index.tsx",
                    lineNumber: 292,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 291,
                columnNumber: 9
            }, this), /* @__PURE__ */
            jsxDEV("section", {
                className: "py-20 bg-background border-t border-border",
                "aria-label": "Contact call to action",
                "data-dev-file": "/app/src/pages/index.tsx",
                "data-dev-line": 306,
                "data-dev-id": "8c0c7c",
                children: /* @__PURE__ */
                jsxDEV("div", {
                    className: "max-w-4xl mx-auto px-6 lg:px-8 text-center",
                    "data-dev-file": "/app/src/pages/index.tsx",
                    "data-dev-line": 307,
                    "data-dev-id": "877150",
                    children: /* @__PURE__ */
                    jsxDEV(motion.div, {
                        variants: stagger,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            margin: "-60px"
                        },
                        "data-dev-file": "/app/src/pages/index.tsx",
                        "data-dev-line": 308,
                        "data-dev-id": "beaca8",
                        children: [/* @__PURE__ */
                        jsxDEV(motion.span, {
                            className: "clm-gold-rule mx-auto mb-8",
                            variants: fadeUp,
                            "data-dev-editable": "text",
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 312,
                            "data-dev-id": "563d8f"
                        }, void 0, false, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 331,
                            columnNumber: 15
                        }, this), /* @__PURE__ */
                        jsxDEV(motion.h2, {
                            className: "text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight",
                            style: {
                                whiteSpace: "pre-line",
                                fontFamily: "var(--font-heading)",
                                letterSpacing: "-0.02em"
                            },
                            variants: fadeUp,
                            "data-dev-content-key": "home.cta.heading",
                            "data-dev-bound-text": "true",
                            "data-dev-bound-source-kind": "content-key",
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 313,
                            "data-dev-id": "7339b7",
                            children: /* @__PURE__ */
                            jsxDEV(FormattedBoundText, {
                                devId: "7339b7",
                                guard: {
                                    file: "src/pages/index.tsx",
                                    tagName: "h2",
                                    sourceKind: "content-key",
                                    contentKey: "home.cta.heading",
                                    contentKeyTemplate: null,
                                    expressionHash: null
                                },
                                children: home.cta.heading
                            }, void 0, false, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 336,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 332,
                            columnNumber: 15
                        }, this), /* @__PURE__ */
                        jsxDEV(motion.p, {
                            className: "text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed",
                            variants: fadeUp,
                            "data-dev-editable": "text",
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 319,
                            "data-dev-id": "9ec4cd",
                            children: /* @__PURE__ */
                            jsxDEV("span", {
                                style: {
                                    whiteSpace: "pre-line"
                                },
                                "data-dev-content-key": "home.cta.body",
                                "data-dev-bound-text": "true",
                                "data-dev-bound-source-kind": "content-key",
                                "data-dev-file": "/app/src/pages/index.tsx",
                                "data-dev-line": 320,
                                "data-dev-id": "8f7510",
                                children: /* @__PURE__ */
                                jsxDEV(FormattedBoundText, {
                                    devId: "8f7510",
                                    guard: {
                                        file: "src/pages/index.tsx",
                                        tagName: "span",
                                        sourceKind: "content-key",
                                        contentKey: "home.cta.body",
                                        contentKeyTemplate: null,
                                        expressionHash: null
                                    },
                                    children: home.cta.body
                                }, void 0, false, {
                                    fileName: "/app/src/pages/index.tsx",
                                    lineNumber: 339,
                                    columnNumber: 245
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 339,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 338,
                            columnNumber: 15
                        }, this), /* @__PURE__ */
                        jsxDEV(motion.div, {
                            variants: fadeUp,
                            "data-dev-file": "/app/src/pages/index.tsx",
                            "data-dev-line": 322,
                            "data-dev-id": "b19700",
                            children: /* @__PURE__ */
                            jsxDEV(Link, {
                                to: "/contact",
                                className: "clm-btn-primary",
                                "data-dev-content-key": "home.cta.button",
                                "data-dev-file": "/app/src/pages/index.tsx",
                                "data-dev-line": 323,
                                "data-dev-id": "aea7ff",
                                children: home.cta.button
                            }, void 0, false, {
                                fileName: "/app/src/pages/index.tsx",
                                lineNumber: 342,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/src/pages/index.tsx",
                            lineNumber: 341,
                            columnNumber: 15
                        }, this)]
                    }, void 0, true, {
                        fileName: "/app/src/pages/index.tsx",
                        lineNumber: 327,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "/app/src/pages/index.tsx",
                    lineNumber: 326,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/app/src/pages/index.tsx",
                lineNumber: 325,
                columnNumber: 9
            }, this)]
        }, void 0, true, {
            fileName: "/app/src/pages/index.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this)]
    }, void 0, true, {
        fileName: "/app/src/pages/index.tsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
_c = HomePage;
var _c;
$RefreshReg$(_c, "HomePage");
if (import.meta.hot && !inWebWorker) {
    window.$RefreshReg$ = prevRefreshReg;
    window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
    RefreshRuntime.__hmr_import(import.meta.url).then( (currentExports) => {
        RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/index.tsx", currentExports);
        import.meta.hot.accept( (nextExports) => {
            if (!nextExports)
                return;
            const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/index.tsx", currentExports, nextExports);
            if (invalidateMessage)
                import.meta.hot.invalidate(invalidateMessage);
        }
        );
    }
    );
}

//# sourceMappingURL=data:application/json;base64,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O0FBQUEsZUFBcUIsS0FEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUEsUUFDQSx1QkFBQyxPQUFPLEtBQVAsRUFBVyxVQUFVbkQsUUFBTyw0RkFDM0IsaUNBQUMsUUFBSyxJQUFHLFlBQVcsV0FBVSxtQkFBaUIsdUlBQzVDRCxlQUFLdUUsSUFBSUMsVUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSUE7QUFBQSxXQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbUJBLEtBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFxQkEsS0F0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXVCQTtBQUFBLFNBdlBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F3UEE7QUFBQSxPQTdTRztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBOFNMO0FBQ0o7QUFBQ0MsS0FoVHVCN0Q7QUFBUSxJQUFBNkQ7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiSGVsbWV0IiwiTGluayIsIm1vdGlvbiIsImhvbWUiLCJmYWRlVXAiLCJoaWRkZW4iLCJvcGFjaXR5IiwieSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwic3RhZ2dlciIsInN0YWdnZXJDaGlsZHJlbiIsInNpdGUiLCJIb21lUGFnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwidXJsIiwibG9nbyIsImRlc2NyaXB0aW9uIiwiYWRkcmVzcyIsImFkZHJlc3NSZWdpb24iLCJhZGRyZXNzQ291bnRyeSIsImFyZWFTZXJ2ZWQiLCJrbm93c0Fib3V0IiwiaXNQYXJ0T2YiLCJhYm91dCIsImRhdGVQdWJsaXNoZWQiLCJkYXRlTW9kaWZpZWQiLCJwYWRkaW5nVG9wIiwic2NhbGVYIiwiZGVsYXkiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ3aGl0ZVNwYWNlIiwiZm9udEZhbWlseSIsImxldHRlclNwYWNpbmciLCJmaWxlIiwidGFnTmFtZSIsInNvdXJjZUtpbmQiLCJjb250ZW50S2V5IiwiY29udGVudEtleVRlbXBsYXRlIiwiZXhwcmVzc2lvbkhhc2giLCJoZXJvIiwiaGVhZGxpbmUiLCJzdWJoZWFkbGluZSIsImN0YV9wcmltYXJ5IiwiY3RhX3NlY29uZGFyeSIsInJlcGVhdCIsIkluZmluaXR5Iiwib25jZSIsIm1hcmdpbiIsImludHJvIiwiaGVhZGluZyIsImJvZHkiLCJtYXAiLCJwIiwiX2Fpcm9JZHgiLCJpZCIsInRleHQiLCJjcmVkZW50aWFscyIsImMiLCJfYWlyb0lkeDIiLCJsYWJlbCIsImRldGFpbCIsInNlcnZpY2VzIiwiaXRlbXMiLCJzIiwiaSIsInRpdGxlIiwid2h5IiwidyIsIl9haXJvSWR4MyIsImN0YSIsImJ1dHRvbiIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdAZHIucG9nb2Rpbi9yZWFjdC1oZWxtZXQnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ21vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBob21lIH0gZnJvbSAndmlydHVhbDpjb250ZW50JztcbmNvbnN0IGZhZGVVcCA9IHtcbiAgaGlkZGVuOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB5OiAyNFxuICB9LFxuICB2aXNpYmxlOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB5OiAwLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiAwLjU1LFxuICAgICAgZWFzZTogJ2Vhc2VPdXQnIGFzIGNvbnN0XG4gICAgfVxuICB9XG59O1xuY29uc3Qgc3RhZ2dlciA9IHtcbiAgaGlkZGVuOiB7fSxcbiAgdmlzaWJsZToge1xuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xXG4gICAgfVxuICB9XG59O1xuY29uc3Qgc2l0ZSA9ICdodHRwczovL2NsbWNvbnN1bHRpbmcuY28udWsnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIHJldHVybiA8PlxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPHRpdGxlPkNMTSBDb25zdWx0aW5nIOKAlCBCdWlsZGluZyBDb25zdWx0YW5jeSAmYW1wOyBRdWFudGl0eSBTdXJ2ZXlpbmcsIEdsb3VjZXN0ZXJzaGlyZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJJbmRlcGVuZGVudCBidWlsZGluZyBjb25zdWx0YW5jeSBhbmQgcXVhbnRpdHkgc3VydmV5aW5nIHNlcnZpY2VzIGFjcm9zcyBHbG91Y2VzdGVyc2hpcmUgYW5kIHRoZSBTb3V0aCBXZXN0LiBFeHBlcnQgYWR2aWNlIG9uIGNvc3QgbWFuYWdlbWVudCwgcHJvamVjdCBtYW5hZ2VtZW50LCBkaWxhcGlkYXRpb25zIGFuZCBtb3JlLlwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Ake3NpdGV9L2B9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiQ0xNIENvbnN1bHRpbmcg4oCUIEJ1aWxkaW5nIENvbnN1bHRhbmN5ICYgUXVhbnRpdHkgU3VydmV5aW5nXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJJbmRlcGVuZGVudCBidWlsZGluZyBjb25zdWx0YW5jeSBhbmQgcXVhbnRpdHkgc3VydmV5aW5nIHNlcnZpY2VzIGFjcm9zcyBHbG91Y2VzdGVyc2hpcmUgYW5kIHRoZSBTb3V0aCBXZXN0LlwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YCR7c2l0ZX0vYH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YCR7c2l0ZX0vb2ctaW1hZ2Uuc3ZnYH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCIxMjAwXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiNjMwXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTphbHRcIiBjb250ZW50PVwiQ0xNIENvbnN1bHRpbmcg4oCUIEluZGVwZW5kZW50IEJ1aWxkaW5nIENvbnN1bHRhbmN5ICYgUXVhbnRpdHkgU3VydmV5aW5nLCBHbG91Y2VzdGVyc2hpcmVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2Ake3NpdGV9L29nLWltYWdlLnN2Z2B9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlOmFsdFwiIGNvbnRlbnQ9XCJDTE0gQ29uc3VsdGluZyDigJQgSW5kZXBlbmRlbnQgQnVpbGRpbmcgQ29uc3VsdGFuY3kgJiBRdWFudGl0eSBTdXJ2ZXlpbmcsIEdsb3VjZXN0ZXJzaGlyZVwiIC8+XG4gICAgICAgIDxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIj57SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICdAY29udGV4dCc6ICdodHRwczovL3NjaGVtYS5vcmcnLFxuICAgICAgICAgICdAZ3JhcGgnOiBbe1xuICAgICAgICAgICAgJ0B0eXBlJzogJ1dlYlNpdGUnLFxuICAgICAgICAgICAgJ0BpZCc6IGAke3NpdGV9LyN3ZWJzaXRlYCxcbiAgICAgICAgICAgIG5hbWU6ICdDTE0gQ29uc3VsdGluZycsXG4gICAgICAgICAgICB1cmw6IGAke3NpdGV9L2BcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAnQHR5cGUnOiAnUHJvZmVzc2lvbmFsU2VydmljZScsXG4gICAgICAgICAgICAnQGlkJzogYCR7c2l0ZX0vI29yZ2FuaXphdGlvbmAsXG4gICAgICAgICAgICBuYW1lOiAnQ0xNIENvbnN1bHRpbmcnLFxuICAgICAgICAgICAgdXJsOiBgJHtzaXRlfS9gLFxuICAgICAgICAgICAgbG9nbzogYCR7c2l0ZX0vb2ctaW1hZ2Uuc3ZnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSW5kZXBlbmRlbnQgYnVpbGRpbmcgY29uc3VsdGFuY3kgYW5kIHF1YW50aXR5IHN1cnZleWluZyBwcmFjdGljZSBiYXNlZCBpbiBHbG91Y2VzdGVyc2hpcmUuJyxcbiAgICAgICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgICAgJ0B0eXBlJzogJ1Bvc3RhbEFkZHJlc3MnLFxuICAgICAgICAgICAgICBhZGRyZXNzUmVnaW9uOiAnR2xvdWNlc3RlcnNoaXJlJyxcbiAgICAgICAgICAgICAgYWRkcmVzc0NvdW50cnk6ICdHQidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcmVhU2VydmVkOiBbJ0dsb3VjZXN0ZXJzaGlyZScsICdXb3JjZXN0ZXJzaGlyZScsICdPeGZvcmRzaGlyZScsICdXaWx0c2hpcmUnLCAnQnJpc3RvbCcsICdTb3V0aCBXZXN0IEVuZ2xhbmQnXSxcbiAgICAgICAgICAgIGtub3dzQWJvdXQ6IFsnUXVhbnRpdHkgU3VydmV5aW5nJywgJ0J1aWxkaW5nIENvbnN1bHRhbmN5JywgJ1Byb2plY3QgTWFuYWdlbWVudCcsICdDb250cmFjdCBBZG1pbmlzdHJhdGlvbicsICdEaWxhcGlkYXRpb25zJywgJ0NvbmRpdGlvbiBTdXJ2ZXlzJ11cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAnQHR5cGUnOiAnV2ViUGFnZScsXG4gICAgICAgICAgICAnQGlkJzogYCR7c2l0ZX0vI3dlYnBhZ2VgLFxuICAgICAgICAgICAgdXJsOiBgJHtzaXRlfS9gLFxuICAgICAgICAgICAgaXNQYXJ0T2Y6IHtcbiAgICAgICAgICAgICAgJ0BpZCc6IGAke3NpdGV9LyN3ZWJzaXRlYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFib3V0OiB7XG4gICAgICAgICAgICAgICdAaWQnOiBgJHtzaXRlfS8jb3JnYW5pemF0aW9uYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGVQdWJsaXNoZWQ6ICcyMDI2LTA4LTE3JyxcbiAgICAgICAgICAgIGRhdGVNb2RpZmllZDogJzIwMjYtMDgtMTcnXG4gICAgICAgICAgfV1cbiAgICAgICAgfSl9PC9zY3JpcHQ+XG4gICAgICA8L0hlbG1ldD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIHsvKiDilIDilIAgSEVSTyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlblwiIHN0eWxlPXt7XG4gICAgICAgIHBhZGRpbmdUb3A6ICc5NnB4J1xuICAgICAgfX0gYXJpYS1sYWJlbD1cIkhlcm9cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9haXJvLWFzc2V0cy9pbWFnZXMvcGFnZXMvaG9tZS9oZXJvXCIgYWx0PVwiXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiIGxvYWRpbmc9XCJlYWdlclwiIGZldGNoUHJpb3JpdHk9XCJoaWdoXCIgLz5cbiAgICAgICAgICB7LyogT3ZlcmxheSDigJQgdXNlcyBDU1MgY2xhc3MgdG8gYXZvaWQgaW5saW5lIGNvbG9yIGxpdGVyYWxzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBwb2ludGVyLWV2ZW50cy1ub25lIGNsbS1oZXJvLW92ZXJsYXlcIiAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIG1heC13LTV4bCBteC1hdXRvIHB4LTYgbGc6cHgtOCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICA8bW90aW9uLnNwYW4gY2xhc3NOYW1lPVwiY2xtLWdvbGQtcnVsZSBteC1hdXRvIG1iLThcIiBpbml0aWFsPXt7XG4gICAgICAgICAgICBzY2FsZVg6IDBcbiAgICAgICAgICB9fSBhbmltYXRlPXt7XG4gICAgICAgICAgICBzY2FsZVg6IDFcbiAgICAgICAgICB9fSB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgICAgICAgZWFzZTogJ2Vhc2VPdXQnIGFzIGNvbnN0LFxuICAgICAgICAgICAgZGVsYXk6IDAuMlxuICAgICAgICAgIH19IHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0J1xuICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgIDxtb3Rpb24uaDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC01eGwgbGc6dGV4dC02eGwgZm9udC1ib2xkIGxlYWRpbmctdGlnaHQgbWItNlwiIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250RmFtaWx5OiAndmFyKC0tZm9udC1oZWFkaW5nKScsXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDJlbSdcbiAgICAgICAgICB9fSBpbml0aWFsPXt7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgeTogMzBcbiAgICAgICAgICB9fSBhbmltYXRlPXt7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICAgIH19IHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjY1LFxuICAgICAgICAgICAgZWFzZTogJ2Vhc2VPdXQnIGFzIGNvbnN0LFxuICAgICAgICAgICAgZGVsYXk6IDAuM1xuICAgICAgICAgIH19PlxuICAgICAgICAgICAgICB7aG9tZS5oZXJvLmhlYWRsaW5lfVxuICAgICAgICAgICAgPC9tb3Rpb24uaDE+XG5cbiAgICAgICAgICAgIDxtb3Rpb24ucCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQteGwgbWF4LXctMnhsIG14LWF1dG8gbWItMTAgbGVhZGluZy1yZWxheGVkIGNsbS1oZXJvLXN1YlwiIGluaXRpYWw9e3tcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICB5OiAyMFxuICAgICAgICAgIH19IGFuaW1hdGU9e3tcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgICAgfX0gdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICAgIGVhc2U6ICdlYXNlT3V0JyBhcyBjb25zdCxcbiAgICAgICAgICAgIGRlbGF5OiAwLjVcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAge2hvbWUuaGVyby5zdWJoZWFkbGluZX1cbiAgICAgICAgICAgIDwvbW90aW9uLnA+XG5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTQganVzdGlmeS1jZW50ZXJcIiBpbml0aWFsPXt7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgeTogMTZcbiAgICAgICAgICB9fSBhbmltYXRlPXt7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICAgIH19IHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjU1LFxuICAgICAgICAgICAgZWFzZTogJ2Vhc2VPdXQnIGFzIGNvbnN0LFxuICAgICAgICAgICAgZGVsYXk6IDAuNjVcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2VydmljZXNcIiBjbGFzc05hbWU9XCJjbG0tYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICB7aG9tZS5oZXJvLmN0YV9wcmltYXJ5fVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJjbG0tYnRuLW91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICB7aG9tZS5oZXJvLmN0YV9zZWNvbmRhcnl9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBTY3JvbGwgaW5kaWNhdG9yICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTggbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiBwb2ludGVyLWV2ZW50cy1ub25lXCI+XG4gICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJjbG0tc2Nyb2xsLWxpbmVcIiBhbmltYXRlPXt7XG4gICAgICAgICAgICB5OiBbMCwgOCwgMF1cbiAgICAgICAgICB9fSB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICBkdXJhdGlvbjogMS44LFxuICAgICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcbiAgICAgICAgICAgIGVhc2U6ICdlYXNlSW5PdXQnIGFzIGNvbnN0XG4gICAgICAgICAgfX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiDilIDilIAgQ09NUEFOWSBJTlRSTyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTI0IGJnLWJhY2tncm91bmRcIiBhcmlhLWxhYmVsPVwiQWJvdXQgQ0xNIENvbnN1bHRpbmdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0yIGdhcC0xNiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e3N0YWdnZXJ9IGluaXRpYWw9XCJoaWRkZW5cIiB3aGlsZUluVmlldz1cInZpc2libGVcIiB2aWV3cG9ydD17e1xuICAgICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgICBtYXJnaW46ICctODBweCdcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uc3BhbiBjbGFzc05hbWU9XCJjbG0tZ29sZC1ydWxlIG1iLTZcIiB2YXJpYW50cz17ZmFkZVVwfSAvPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uaDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBtYi02IGxlYWRpbmctdGlnaHRcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICd2YXIoLS1mb250LWhlYWRpbmcpJyxcbiAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDJlbSdcbiAgICAgICAgICAgICAgfX0gdmFyaWFudHM9e2ZhZGVVcH0+XG4gICAgICAgICAgICAgICAgICB7aG9tZS5pbnRyby5oZWFkaW5nfVxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmgyPlxuICAgICAgICAgICAgICAgIHtob21lLmludHJvLmJvZHkubWFwKHAgPT4gPG1vdGlvbi5wIGtleT17cC5pZH0gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGxlYWRpbmctcmVsYXhlZCBtYi00IHRleHQtYmFzZVwiIHZhcmlhbnRzPXtmYWRlVXB9PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cC50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnA+KX1cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJtdC04XCIgdmFyaWFudHM9e2ZhZGVVcH0+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiIGNsYXNzTmFtZT1cImNsbS1idG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBBYm91dCBDTE0gQ29uc3VsdGluZ1xuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtzdGFnZ2VyfSBpbml0aWFsPVwiaGlkZGVuXCIgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCIgdmlld3BvcnQ9e3tcbiAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgbWFyZ2luOiAnLTgwcHgnXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7aG9tZS5pbnRyby5jcmVkZW50aWFscy5tYXAoYyA9PiA8bW90aW9uLmRpdiBrZXk9e2MuaWR9IGNsYXNzTmFtZT1cImZsZXggZ2FwLTUgcHktNSBib3JkZXItYiBib3JkZXItYm9yZGVyIGxhc3Q6Ym9yZGVyLTBcIiB2YXJpYW50cz17ZmFkZVVwfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xtLWdvbGQtcnVsZS1zbSBtdC0yIHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCB0ZXh0LXNtIG1iLTFcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAndmFyKC0tZm9udC1oZWFkaW5nKSdcbiAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2MubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjLmRldGFpbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj4pfVxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiDilIDilIAgU0VSVklDRVMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0yNCBiZy1tdXRlZFwiIGFyaWEtbGFiZWw9XCJTZXJ2aWNlc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgbWItMTZcIiB2YXJpYW50cz17c3RhZ2dlcn0gaW5pdGlhbD1cImhpZGRlblwiIHdoaWxlSW5WaWV3PVwidmlzaWJsZVwiIHZpZXdwb3J0PXt7XG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgbWFyZ2luOiAnLTgwcHgnXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxtb3Rpb24uc3BhbiBjbGFzc05hbWU9XCJjbG0tZ29sZC1ydWxlIG1iLTZcIiB2YXJpYW50cz17ZmFkZVVwfSAvPlxuICAgICAgICAgICAgICA8bW90aW9uLmgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmQgbWItNCBsZWFkaW5nLXRpZ2h0XCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ3ZhcigtLWZvbnQtaGVhZGluZyknLFxuICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDJlbSdcbiAgICAgICAgICAgIH19IHZhcmlhbnRzPXtmYWRlVXB9PlxuICAgICAgICAgICAgICAgIHtob21lLnNlcnZpY2VzLmhlYWRpbmd9XG4gICAgICAgICAgICAgIDwvbW90aW9uLmgyPlxuICAgICAgICAgICAgICA8bW90aW9uLnAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGxlYWRpbmctcmVsYXhlZFwiIHZhcmlhbnRzPXtmYWRlVXB9PlxuICAgICAgICAgICAgICAgIDxzcGFuPntob21lLnNlcnZpY2VzLmludHJvfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNlwiIHZhcmlhbnRzPXtzdGFnZ2VyfSBpbml0aWFsPVwiaGlkZGVuXCIgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCIgdmlld3BvcnQ9e3tcbiAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgICAgICBtYXJnaW46ICctNjBweCdcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAge2hvbWUuc2VydmljZXMuaXRlbXMubWFwKChzLCBpKSA9PiA8bW90aW9uLmRpdiBrZXk9e3MuaWR9IGNsYXNzTmFtZT1cImNsbS1zZXJ2aWNlLWNhcmRcIiB2YXJpYW50cz17ZmFkZVVwfT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIG1iLTQgY2xtLWFjY2VudC10ZXh0XCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAndmFyKC0tZm9udC1oZWFkaW5nKSdcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDB7aSArIDF9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0zIGxlYWRpbmctc251Z1wiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ3ZhcigtLWZvbnQtaGVhZGluZyknXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtc20gbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntzLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+KX1cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwibXQtMTIgdGV4dC1jZW50ZXJcIiBpbml0aWFsPXt7XG4gICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgfX0gd2hpbGVJblZpZXc9e3tcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICB9fSB2aWV3cG9ydD17e1xuICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgIH19IHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgICBkZWxheTogMC4zXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NlcnZpY2VzXCIgY2xhc3NOYW1lPVwiY2xtLWJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgVmlldyBBbGwgU2VydmljZXNcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIOKUgOKUgCBXSFkgQ0hPT1NFIFVTIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjQgYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZFwiIGFyaWEtbGFiZWw9XCJXaHkgY2hvb3NlIENMTSBDb25zdWx0aW5nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIm1heC13LXhsIG1iLTE2XCIgdmFyaWFudHM9e3N0YWdnZXJ9IGluaXRpYWw9XCJoaWRkZW5cIiB3aGlsZUluVmlldz1cInZpc2libGVcIiB2aWV3cG9ydD17e1xuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgIG1hcmdpbjogJy04MHB4J1xuICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8bW90aW9uLnNwYW4gY2xhc3NOYW1lPVwiY2xtLWdvbGQtcnVsZSBtYi02XCIgdmFyaWFudHM9e2ZhZGVVcH0gLz5cbiAgICAgICAgICAgICAgPG1vdGlvbi5oMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgbGVhZGluZy10aWdodFwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICd2YXIoLS1mb250LWhlYWRpbmcpJyxcbiAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjAyZW0nXG4gICAgICAgICAgICB9fSB2YXJpYW50cz17ZmFkZVVwfT5cbiAgICAgICAgICAgICAgICB7aG9tZS53aHkuaGVhZGluZ31cbiAgICAgICAgICAgICAgPC9tb3Rpb24uaDI+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTBcIiB2YXJpYW50cz17c3RhZ2dlcn0gaW5pdGlhbD1cImhpZGRlblwiIHdoaWxlSW5WaWV3PVwidmlzaWJsZVwiIHZpZXdwb3J0PXt7XG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgbWFyZ2luOiAnLTYwcHgnXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIHtob21lLndoeS5pdGVtcy5tYXAodyA9PiA8bW90aW9uLmRpdiBrZXk9e3cuaWR9IGNsYXNzTmFtZT1cImNsbS13aHktY2FyZFwiIHZhcmlhbnRzPXtmYWRlVXB9PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0zIGNsbS1hY2NlbnQtdGV4dFwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ3ZhcigtLWZvbnQtaGVhZGluZyknXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWQgY2xtLXdoeS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt3LmJvZHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj4pfVxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIOKUgOKUgCBDT05UQUNUIENUQSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTIwIGJnLWJhY2tncm91bmQgYm9yZGVyLXQgYm9yZGVyLWJvcmRlclwiIGFyaWEtbGFiZWw9XCJDb250YWN0IGNhbGwgdG8gYWN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBweC02IGxnOnB4LTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtzdGFnZ2VyfSBpbml0aWFsPVwiaGlkZGVuXCIgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCIgdmlld3BvcnQ9e3tcbiAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgICAgICBtYXJnaW46ICctNjBweCdcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cImNsbS1nb2xkLXJ1bGUgbXgtYXV0byBtYi04XCIgdmFyaWFudHM9e2ZhZGVVcH0gLz5cbiAgICAgICAgICAgICAgPG1vdGlvbi5oMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTQgbGVhZGluZy10aWdodFwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICd2YXIoLS1mb250LWhlYWRpbmcpJyxcbiAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjAyZW0nXG4gICAgICAgICAgICB9fSB2YXJpYW50cz17ZmFkZVVwfT5cbiAgICAgICAgICAgICAgICB7aG9tZS5jdGEuaGVhZGluZ31cbiAgICAgICAgICAgICAgPC9tb3Rpb24uaDI+XG4gICAgICAgICAgICAgIDxtb3Rpb24ucCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1sZyBtYi0xMCBtYXgtdy14bCBteC1hdXRvIGxlYWRpbmctcmVsYXhlZFwiIHZhcmlhbnRzPXtmYWRlVXB9PlxuICAgICAgICAgICAgICAgIDxzcGFuPntob21lLmN0YS5ib2R5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2ZhZGVVcH0+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cImNsbS1idG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAge2hvbWUuY3RhLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgIDwvPjtcbn1cbiJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvaW5kZXgudHN4In0=
