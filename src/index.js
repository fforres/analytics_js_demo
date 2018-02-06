import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import analytics from 'analytics.js';

const startAnalytics = () => {
    var analytics = window.analytics = window.analytics || [];
    if (!analytics.initialize) {
        if (analytics.invoked) {
            window.console && console.error && console.error("Segment snippet included twice.");
        }
        else {
            analytics.invoked = !0;
            analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"];
            analytics.factory = function (t) {
                return function () {
                    var e = Array.prototype.slice.call(arguments);
                    e.unshift(t);
                    analytics.push(e);
                    return analytics
                }
            };
            for (var t = 0; t < analytics.methods.length; t++) {
                var e = analytics.methods[t];
                analytics[e] = analytics.factory(e)
            }
            analytics.load = function (t) {
                var e = document.createElement("script");
                e.type = "text/javascript";
                e.async = !0;
                e.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(e, n)
            };
            analytics.SNIPPET_VERSION = "4.0.0";
            analytics.load("KHeYQADG7NUTB0CGrhuR4wyAA3R5pbhi");
            analytics.page();
        }
    }
}

const identify = (e) => {
    e.preventDefault();
    var form = e.target;
    var email = form["email"].value;
    var fullname = form["fullname"].value;
    var destination = form["destination"].value;
    var details = form["details"].value;
    var user = {
        email: email, 
        name: fullname, 
        destination: destination, 
        details: details
    };
    analytics.identify(12345, {
        email: email, 
        name: fullname
    });
    analytics.track('destination submitted', user, function() {
        window.location.href = "";
    });
}


startAnalytics();
identify();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
