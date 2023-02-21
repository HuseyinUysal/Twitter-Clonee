var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-W2A5AY4D.css";

// app/root.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react7 = require("@remix-run/react");

// app/components/Feed.jsx
var import_react5 = require("react");

// app/components/Tweetbox.jsx
var import_react3 = require("react");

// app/firebase.jsx
var import_firebase = __toESM(require("firebase")), firebaseConfig = {
  apiKey: "AIzaSyDn6fq1QoJwPOkKi_zllBwt30PllJvbeDE",
  authDomain: "twitter-clone-bdb21.firebaseapp.com",
  projectId: "twitter-clone-bdb21",
  storageBucket: "twitter-clone-bdb21.appspot.com",
  messagingSenderId: "994810571733",
  appId: "1:994810571733:web:5753a02841ad1bc6356b5c",
  measurementId: "G-CXGVZ3WBMH"
}, firebaseApp = import_firebase.default.apps && import_firebase.default.apps.length > 0 ? import_firebase.default.apps[0] : import_firebase.default.initializeApp(firebaseConfig), db = firebaseApp.firestore(), firebase_default = db;

// app/components/Tweetbox.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function TweetBox() {
  let [tweetMessage, setTweetMessage] = (0, import_react3.useState)(""), [tweetImage, setTweetImage] = (0, import_react3.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "tweetBox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "tweetBox__input", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg", height: "50", width: "50", alt: "" }, void 0, !1, {
        fileName: "app/components/Tweetbox.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "textarea",
        {
          className: "w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700",
          rows: "2",
          onChange: (e) => setTweetMessage(e.target.value),
          value: tweetMessage,
          placeholder: "What's happening?",
          type: "text"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Tweetbox.jsx",
          lineNumber: 30,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Tweetbox.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "textarea",
      {
        value: tweetImage,
        onChange: (e) => setTweetImage(e.target.value),
        className: "w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700",
        placeholder: "Optional: Enter image URL",
        type: "text"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Tweetbox.jsx",
        lineNumber: 39,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "button",
      {
        onClick: (e) => {
          e.preventDefault(), firebase_default.collection("posts").add({
            displayName: "H\xFCseyin Uysal",
            username: "husso",
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
          }), setTweetMessage(""), setTweetImage("");
        },
        type: "submit",
        disabled: !tweetMessage.trim(),
        className: "bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50",
        children: "Tweet"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Tweetbox.jsx",
        lineNumber: 47,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Tweetbox.jsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Tweetbox.jsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
var Tweetbox_default = TweetBox;

// app/components/Post.jsx
var import_react4 = require("react"), import_outline = require("@heroicons/react/outline"), import_solid = require("@heroicons/react/solid"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Post({
  displayName,
  username,
  text,
  avatar,
  image
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex p-3 border-b border-gray-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-11 w-11 rounded-full mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar, alt: "" }, void 0, !1, {
      fileName: "app/components/Post.jsx",
      lineNumber: 23,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Post.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center space-x-1 whitespace-nowrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "font-bold text-[15px] sm:text-[16px] hover:underline", children: [
            displayName,
            " "
          ] }, void 0, !0, {
            fileName: "app/components/Post.jsx",
            lineNumber: 28,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-sm sm:text-[15px]", children: [
            "@",
            username
          ] }, void 0, !0, {
            fileName: "app/components/Post.jsx",
            lineNumber: 32,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Post.jsx",
          lineNumber: 27,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline.DotsHorizontalIcon, { className: "h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " }, void 0, !1, {
          fileName: "app/components/Post.jsx",
          lineNumber: 36,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Post.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-gray-800 text-[15px sm:text-[16px] mb-2", children: text }, void 0, !1, {
        fileName: "app/components/Post.jsx",
        lineNumber: 38,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "rounded-2xl mr-2", src: image, alt: "" }, void 0, !1, {
        fileName: "app/components/Post.jsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between text-gray-500 p-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center select-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline.ChatIcon, { className: "h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" }, void 0, !1, {
          fileName: "app/components/Post.jsx",
          lineNumber: 43,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Post.jsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline.TrashIcon, { className: "h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" }, void 0, !1, {
          fileName: "app/components/Post.jsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline.HeartIcon, { className: "h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100 focus:ring-red-300" }, void 0, !1, {
          fileName: "app/components/Post.jsx",
          lineNumber: 47,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Post.jsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline.ShareIcon, { className: "h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" }, void 0, !1, {
          fileName: "app/components/Post.jsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline.ChartBarIcon, { className: "h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" }, void 0, !1, {
          fileName: "app/components/Post.jsx",
          lineNumber: 50,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Post.jsx",
        lineNumber: 41,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Post.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Post.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/Feed.jsx
var import_outline2 = require("@heroicons/react/outline"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Feed() {
  let [posts, setPosts] = (0, import_react5.useState)([]);
  return (0, import_react5.useEffect)(() => {
    firebase_default.collection("posts").onSnapshot(
      (snapshot) => setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-lg sm:text-xl font-bold cursor-pointer", children: "Home" }, void 0, !1, {
        fileName: "app/components/Feed.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_outline2.SparklesIcon, { className: "h-5" }, void 0, !1, {
        fileName: "app/components/Feed.jsx",
        lineNumber: 23,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Feed.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Feed.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Tweetbox_default, {}, void 0, !1, {
      fileName: "app/components/Feed.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      Post,
      {
        displayName: post.displayName,
        username: post.username,
        text: post.text,
        avatar: post.avatar,
        image: post.image
      },
      post.text,
      !1,
      {
        fileName: "app/components/Feed.jsx",
        lineNumber: 30,
        columnNumber: 11
      },
      this
    ))
  ] }, void 0, !0, {
    fileName: "app/components/Feed.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
var Feed_default = Feed;

// app/components/Widget.jsx
var import_react6 = require("react"), import_outline3 = require("@heroicons/react/outline"), import_react_twitter_embed = require("react-twitter-embed"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Widget() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "xl:w-[600px] hidden lg:inline ml-8 space-y-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-[90%] xl:w-[75%] bg-white py-1.5 z-50 sticky top-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center p-3 rounded-full  relative sticky top-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_outline3.SearchIcon, { className: "h-5 z-50 text-gray-500" }, void 0, !1, {
        fileName: "app/components/Widget.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "input",
        {
          className: "absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100 ",
          type: "text",
          placeholder: "Search Twitter"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Widget.jsx",
          lineNumber: 14,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Widget.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Widget.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h4", { className: "font-bold text-xl px-4", children: "Whats happening" }, void 0, !1, {
        fileName: "app/components/Widget.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_twitter_embed.TwitterTweetEmbed, { tweetId: "1624685050615988224" }, void 0, !1, {
        fileName: "app/components/Widget.jsx",
        lineNumber: 23,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        import_react_twitter_embed.TwitterTimelineEmbed,
        {
          sourceType: "profile",
          screenName: "cleverqazi",
          options: { height: 400 }
        },
        void 0,
        !1,
        {
          fileName: "app/components/Widget.jsx",
          lineNumber: 24,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        import_react_twitter_embed.TwitterShareButton,
        {
          url: "https://facebook.com/cleverprogrammer",
          options: { text: "#reactjs is awesome", via: "cleverqazi" }
        },
        void 0,
        !1,
        {
          fileName: "app/components/Widget.jsx",
          lineNumber: 29,
          columnNumber: 10
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Widget.jsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Widget.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/SidebarMenuItem.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function SidebarMenuItem({ text, Icon, active }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Icon, { className: "h-7" }, void 0, !1, {
      fileName: "app/components/SidebarMenuItem.jsx",
      lineNumber: 4,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: `${active && "font-bold"} hidden xl:inline`, children: text }, void 0, !1, {
      fileName: "app/components/SidebarMenuItem.jsx",
      lineNumber: 5,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SidebarMenuItem.jsx",
    lineNumber: 3,
    columnNumber: 7
  }, this);
}

// app/components/Sidebar.jsx
var import_solid2 = require("@heroicons/react/solid"), import_outline4 = require("@heroicons/react/outline"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Sidebar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "hoverEffect p-0 hover:bg-blue-100 xl:px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "img",
      {
        width: "50",
        height: "50",
        src: "https://help.twitter.com/content/dam/help-twitter/brand/logo.png",
        alt: ""
      },
      void 0,
      !1,
      {
        fileName: "app/components/Sidebar.jsx",
        lineNumber: 21,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Sidebar.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-4 mb-2.5 xl:items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SidebarMenuItem, { text: "Home", Icon: import_solid2.HomeIcon, active: !0 }, void 0, !1, {
        fileName: "app/components/Sidebar.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SidebarMenuItem, { text: "Explore", Icon: import_outline4.HashtagIcon }, void 0, !1, {
        fileName: "app/components/Sidebar.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SidebarMenuItem, { text: "Notifications", Icon: import_outline4.BellIcon }, void 0, !1, {
        fileName: "app/components/Sidebar.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SidebarMenuItem, { text: "Messages", Icon: import_outline4.InboxIcon }, void 0, !1, {
        fileName: "app/components/Sidebar.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SidebarMenuItem, { text: "Bookmarks", Icon: import_outline4.BookmarkIcon }, void 0, !1, {
        fileName: "app/components/Sidebar.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SidebarMenuItem, { text: "Lists", Icon: import_outline4.ClipboardIcon }, void 0, !1, {
        fileName: "app/components/Sidebar.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SidebarMenuItem, { text: "Profile", Icon: import_outline4.UserIcon }, void 0, !1, {
        fileName: "app/components/Sidebar.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SidebarMenuItem, { text: "More", Icon: import_outline4.DotsCircleHorizontalIcon }, void 0, !1, {
        fileName: "app/components/Sidebar.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sidebar.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline", children: "Tweet" }, void 0, !1, {
      fileName: "app/components/Sidebar.jsx",
      lineNumber: 45,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "img",
        {
          src: "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
          alt: "user-img",
          className: "h-10 w-10 rounded-full xl:mr-2"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Sidebar.jsx",
          lineNumber: 52,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "leading-5 hidden xl:inline", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h4", { className: "font-bold", children: "H\xFCseyin UYSAL" }, void 0, !1, {
          fileName: "app/components/Sidebar.jsx",
          lineNumber: 58,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "text-gray-500", children: "@hussoo" }, void 0, !1, {
          fileName: "app/components/Sidebar.jsx",
          lineNumber: 59,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Sidebar.jsx",
        lineNumber: 57,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_outline4.DotsHorizontalIcon, { className: "h-5 xl:ml-8 hidden xl:inline" }, void 0, !1, {
        fileName: "app/components/Sidebar.jsx",
        lineNumber: 61,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sidebar.jsx",
      lineNumber: 51,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sidebar.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex min-h-screen mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Sidebar, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Feed_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Widget, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 8,
    columnNumber: 11
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "e0e5b39c", entry: { module: "/build/entry.client-YWEWUQSM.js", imports: ["/build/_shared/chunk-OHRJKM76.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DF47SKJ7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-CMUP5GTM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-E0E5B39C.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
