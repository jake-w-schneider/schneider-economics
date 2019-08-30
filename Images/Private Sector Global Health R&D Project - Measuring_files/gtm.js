
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"75",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Center Not Available",
      "vtp_name":"center"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",2],8,16],".split(\",\")[0]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Project Not Available",
      "vtp_name":"project"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",4],8,16],".split(\",\")[0]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Series Not Available",
      "vtp_name":"series"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",6],8,16],".split(\",\")[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002615==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002615==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002617==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002617==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002616==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002616==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002618==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002618==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002619==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002619==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002620==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002620==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002621==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002621==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002622==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002622==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002623==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002623==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002624==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002624==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002625==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002625==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002626==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002626==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002627==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002627==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002628==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002628==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002629==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002629==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002630==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002630==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonIdleTimeElapsed"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",24],8,16],"\/1E3})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Content Type Not Available",
      "vtp_name":"contentType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"topic"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"primaryTopic"
    },{
      "function":"__c",
      "vtp_value":"brookings.foxycart.com, secureacceptance.cybersource.com, hamiltonproject.org"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Author Not Available",
      "vtp_name":"author"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"emailSubscriber"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Program Not Available",
      "vtp_name":"program"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Blog Not Available",
      "vtp_name":"blog"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"datePublished"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"post_id Not Available",
      "vtp_name":"post_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"word_count Not Available",
      "vtp_name":"word_count"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page_title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"timePublished"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"monthPublished"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"yearPublished"
    },{
      "function":"__c",
      "vtp_value":"UA-11535316-1"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",27]],["map","index","2","group",["macro",28]],["map","index","3","group",["macro",29]],["map","index","4","group",["macro",30]]],
      "vtp_autoLinkDomains":["macro",31],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",32]],["map","index","2","dimension",["macro",27]],["map","index","3","dimension",["macro",28]],["map","index","4","dimension",["macro",33]],["map","index","5","dimension",["macro",29]],["map","index","6","dimension",["macro",30]],["map","index","7","dimension",["macro",5]],["map","index","8","dimension",["macro",3]],["map","index","9","dimension",["macro",34]],["map","index","10","dimension",["macro",7]],["map","index","11","dimension",["macro",35]],["map","index","12","dimension",["macro",36]],["map","index","31","dimension",["macro",37]],["map","index","32","dimension",["macro",38]],["map","index","33","dimension",["macro",39]],["map","index","38","dimension",["macro",40]],["map","index","39","dimension",["macro",41]],["map","index","40","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.videoAction"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.videoUrl"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"label"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.href.baseVal"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__c",
      "vtp_value":["macro",58]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.firstChild.href.baseVal"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",57],7],"\",b=\"",["escape",["macro",59],7],"\",c=\"",["escape",["macro",60],7],"\",d=c.includes(\"icon\"),e=a.includes(\"icon\"),f=b.includes(\"sharing_cancel\");return d?c:e?a:f?b:\"Not Set\"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":["macro",61],
      "vtp_map":["list",["map","key","#icon-social-facebook","value","Facebook"],["map","key","#icon-social-twitter","value","Twitter"],["map","key","#icon-share-linkedin","value","LinkedIn"],["map","key","#icon-action-print","value","Print"],["map","key","#icon-share-sms","value","SMS"],["map","key","#icon-share-email","value","Email"],["map","key","sharing_cancel","value","CancelledEmailSend"],["map","key","#icon-share-google","value","GooglePlus"],["map","key","#icon-share-reddit","value","Reddit"],["map","key","#icon-share-stumbleupon","value","StumbleUpon"],["map","key","#icon-social-wechat","value","WeChat"],["map","key","#icon-social-weibo","value","Weibo"]]
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",58],
      "vtp_defaultValue":"Not Set",
      "vtp_map":["list",["map","key","analytics-share-facebook","value","Facebook"],["map","key","analytics-share-twitter","value","Twitter"],["map","key","analytics-share-linkedin","value","LinkedIn"],["map","key","analytics-share-print","value","Print"],["map","key","analytics-share-sms","value","SMS"],["map","key","analytics-share-email","value","Email"],["map","key","analytics-share-google","value","GooglePlus"],["map","key","analytics-share-reddit","value","Reddit"],["map","key","analytics-share-stumbleupon","value","StumbleUpon"]]
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizely-dimension-number"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizely-dimension-value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizely-referrer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"newsletterSignup"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"submit-contextly"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contextly"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "convert_case_to":2,
      "vtp_stripWww":true,
      "vtp_component":"HOST",
      "vtp_customUrlSource":["macro",67],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__d",
      "vtp_elementSelector":"share-facebook|share-twitter",
      "vtp_attributeName":"class",
      "vtp_selectorType":"CSS"
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.baseURI"
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_customUrlSource":["macro",87],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__f"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__dbg"
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Videos",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":["macro",45],
      "vtp_eventLabel":["macro",46],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":4
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",27]],["map","index","2","group",["macro",28]],["map","index","3","group",["macro",29]],["map","index","4","group",["macro",30]]],
      "vtp_autoLinkDomains":["macro",31],
      "vtp_decorateFormsAutoLink":false,
      "vtp_gaSettings":["macro",44],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",32]],["map","index","2","dimension",["macro",27]],["map","index","3","dimension",["macro",28]],["map","index","4","dimension",["macro",33]],["map","index","5","dimension",["macro",29]],["map","index","7","dimension",["macro",5]],["map","index","8","dimension",["macro",3]],["map","index","9","dimension",["macro",34]],["map","index","10","dimension",["macro",7]],["map","index","6","dimension",["macro",30]],["map","index","11","dimension",["macro",35]],["map","index","12","dimension",["macro",36]],["map","index","15","dimension",["macro",8]],["map","index","16","dimension",["macro",10]],["map","index","17","dimension",["macro",9]],["map","index","18","dimension",["macro",11]],["map","index","19","dimension",["macro",12]],["map","index","20","dimension",["macro",13]],["map","index","21","dimension",["macro",14]],["map","index","22","dimension",["macro",15]],["map","index","23","dimension",["macro",16]],["map","index","24","dimension",["macro",17]],["map","index","25","dimension",["macro",18]],["map","index","26","dimension",["macro",19]],["map","index","27","dimension",["macro",20]],["map","index","28","dimension",["macro",21]],["map","index","29","dimension",["macro",22]],["map","index","30","dimension",["macro",23]],["map","index","31","dimension",["macro",37]],["map","index","32","dimension",["macro",38]],["map","index","33","dimension",["macro",39]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",48],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",28]]],
      "vtp_eventAction":["macro",49],
      "vtp_eventLabel":["macro",50],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",33]],["map","index","2","dimension",["macro",28]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"followExpert",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",27]],["map","index","2","group",["macro",28]],["map","index","3","group",["macro",29]],["map","index","4","group",["macro",30]]],
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":["macro",51],
      "vtp_eventLabel":["macro",53],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",32]],["map","index","2","dimension",["macro",27]],["map","index","3","dimension",["macro",28]],["map","index","5","dimension",["macro",29]],["map","index","6","dimension",["macro",30]],["map","index","7","dimension",["macro",5]],["map","index","8","dimension",["macro",3]],["map","index","9","dimension",["macro",34]],["map","index","10","dimension",["macro",7]],["map","index","11","dimension",["macro",35]],["map","index","12","dimension",["macro",36]],["map","index","4","dimension",["macro",33]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"contentSharing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",51],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"newsletterSignup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",27]],["map","index","2","group",["macro",28]],["map","index","3","group",["macro",29]],["map","index","4","group",["macro",30]]],
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"submit",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","4","dimension","yes"],["map","index","1","dimension",["macro",32]],["map","index","2","dimension",["macro",27]],["map","index","3","dimension",["macro",28]],["map","index","5","dimension",["macro",29]],["map","index","6","dimension",["macro",30]],["map","index","7","dimension",["macro",5]],["map","index","8","dimension",["macro",3]],["map","index","9","dimension",["macro",34]],["map","index","10","dimension",["macro",7]],["map","index","11","dimension",["macro",35]],["map","index","12","dimension",["macro",36]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"followUsClick",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":"share",
      "vtp_enableLinkId":false,
      "vtp_socialActionTarget":["macro",53],
      "vtp_socialNetwork":["macro",51],
      "vtp_trackingId":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",54],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":["macro",55],
      "vtp_eventLabel":["macro",56],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":"share",
      "vtp_gaSettings":["macro",44],
      "vtp_socialActionTarget":["macro",53],
      "vtp_socialNetwork":["macro",62],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"contentSharing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"share",
      "vtp_eventLabel":["macro",62],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"eventRegistration",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":["macro",64],
      "vtp_eventLabel":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"PDF",
      "vtp_eventLabel":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"993291021",
      "vtp_conversionLabel":"orLfCISc_2IQjdbR2QM",
      "vtp_url":["macro",66],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":28
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"993291021",
      "vtp_conversionLabel":"0n-FCMuIrWQQjdbR2QM",
      "vtp_url":["macro",66],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":29
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"993291021",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",66],
      "tag_id":30
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"993291021",
      "vtp_conversionLabel":"G7inCP2w4mcQjdbR2QM",
      "vtp_url":["macro",66],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":31
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventValue":["macro",68],
      "vtp_eventCategory":["macro",69],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",70],
      "vtp_eventLabel":["macro",71],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":42
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventValue":"1",
      "vtp_eventCategory":"All",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"iTunes Subscribes",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-11535316-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",48],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":["macro",49],
      "vtp_eventLabel":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":49
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"contentSharing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"more",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"contentSharing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"share",
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"MultichapterReport",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"download",
      "vtp_eventLabel":["template",["macro",74],["macro",67]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Audio",
      "vtp_eventLabel":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Video",
      "vtp_eventLabel":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":56
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"MS Office Word",
      "vtp_eventLabel":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":57
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"MS Office Excel",
      "vtp_eventLabel":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":58
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"MS Office Power Point",
      "vtp_eventLabel":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":59
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"CSV",
      "vtp_eventLabel":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Optimizely",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Assigned to Campaign",
      "vtp_dimension":["list",["map","index",["macro",75],"dimension",["macro",76]]],
      "vtp_trackingId":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":62
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","Field Name","value","referrer"],["map","fieldName","Value","value",["macro",77]]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_trackingId":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",78],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":["macro",79],
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":64
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",48],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":["macro",49],
      "vtp_eventLabel":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":65
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Trending",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Trending Bar",
      "vtp_eventLabel":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":66
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Related",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Related Module",
      "vtp_eventLabel":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Related",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Related Topics",
      "vtp_eventLabel":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":68
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Topic",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Topic Bar",
      "vtp_eventLabel":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":69
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":70
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"993291021",
      "vtp_conversionLabel":"tbtYCNn9_oABEI3W0dkD",
      "vtp_url":["macro",66],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":71
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":"Engaged Time",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","1","metric",["macro",25]]],
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":["macro",81],
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":75
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Non Bounce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Interaction",
      "vtp_eventLabel":"15 seconds",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":77
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Outbound Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":["macro",82],
      "vtp_eventLabel":["macro",67],
      "vtp_dimension":["list",["map","index","2","dimension",["macro",27]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":78
    },{
      "function":"__cl",
      "tag_id":79
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2341590_9",
      "tag_id":80
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2341590_15",
      "tag_id":81
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2341590_16",
      "tag_id":82
    },{
      "function":"__cl",
      "tag_id":83
    },{
      "function":"__cl",
      "tag_id":84
    },{
      "function":"__fsl",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2341590_19",
      "tag_id":85
    },{
      "function":"__cl",
      "tag_id":86
    },{
      "function":"__cl",
      "tag_id":87
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2341590_33",
      "tag_id":88
    },{
      "function":"__cl",
      "tag_id":89
    },{
      "function":"__cl",
      "tag_id":90
    },{
      "function":"__cl",
      "tag_id":91
    },{
      "function":"__cl",
      "tag_id":92
    },{
      "function":"__cl",
      "tag_id":93
    },{
      "function":"__cl",
      "tag_id":94
    },{
      "function":"__cl",
      "tag_id":95
    },{
      "function":"__cl",
      "tag_id":96
    },{
      "function":"__cl",
      "tag_id":97
    },{
      "function":"__cl",
      "tag_id":98
    },{
      "function":"__cl",
      "tag_id":99
    },{
      "function":"__cl",
      "tag_id":100
    },{
      "function":"__cl",
      "tag_id":101
    },{
      "function":"__cl",
      "tag_id":102
    },{
      "function":"__cl",
      "tag_id":103
    },{
      "function":"__cl",
      "tag_id":104
    },{
      "function":"__cl",
      "tag_id":105
    },{
      "function":"__cl",
      "tag_id":106
    },{
      "function":"__cl",
      "tag_id":107
    },{
      "function":"__cl",
      "tag_id":108
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2341590_94",
      "tag_id":109
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2341590_96",
      "tag_id":110
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2341590_98",
      "tag_id":111
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2341590_105",
      "tag_id":112
    },{
      "function":"__cl",
      "tag_id":113
    },{
      "function":"__cl",
      "tag_id":114
    },{
      "function":"__cl",
      "tag_id":115
    },{
      "function":"__cl",
      "tag_id":116
    },{
      "function":"__cl",
      "tag_id":117
    },{
      "function":"__cl",
      "tag_id":118
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2341590_136",
      "tag_id":119
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2341590_137",
      "tag_id":120
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2341590_138",
      "tag_id":121
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2341590_140",
      "tag_id":122
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2341590_164",
      "tag_id":123
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"gtm-youtube-tracking\"\u003E(function(h,f,k){function m(){var b=[].slice.call(h.getElementsByTagName(\"iframe\")).concat([].slice.call(h.getElementsByTagName(\"embed\"))),a;for(a=0;a\u003Cb.length;a++){var d=n(b[a]);if(d){d=b[a];var e=f.location,c=h.createElement(\"a\");c.href=d.src;c.hostname=\"www.youtube.com\";c.protocol=e.protocol;var g=\"\/\"===c.pathname.charAt(0)?c.pathname:\"\/\"+c.pathname;-1\u003Cc.search.indexOf(\"enablejsapi\")||(c.search=(0\u003Cc.search.length?c.search+\"\\x26\":\"\")+\"enablejsapi\\x3d1\");if(!(-1\u003Cc.search.indexOf(\"origin\"))\u0026\u0026-1===\ne.hostname.indexOf(\"localhost\")){var w=e.port?\":\"+e.port:\"\";e=e.protocol+\"%2F%2F\"+e.hostname+w;c.search=c.search+\"\\x26origin\\x3d\"+e}\"application\/x-shockwave-flash\"===d.type\u0026\u0026(e=h.createElement(\"iframe\"),e.height=d.height,e.width=d.width,g=g.replace(\"\/v\/\",\"\/embed\/\"),d.parentNode.parentNode.replaceChild(e,d.parentNode),d=e);c.pathname=g;d.src!==c.href+c.hash\u0026\u0026(d.src=c.href+c.hash);p(d)}}\"addEventListener\"in h\u0026\u0026h.addEventListener(\"load\",x,!0)}function n(b){b=b.src||\"\";return-1\u003Cb.indexOf(\"youtube.com\/embed\/\")||\n-1\u003Cb.indexOf(\"youtube.com\/v\/\")?!0:!1}function p(b){var a=YT.get(b.id);a||(a=new YT.Player(b,{}));\"undefined\"===typeof b.pauseFlag\u0026\u0026(b.pauseFlag=!1,a.addEventListener(\"onStateChange\",function(a){y(a,b)}))}function z(b){var a={};g.events[\"Watch to End\"]\u0026\u0026(a[\"Watch to End\"]=Math.min(b-3,Math.floor(.99*b)));if(g.percentageTracking){var d=[],e;g.percentageTracking.each\u0026\u0026(d=d.concat(g.percentageTracking.each));if(g.percentageTracking.every){var c=parseInt(g.percentageTracking.every,10),f=100\/c;for(e=1;e\u003C\nf;e++)d.push(e*c)}for(e=0;e\u003Cd.length;e++)f=d[e],c=f+\"%\",f=b*f\/100,a[c]=Math.floor(f)}return a}function y(b,a){var d=b.data,e=b.target,c=e.getVideoUrl();c=c.match(\/[?\u0026]v=([^\u0026#]*)\/)[1];var f=e.getPlayerState(),g=Math.floor(e.getDuration()),h=z(g);g={1:\"Play\",2:\"Pause\"};g=g[d];a.playTracker=a.playTracker||{};1!==f||a.timer?(clearInterval(a.timer),a.timer=!1):(clearInterval(a.timer),a.timer=setInterval(function(){var b=e,d=h,c=a.videoId,g=b.getCurrentTime(),f;b[c]=b[c]||{};for(f in d)d[f]\u003C=g\u0026\u0026!b[c][f]\u0026\u0026\n(b[c][f]=!0,q(c,f))},1E3));1===d\u0026\u0026(a.playTracker[c]=!0,a.videoId=c,a.pauseFlag=!1);if(!a.playTracker[a.videoId])return!1;if(2===d){if(a.pauseFlag)return!1;a.pauseFlag=!0}r[g]\u0026\u0026q(a.videoId,g)}function q(b,a){var d=\"https:\/\/www.youtube.com\/watch?v\\x3d\"+b,e=f.GoogleAnalyticsObject;if(\"undefined\"===typeof f[t]||g.forceSyntax)if(\"function\"===typeof f[e]\u0026\u0026\"function\"===typeof f[e].getAll\u0026\u00262!==g.forceSyntax)f[e](\"send\",\"event\",\"Videos\",a,d);else\"undefined\"!==typeof f._gaq\u0026\u00261!==A\u0026\u0026f._gaq.push([\"_trackEvent\",\n\"Videos\",a,d]);else f[t].push({event:\"youTubeTrack\",attributes:{videoUrl:d,videoAction:a}})}function u(b,a,d){if(b.addEventListener)b.addEventListener(a,d);else if(b.attachEvent)b.attachEvent(\"on\"+a,function(a){a.target=a.target||a.srcElement;d.call(b,a)});else if(\"undefined\"===typeof b[\"on\"+a]||null===b[\"on\"+a])b[\"on\"+a]=function(a){a.target=a.target||a.srcElement;d.call(b,a)}}function x(b){b=b.target||b.srcElement;var a=n(b);\"IFRAME\"===b.tagName\u0026\u0026a\u0026\u0026-1\u003Cb.src.indexOf(\"enablejsapi\")\u0026\u0026-1\u003Cb.src.indexOf(\"origin\")\u0026\u0026\np(b)}var g=k||{},A=g.forceSyntax||0,t=g.dataLayerName||\"dataLayer\",r={Play:!0,Pause:!0,\"Watch to End\":!0},l;k=h.createElement(\"script\");k.src=\"\/\/www.youtube.com\/iframe_api\";var v=h.getElementsByTagName(\"script\")[0];v.parentNode.insertBefore(k,v);for(l in g.events)g.events.hasOwnProperty(l)\u0026\u0026(r[l]=g.events[l]);f.onYouTubeIframeAPIReady=function(){var b=f.onYouTubeIframeAPIReady;return function(){b\u0026\u0026b.apply(this,arguments);navigator.userAgent.match(\/MSIE [67]\\.\/gi)||(\"loading\"!==h.readyState?m():h.addEventListener?\nu(h,\"DOMContentLoaded\",m):u(f,\"load\",m))}}()})(document,window,{events:{Play:!0,Pause:!0,\"Watch to End\":!0},percentageTracking:{every:25,each:[10,90]}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\/*\n @preserve\n jquery.scrolldepth.js | v0.9.1\n Copyright (c) 2016 Rob Flaherty (@robflaherty)\n Licensed under the MIT and GPL licenses.\n*\/\n!function(b){\"function\"==typeof define\u0026\u0026define.amd?define([\"jquery\"],b):\"object\"==typeof module\u0026\u0026module.exports?module.exports=b(require(\"jquery\")):b(jQuery)}(function(b){var n,r,k,h,u={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0,gaGlobal:!1,gtmOverride:!1},m=b(window),f=[],p=!1,e=0;b.scrollDepth=function(a){function t(c,b,d,l){h?(h({event:\"ScrollDistance\",eventCategory:\"Scroll Depth\",eventAction:c,eventLabel:b,eventValue:1,eventNonInteraction:a.nonInteraction}),\na.pixelDepth\u0026\u00262\u003Carguments.length\u0026\u0026d\u003Ee\u0026\u0026(e=d,h({event:\"ScrollDistance\",eventCategory:\"Scroll Depth\",eventAction:\"Pixel Depth\",eventLabel:(250*Math.floor(d\/250)).toString(),eventValue:1,eventNonInteraction:a.nonInteraction})),a.userTiming\u0026\u00263\u003Carguments.length\u0026\u0026h({event:\"ScrollTiming\",eventCategory:\"Scroll Depth\",eventAction:c,eventLabel:b,eventTiming:l})):(n\u0026\u0026(window[k](\"send\",\"event\",\"Scroll Depth\",c,b,1,{nonInteraction:a.nonInteraction}),a.pixelDepth\u0026\u00262\u003Carguments.length\u0026\u0026d\u003Ee\u0026\u0026(e=d,window[k](\"send\",\n\"event\",\"Scroll Depth\",\"Pixel Depth\",(250*Math.floor(d\/250)).toString(),1,{nonInteraction:a.nonInteraction})),a.userTiming\u0026\u00263\u003Carguments.length\u0026\u0026window[k](\"send\",\"timing\",\"Scroll Depth\",c,l,b)),r\u0026\u0026(_gaq.push([\"_trackEvent\",\"Scroll Depth\",c,b,1,a.nonInteraction]),a.pixelDepth\u0026\u00262\u003Carguments.length\u0026\u0026d\u003Ee\u0026\u0026(e=d,_gaq.push([\"_trackEvent\",\"Scroll Depth\",\"Pixel Depth\",(250*Math.floor(d\/250)).toString(),1,a.nonInteraction])),a.userTiming\u0026\u00263\u003Carguments.length\u0026\u0026_gaq.push([\"_trackTiming\",\"Scroll Depth\",c,l,b,100])))}\nfunction v(c,a,d){b.each(c,function(c,g){-1===b.inArray(c,f)\u0026\u0026a\u003E=g\u0026\u0026(t(\"Percentage\",c,a,d),f.push(c))})}function w(c,a,d){b.each(c,function(c,g){-1===b.inArray(g,f)\u0026\u0026b(g).length\u0026\u0026a\u003E=b(g).offset().top\u0026\u0026(t(\"Elements\",g,a,d),f.push(g))})}function x(c,a){var b,l,g,f=null,e=0,k=function(){e=new Date;f=null;g=c.apply(b,l)};return function(){var d=new Date;e||(e=d);var h=a-(d-e);return b=this,l=arguments,0\u003E=h?(clearTimeout(f),f=null,e=d,g=c.apply(b,l)):f||(f=setTimeout(k,h)),g}}function q(){p=!0;m.on(\"scroll.scrollDepth\",\nx(function(){var c=b(document).height(),e=window.innerHeight?window.innerHeight:m.height();e=m.scrollTop()+e;c={\"25%\":parseInt(.25*c,10),\"50%\":parseInt(.5*c,10),\"75%\":parseInt(.75*c,10),\"100%\":c-5};var d=+new Date-y;return f.length\u003E=a.elements.length+(a.percentage?4:0)?(m.off(\"scroll.scrollDepth\"),void(p=!1)):(a.elements\u0026\u0026w(a.elements,e,d),void(a.percentage\u0026\u0026v(c,e,d)))},500))}var y=+new Date;a=b.extend({},u,a);b(document).height()\u003Ca.minHeight||(a.gaGlobal?(n=!0,k=a.gaGlobal):\"function\"==typeof ga?\n(n=!0,k=\"ga\"):\"function\"==typeof __gaTracker\u0026\u0026(n=!0,k=\"__gaTracker\"),\"undefined\"!=typeof _gaq\u0026\u0026\"function\"==typeof _gaq.push\u0026\u0026(r=!0),\"function\"==typeof a.eventHandler?h=a.eventHandler:\"undefined\"==typeof dataLayer||\"function\"!=typeof dataLayer.push||a.gtmOverride||(h=function(a){dataLayer.push(a)}),b.scrollDepth.reset=function(){f=[];e=0;m.off(\"scroll.scrollDepth\");q()},b.scrollDepth.addElements=function(c){\"undefined\"!=typeof c\u0026\u0026b.isArray(c)\u0026\u0026(b.merge(a.elements,c),p||q())},b.scrollDepth.removeElements=\nfunction(c){\"undefined\"!=typeof c\u0026\u0026b.isArray(c)\u0026\u0026b.each(c,function(c,d){var e=b.inArray(d,a.elements),g=b.inArray(d,f);-1!=e\u0026\u0026a.elements.splice(e,1);-1!=g\u0026\u0026f.splice(g,1)})},q())}});\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(function(){jQuery.scrollDepth()});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EPARSELY.beacon.trackPageView({url:",["escape",["macro",47],8,16],",action:\"_followExpert\",data:{_expert_contact:",["escape",["macro",51],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EPARSELY.beacon.trackPageView({url:",["escape",["macro",47],8,16],",action:\"_newsletterSignUp\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":19
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EPARSELY.beacon.trackPageView({url:",["escape",["macro",47],8,16],",action:\"_contentSharing\",data:{_social_netwtork:",["escape",["macro",62],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":20
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EPARSELY.beacon.trackPageView({url:",["escape",["macro",47],8,16],",action:\"_followUsClick\",data:{_follow_us_path:",["escape",["macro",51],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":21
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EPARSELY.beacon.trackPageView({url:",["escape",["macro",47],8,16],",action:\"_pdfDownload\",data:{_file_downloaded:",["escape",["macro",84],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"6035041775053\",{value:\"0.00\",currency:\"USD\"}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6035041775053\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":32
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"345085416233014\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=345085416233014\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "setup_tags":["list",["tag",95,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_name:\"ECCIReport\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=392802544219059\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=ECCIReport\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "setup_tags":["list",["tag",95,1]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_name:\"ForesightAfricaReport_CH1\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=392802544219059\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=ForesightAfricaReport_CH1\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "setup_tags":["list",["tag",95,1]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_name:\"ForesightAfricaReport_CH5\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=392802544219059\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=ForesightAfricaReport_CH5\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "setup_tags":["list",["tag",95,1]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_name:\"ForesightAfricaReport_CH6\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=392802544219059\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=ForesightAfricaReport_CH6\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "setup_tags":["list",["tag",95,1]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_name:\"ForesightAfricaReport_CH3\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=392802544219059\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=ForesightAfricaReport_CH3\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__html",
      "setup_tags":["list",["tag",95,1]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_name:\"ForesightAfricaReport_Ch4\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=392802544219059\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=ForesightAfricaReport_Ch4\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "setup_tags":["list",["tag",95,1]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_name:\"ForesightAfricaReport_CH2\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=392802544219059\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=ForesightAfricaReport_CH2\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,c,d,a){b.twq||(a=b.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1\",a.queue=[],t=c.createElement(d),t.async=!0,t.src=\"\/\/static.ads-twitter.com\/uwt.js\",s=c.getElementsByTagName(d)[0],s.parentNode.insertBefore(t,s))}(window,document,\"script\");twq(\"init\",\"nv9bg\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_name:\"FDIP2016\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=392802544219059\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=FDIP2016\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar DATALAYER_OBJECT_NAME=\"dataLayer\",referrerOverride=function(d){var c=window[DATALAYER_OBJECT_NAME]||[];c.push({event:\"optimizely-referrer-override\",\"optimizely-referrer\":d})},sendCampaignData=function(d,c,h,g,f,k,b,a,e){if(g=optimizely.get(\"data\")\u0026\u0026optimizely.get(\"data\").campaigns[c]\u0026\u0026optimizely.get(\"data\").campaigns[c].integrationSettings\u0026\u0026optimizely.get(\"data\").campaigns[c].integrationSettings.google_universal_analytics\u0026\u0026optimizely.get(\"data\").campaigns[c].integrationSettings.google_universal_analytics.universal_analytics_slot)d=\nd?d+\"(\"+c+\")\":c,h=h.join(\",\"),f=f?f+\"(\"+k+\")\":h+\"(\"+k+\")\",b=b?b+\"(\"+a+\")\":a,e=e?\"holdback\":\"treatment\",e=[d,f,b,e].join(\":\"),b=window[DATALAYER_OBJECT_NAME]||[],b.push({event:\"campaign-decided\",\"optimizely-dimension-value\":e,\"optimizely-dimension-number\":g})},initNewOptimizelyIntegration=function(d,c){var h=!1,g=function(b){var a=window.optimizely.get\u0026\u0026window.optimizely.get(\"state\"),e=a.getRedirectInfo()\u0026\u0026a.getRedirectInfo().referrer;!h\u0026\u0026e\u0026\u0026(d(e),h=!0);a=a.getCampaignStates({isActive:!0});a=a[b];\ne=a.campaignName;if(0\u003Ca.audiences.length){var f=a.audiences.map(function(a){return a.name});var g=a.audiences.map(function(a){return a.id})}else f=[\"everyone_else\"],g=[0];var k=a.experiment.name,l=a.experiment.id,m=a.variation.name,n=a.variation.id;c(e,b,f,g,k,l,m,n,a.isInCampaignHoldback)},f=function(){window.optimizely=window.optimizely||[];window.optimizely.push({type:\"addListener\",filter:{type:\"lifecycle\",name:\"campaignDecided\"},handler:function(b){b=b.data.campaign.id;g(b)}})},k=function(){var b=\nwindow.optimizely.get\u0026\u0026window.optimizely.get(\"state\");if(b){b=b.getCampaignStates({isActive:!0});for(var a in b)g(a)}};k();f()},initOptimizelyIntegration=function(d,c){initNewOptimizelyIntegration(d,c)};initOptimizelyIntegration(referrerOverride,sendCampaignData);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var d=(new Date).getTime(),a=0,k=(new Date).getTime(),b=!0,g=!0,l,m=!1,h=0,n=function(){k=(new Date).getTime();a+=k-d;b=!0},e=function(a){b\u0026\u0026(b=!1,d=(new Date).getTime(),g=!1);window.clearTimeout(l);l=window.setTimeout(n,5E3)},c=function(a,b){window.addEventListener?window.addEventListener(a,b):window.attachEvent\u0026\u0026window.attachEvent(\"on\"+a,b)},f=function(c){b||(a+=(new Date).getTime()-d);h+=a;!g\u0026\u00260\u003Ca\u0026\u002636E5\u003Ea\u0026\u0026(window.dataLayer.push({event:\"nonIdle\",nonIdleTimeElapsed:a,nonIdleTotalEngaged:h}),\n13E3\u003C=h\u0026\u0026!m\u0026\u0026(window.dataLayer.push({event:\"15 seconds\"}),m=!0));b\u0026\u0026(g=!0);c\u0026\u0026\"beforeunload\"===c.type\u0026\u0026window.removeEventListener(\"beforeunload\",f);a=0;d=(new Date).getTime();window.setTimeout(f,15E3)};c(\"mousedown\",e);c(\"keydown\",e);c(\"scroll\",e);c(\"mousemove\",e);c(\"beforeunload\",f);window.setTimeout(f,15E3)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"youTubeTrack"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"newsletterSignUp"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.js"
    },{
      "function":"_css",
      "arg0":["macro",51],
      "arg1":".expert-contact a"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)2341590_15($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",51],
      "arg1":".sd-content a"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",51],
      "arg1":".newsletter input[type=submit]"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"\/newsletter"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)2341590_19($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"newsletterSignup"
    },{
      "function":"_css",
      "arg0":["macro",51],
      "arg1":".follow-us a"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)2341590_16($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"ScrollDistance"
    },{
      "function":"_re",
      "arg0":["macro",61],
      "arg1":"icon-social-facebook|icon-social-twitter|icon-share-linkedin|icon-share-sms|icon-action-print|icon-share-google|icon-share-stumbleupon|icon-share-reddit|icon-social-weibo|icon-social-wechat",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"icon-share-email",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",51],
      "arg1":".follow-us *"
    },{
      "function":"_cn",
      "arg0":["macro",58],
      "arg1":"sharing_cancel"
    },{
      "function":"_cn",
      "arg0":["macro",47],
      "arg1":"essay"
    },{
      "function":"_cn",
      "arg0":["macro",63],
      "arg1":"analytics-share"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)2341590_96($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"connect\\.brookings\\.edu",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)2341590_33($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"\\.pdf",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"Read chapter 3"
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"Read chapter 4"
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"Read chapter 5"
    },{
      "function":"_re",
      "arg0":["macro",65],
      "arg1":"Read chapter 1",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"Read chapter 2"
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"Read chapter 6"
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"Explore the full report"
    },{
      "function":"_cn",
      "arg0":["macro",67],
      "arg1":"http:\/\/www.brookings.edu\/~\/media\/Multimedia\/Interactives\/2016\/ecci\/final\/ecci_2015_final.pdf?la=en"
    },{
      "function":"_cn",
      "arg0":["macro",67],
      "arg1":"\/research\/interactives\/2016\/~\/media\/Multimedia\/Interactives\/2015\/ecci\/images\/pdf.png"
    },{
      "function":"_cn",
      "arg0":["macro",67],
      "arg1":"\/~\/media\/Multimedia\/Subscribe_on_iTunes_Badge.jpg"
    },{
      "function":"_cn",
      "arg0":["macro",47],
      "arg1":"the-medical-marijuana-mess"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"FinanceDimension|ArrowExpanded|MovingToAccess|americas-advanced-industries-2016",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"FinanceDimension|ArrowExpanded|MovingToAccess|americas-advanced-industries-2016"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"Interactive"
    },{
      "function":"_cn",
      "arg0":["macro",58],
      "arg1":"share-more"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)2341590_94($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",64],
      "arg1":"^\\.[A-Z]{3,4}$"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)2341590_105($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"\\.mp3|\\.flac|\\.wav|\\.aac|\\.ogg",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"\\.mp4|\\.mov|\\.avi",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"\\.doc|\\.docx",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"\\.xls|\\.xlsx",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"\\.ppt|\\.pptx",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"\\.csv",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"campaign-decided"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"optimizely-referrer-override"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"contextlySignupClick"
    },{
      "function":"_css",
      "arg0":["macro",51],
      "arg1":".trending-bar a"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)2341590_136($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",51],
      "arg1":".inline-widget .archive-event .title a, .inline-widget .report .title a, .inline-widget .report figure a, .inline-widget .book .title a, .inline-widget .book figure a, .linear-related .report .title a, .linear-related .report figure a"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)2341590_138($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",51],
      "arg1":".related-topics a"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)2341590_137($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",51],
      "arg1":"#menu-topic-menu a"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)2341590_140($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"nonIdle"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"15 seconds"
    },{
      "function":"_cn",
      "arg0":["macro",58],
      "arg1":"presidents-corner"
    },{
      "function":"_cn",
      "arg0":["macro",67],
      "arg1":"brookings.edu"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)2341590_164($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",53],
      "arg1":"\/experts\/"
    },{
      "function":"_cn",
      "arg0":["macro",53],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",53],
      "arg1":"\/events\/"
    },{
      "function":"_cn",
      "arg0":["macro",83],
      "arg1":"brookings"
    },{
      "function":"_cn",
      "arg0":["macro",81],
      "arg1":"multi-chapter-report"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"the-medical-marijuana-mess|the-citizen-soldier"
    },{
      "function":"_cn",
      "arg0":["macro",67],
      "arg1":"jhupbooks.press.jhu.edu\/ecom\/MasterServlet\/AddToCartFromExternalHandler"
    },{
      "function":"_cn",
      "arg0":["macro",74],
      "arg1":"\/media\/Research\/Files\/Reports\/2014\/diversity-explosion\/buy_button_amazon.png"
    },{
      "function":"_cn",
      "arg0":["macro",74],
      "arg1":"\/media\/Research\/Files\/Reports\/2014\/diversity-explosion\/buy_button_bn.png"
    },{
      "function":"_cn",
      "arg0":["macro",67],
      "arg1":"\/media\/Research\/Files\/Reports\/2014\/diversity-explosion\/buy_button_brookings.png"
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"ADD TO CART"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"(^$|((^|,)2341590_98($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",47],
      "arg1":"brookings.perseusbooks.com\/cart"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"Download the full report"
    }],
  "rules":[
    [["if",0],["add",0]],
    [["if",1],["add",1,106]],
    [["if",2],["add",2]],
    [["if",5,6,7],["add",3,89]],
    [["if",8,9],["add",4,7]],
    [["if",9,10],["add",5,90]],
    [["if",11,12,13],["add",5,90]],
    [["if",6,15,16],["add",6,92],["block",91]],
    [["if",17],["add",8,17],["block",17]],
    [["if",9,18],["add",9,10,91]],
    [["if",9,19],["add",9,10]],
    [["if",6,22,23,24],["add",10,21]],
    [["if",6,25,26],["add",11]],
    [["if",9,27],["add",12,93]],
    [["if",9,28],["add",13,100]],
    [["if",9,29],["add",13,101]],
    [["if",9,30],["add",13,98]],
    [["if",9,31],["add",13,97]],
    [["if",9,32],["add",13,102]],
    [["if",9,33],["add",13,99]],
    [["if",9,34],["add",13]],
    [["if",9,35],["add",14,96]],
    [["if",9,36],["add",14,96]],
    [["if",3,4],["add",15,37,38,95,105],["block",2,4,7,17]],
    [["if",9,37],["add",16,18,96]],
    [["if",1,38],["add",17]],
    [["if",39,40],["add",19]],
    [["if",41],["add",19]],
    [["if",6,42,43],["add",20]],
    [["if",6,44,45],["add",22]],
    [["if",9,46],["add",23]],
    [["if",9,47],["add",24]],
    [["if",9,48],["add",25]],
    [["if",9,49],["add",26]],
    [["if",9,50],["add",27]],
    [["if",9,51],["add",28]],
    [["if",52],["add",29]],
    [["if",53],["add",30]],
    [["if",54],["add",31]],
    [["if",14],["add",32],["block",5]],
    [["if",6,55,56],["add",33]],
    [["if",6,57,58],["add",34]],
    [["if",6,59,60],["add",35]],
    [["if",6,61,62],["add",36]],
    [["if",63],["add",39]],
    [["if",64],["add",40]],
    [["if",6,65,67],["unless",66],["add",41]],
    [["if",4],["add",42,43,46,47,48,49,50,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,73,74,76,77,78,79,80,81,82,83,84,85,86,87,88,103]],
    [["if",4,68],["add",44]],
    [["if",4,69],["add",45]],
    [["if",4,70],["add",51]],
    [["if",4,71],["add",72]],
    [["if",4,72],["add",75]],
    [["if",9,74],["add",94]],
    [["if",9,75],["add",94]],
    [["if",9,76],["add",94]],
    [["if",9,77],["add",94]],
    [["if",6,78,79],["add",94]],
    [["if",4,80],["add",94]],
    [["if",9,81],["add",104]],
    [["if",9,20],["block",9,10]],
    [["if",9,21],["block",9]],
    [["if",4,73],["block",88]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,da=/^[\w+/_-]+[=]{0,2}$/,ea=null;var fa=function(){},ha=function(a){return"function"==typeof a},ia=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},oa=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c=new pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){return Math.round(Number(a))||0},ta=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ua=function(a){var b=[];if(ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},va=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},wa=function(){return(new Date).getTime()},pa=function(){this.prefix="gtm.";this.values={}};pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};pa.prototype.get=function(a){return this.values[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Da=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ea=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Fa=function(a){if(null==a)return String(a);var b=Ea.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ga=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ha=function(a){if(!a||"object"!=Fa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ga(a,"constructor")&&!Ga(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ga(a,b)},f=function(a,b){var c=b||("array"==Fa(a)?[]:{}),d;for(d in a)if(Ga(a,d)){var e=a[d];"array"==Fa(e)?("array"!=Fa(c[d])&&(c[d]=[]),c[d]=f(e,c[d])):Ha(e)?(Ha(c[d])||(c[d]={}),c[d]=f(e,c[d])):c[d]=e}return c};var u=window,C=document,Ia=navigator,Ja=C.currentScript&&C.currentScript.src,Ka=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},La=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Ma=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;La(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=C.getElementsByTagName("script")[0]||C.body||C.head;l.parentNode.insertBefore(d,l);return d},Na=function(){if(Ja){var a=Ja.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Oa=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||
C.body||C.head;d.parentNode.insertBefore(c,d);La(c,b);void 0!==a&&(c.src=a);return c},Pa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Qa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ra=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},D=function(a){u.setTimeout(a,0)},Sa=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Wa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xa=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ya=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Za=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var $a=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var ab={},bb=function(a,b){ab[a]=ab[a]||[];ab[a][b]=!0},cb=function(a){for(var b=[],c=ab[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var db=/:[0-9]+$/,eb=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},ib=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=fb(a.protocol)||fb(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace(db,"").toLowerCase());var g=b,h,k=fb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=hb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(db,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||bb("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=la(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=eb(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},fb=function(a){return a?a.replace(":","").toLowerCase():""},hb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
jb=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||bb("TAGGING",1),c="/"+c);var d=b.hostname.replace(db,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var kb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},nb=function(a,b,c,d){var e=lb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=mb(e,function(g){return g.Ib},b);if(1===e.length)return e[0].id;e=mb(e,function(g){return g.eb},c);return e[0]?e[0].id:void 0}};
function ob(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=kb(b,e).indexOf(c)}
var sb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=pb(),w=0;w<v.length;++w){var x="none"!=v[w]?v[w]:void 0;if(!rb(x,t)&&ob(m+(x?"; domain="+x:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!rb(p,t)&&ob(m,a,l)}return k};function mb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function lb(a,b){for(var c=[],d=kb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Ib:1*k[0]||1,eb:1*k[1]||1}))}}return c}
var tb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ub=/(^|\.)doubleclick\.net$/i,rb=function(a,b){return ub.test(document.location.hostname)||"/"===b&&tb.test(a)},pb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var vb=[],wb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},xb=function(a){return wb[a]},yb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Cb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Db={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Eb=function(a){return Db[a]};vb[7]=function(a){return String(a).replace(Cb,Eb)};
vb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Cb,Eb)+"'"}};var Mb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Nb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Ob=function(a){return Nb[a]};vb[16]=function(a){return a};var Qb=[],Rb=[],Sb=[],Tb=[],Ub=[],Wb={},Xb,Yb,Zb,$b=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},ac=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Wb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Wb[c](e):(void 0)(c,e,b)},cc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=bc(a[e],b,c));return d},
dc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Wb[b];return c?c.priorityOverride||0:0},bc=function(a,b,c){if(ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(bc(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Qb[g];if(!h||b.Cc(h))return;c[g]=!0;try{var k=cc(h,b,c);k.vtp_gtmEventId=b.id;d=ac(k,b);Zb&&(d=Zb.Gf(d,k))}catch(w){b.ae&&b.ae(w,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[bc(a[l],b,c)]=bc(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=bc(a[n],b,c);Yb&&(m=m||p===Yb.wb);d.push(p)}return Yb&&m?Yb.Jf(d):d.join("");case "escape":d=bc(a[1],b,c);if(Yb&&ka(a[1])&&"macro"===a[1][0]&&Yb.kg(a))return Yb.wg(d);d=String(d);for(var t=2;t<a.length;t++)vb[a[t]]&&(d=vb[a[t]](d));return d;case "tag":var q=a[1];if(!Tb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Nd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=ec(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},ec=function(a,b,c){try{return Xb(cc(a,b,c))}catch(d){JSON.stringify(a)}return null};var fc=function(){var a=function(b){return{toString:function(){return b}}};return{ed:a("convert_case_to"),fd:a("convert_false_to"),gd:a("convert_null_to"),hd:a("convert_true_to"),jd:a("convert_undefined_to"),eh:a("debug_mode_metadata"),ka:a("function"),Ue:a("instance_name"),Ve:a("live_only"),We:a("malware_disabled"),Xe:a("metadata"),gh:a("original_vendor_template_id"),Ye:a("once_per_event"),Cd:a("once_per_load"),Dd:a("setup_tags"),Ed:a("tag_id"),Fd:a("teardown_tags")}}();var gc=null,jc=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];gc=hc(a);for(var e=0;e<Rb.length;e++){var g=Rb[e],h=ic(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Tb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},ic=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=gc(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=gc(e[g]);if(null===h)return null;
if(h)return!1}return!0},hc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=ec(Sb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
for(var mc="floor ceil round max min abs pow sqrt".split(" "),nc=0;nc<mc.length;nc++)Math.hasOwnProperty(mc[nc]);var G={$b:"event_callback",Na:"event_timeout",U:"gtag.config",N:"allow_ad_personalization_signals",P:"cookie_expires",Ma:"cookie_update",xa:"session_duration"};var Cc=/[A-Z]+/,Dc=/\s/,Ec=function(a){if(ia(a)&&(a=va(a),!Dc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Cc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],M:d}}}}},Gc=function(a){for(var b={},c=0;c<a.length;++c){var d=Ec(a[c]);d&&(b[d.id]=d)}Fc(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function Fc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.M[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Hc={},Ic=null,Jc=Math.random();Hc.i="GTM-WHWFZ5";Hc.Ab="8l2";var Kc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},Lc="www.googletagmanager.com/gtm.js";var Mc=Lc,Nc=null,Oc=null,Pc=null,Qc="//www.googletagmanager.com/a?id="+Hc.i+"&cv=75",Rc={},Sc={},Tc=function(){var a=Ic.sequence||0;Ic.sequence=a+1;return a};
var Uc=function(){return"&tc="+Tb.filter(function(a){return a}).length},cd=function(){Vc&&(u.clearTimeout(Vc),Vc=void 0);void 0===Wc||Xc[Wc]&&!Yc||(Zc[Wc]||$c.mg()||0>=ad--?(bb("GTM",1),Zc[Wc]=!0):($c.Hg(),Pa(bd()),Xc[Wc]=!0,Yc=""))},bd=function(){var a=Wc;if(void 0===a)return"";var b=cb("GTM"),c=cb("TAGGING");return[dd,Xc[a]?"":"&es=1",ed[a],b?"&u="+b:"",c?"&ut="+c:"",Uc(),Yc,"&z=0"].join("")},fd=function(){return[Qc,"&v=3&t=t","&pid="+oa(),"&rv="+Hc.Ab].join("")},gd="0.005000">
Math.random(),dd=fd(),hd=function(){dd=fd()},Xc={},Yc="",Wc=void 0,ed={},Zc={},Vc=void 0,$c=function(a,b){var c=0,d=0;return{mg:function(){if(c<a)return!1;wa()-d>=b&&(c=0);return c>=a},Hg:function(){wa()-d>=b&&(c=0);c++;d=wa()}}}(2,1E3),ad=1E3,id=function(a,b){if(gd&&!Zc[a]&&Wc!==a){cd();Wc=a;Yc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";ed[a]="&e="+c+"&eid="+a;Vc||(Vc=u.setTimeout(cd,500))}},jd=function(a,b,c){if(gd&&!Zc[a]&&b){a!==Wc&&(cd(),Wc=a);var d=String(b[fc.ka]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Yc=Yc?Yc+"."+e:"&tr="+e;Vc||(Vc=u.setTimeout(cd,500));2022<=bd().length&&cd()}};var kd={},ld=new pa,md={},nd={},rd={name:"dataLayer",set:function(a,b){f(od(a,b),md);pd()},get:function(a){return qd(a,2)},reset:function(){ld=new pa;md={};pd()}},qd=function(a,b){if(2!=b){var c=ld.get(a);if(gd){var d=sd(a);c!==d&&bb("GTM",5)}return c}return sd(a)},sd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:ud(d)},ud=function(a){for(var b=md,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var xd=function(a,b){nd.hasOwnProperty(a)||(ld.set(a,b),f(od(a,b),md),pd())},od=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},pd=function(a){ra(nd,function(b,c){ld.set(b,c);f(od(b,void 0),md);f(od(b,c),md);a&&delete nd[b]})},yd=function(a,b,c){kd[a]=kd[a]||{};var d=1!==c?sd(b):ld.get(b);"array"===Fa(d)||"object"===Fa(d)?kd[a][b]=f(d):kd[a][b]=d},zd=function(a,b){if(kd[a])return kd[a][b]};var Ad=function(){var a=!1;return a};var H=function(a,b,c,d){return(2===Bd()||d||"http:"!=u.location.protocol?a:b)+c},Bd=function(){var a=Na(),b;if(1===a)a:{var c=Mc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Pd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Qd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Rd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Sd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ud=function(a){var b=qd("gtm.whitelist");b&&bb("GTM",9);var c=b&&Da(ua(b),Qd),d=qd("gtm.blacklist");d||(d=qd("tagTypeBlacklist"))&&bb("GTM",3);
d?bb("GTM",8):d=[];Td()&&(d=ua(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=la(ua(d),"google")&&bb("GTM",2);var e=d&&Da(ua(d),Rd),g={};return function(h){var k=h&&h[fc.ka];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Sc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>la(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
la(c,l[p])){bb("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=la(e,k);if(q)t=q;else{var r=qa(e,l||[]);r&&bb("GTM",10);t=r}}var v=!m||t;v||!(0<=la(l,"sandboxedScripts"))||c&&-1!==la(c,"sandboxedScripts")||(v=qa(e,Sd));return g[k]=v}},Td=function(){return Pd.test(u.location&&u.location.hostname)};var Vd={Gf:function(a,b){b[fc.ed]&&"string"===typeof a&&(a=1==b[fc.ed]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(fc.gd)&&null===a&&(a=b[fc.gd]);b.hasOwnProperty(fc.jd)&&void 0===a&&(a=b[fc.jd]);b.hasOwnProperty(fc.hd)&&!0===a&&(a=b[fc.hd]);b.hasOwnProperty(fc.fd)&&!1===a&&(a=b[fc.fd]);return a}};var Wd={active:!0,isWhitelisted:function(){return!0}},Xd=function(a){var b=Ic.zones;!b&&a&&(b=Ic.zones=a());return b};var Yd=!1,Zd=0,$d=[];function ae(a){if(!Yd){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Yd=!0;for(var e=0;e<$d.length;e++)D($d[e])}$d.push=function(){for(var g=0;g<arguments.length;g++)D(arguments[g]);return 0}}}function be(){if(!Yd&&140>Zd){Zd++;try{C.documentElement.doScroll("left"),ae()}catch(a){u.setTimeout(be,50)}}}var ce=function(a){Yd?a():$d.push(a)};var de={},ee={},fe=function(a,b,c,d){if(!ee[a]||Kc[b]||"__zone"===b)return-1;var e={};Ha(d)&&(e=f(d,e));e.id=c;e.status="timeout";return ee[a].tags.push(e)-1},ge=function(a,b,c,d){if(ee[a]){var e=ee[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function he(a){for(var b=de[a]||[],c=0;c<b.length;c++)b[c]();de[a]={push:function(d){d(Hc.i,ee[a])}}}
var ke=function(a,b,c){ee[a]={tags:[]};ha(b)&&ie(a,b);c&&u.setTimeout(function(){return he(a)},Number(c));return je(a)},ie=function(a,b){de[a]=de[a]||[];de[a].push(ya(function(){return D(function(){b(Hc.i,ee[a])})}))};function je(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&he(a)})},qf:function(){d=!0;b>=c&&he(a)}}};var le=function(){function a(d){return!ja(d)||0>d?0:d}if(!Ic._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=ja(rd.get("gtm.start"))?rd.get("gtm.start"):0;Ic._li={cst:a(c-b),cbt:a(Oc-b)}}};var pe=!1,qe=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},re=!1;
var se=function(a){u.GoogleAnalyticsObject||(u.GoogleAnalyticsObject=a||"ga");var b=u.GoogleAnalyticsObject;if(u[b])u.hasOwnProperty(b)||bb("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);u[b]=c}le();return u[b]},te=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=qe();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ve=function(){},ue=function(){return u.GoogleAnalyticsObject||"ga"};var Ce=function(a){};function Be(a,b){a.containerId=Hc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function De(a,b,c,d){var e=Tb[a],g=Ee(a,b,c,d);if(!g)return null;var h=bc(e[fc.Dd],c,[]);if(h&&h.length){var k=h[0];g=De(k.index,{I:g,S:1===k.Nd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function Ee(a,b,c,d){function e(){if(g[fc.We])k();else{var w=cc(g,c,[]),x=fe(c.id,String(g[fc.ka]),Number(g[fc.Ed]),w[fc.Xe]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var A=wa()-B;jd(c.id,Tb[a],"5");ge(c.id,x,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var A=wa()-B;jd(c.id,Tb[a],"6");ge(c.id,x,"failure",A);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;jd(c.id,g,"1");var z=function(A){var E=wa()-B;Ce(A);jd(c.id,g,"7");ge(c.id,x,"exception",E);y||(y=!0,k())};var B=wa();try{ac(w,c)}catch(A){z(A)}}}var g=Tb[a],h=b.I,k=b.S,l=b.terminate;if(c.Cc(g))return null;var m=bc(g[fc.Fd],c,[]);if(m&&m.length){var n=m[0],p=De(n.index,{I:h,S:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Nd?l:p}if(g[fc.Cd]||g[fc.Ye]){var t=g[fc.Cd]?Ub:c.Rg,q=h,r=k;if(!t[a]){e=ya(e);var v=Fe(a,t,e);h=v.I;k=v.S}return function(){t[a](q,r)}}return e}
function Fe(a,b,c){var d=[],e=[];b[a]=Ge(d,e,c);return{I:function(){b[a]=He;for(var g=0;g<d.length;g++)d[g]()},S:function(){b[a]=Ie;for(var g=0;g<e.length;g++)e[g]()}}}function Ge(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function He(a){a()}function Ie(a,b){b()};var Le=function(a,b){for(var c=[],d=0;d<Tb.length;d++)if(a.cb[d]){var e=Tb[d];var g=b.add();try{var h=De(d,{I:g,S:g,terminate:g},a,d);h?c.push({te:d,ie:dc(e),Rf:h}):(Je(d,a),g())}catch(l){g()}}b.qf();c.sort(Ke);for(var k=0;k<c.length;k++)c[k].Rf();return 0<c.length};function Ke(a,b){var c,d=b.ie,e=a.ie;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.te,k=b.te;g=h>k?1:h<k?-1:0}return g}
function Je(a,b){if(!gd)return;var c=function(d){var e=b.Cc(Tb[d])?"3":"4",g=bc(Tb[d][fc.Dd],b,[]);g&&g.length&&c(g[0].index);jd(b.id,Tb[d],e);var h=bc(Tb[d][fc.Fd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Me=!1,Ne=function(a,b,c,d,e){if("gtm.js"==b){if(Me)return!1;Me=!0}id(a,b);var g=ke(a,d,e);yd(a,"event",1);yd(a,"ecommerce",1);yd(a,"gtm");var h={id:a,name:b,Cc:Ud(c),cb:[],Rg:[],ae:function(n){bb("GTM",6);Ce(n)}};h.cb=jc(h);var k=Le(h,g);"gtm.js"!==b&&"gtm.sync"!==b||ve();if(!k)return k;for(var l=0;l<h.cb.length;l++)if(h.cb[l]){var m=
Tb[l];if(m&&!Kc[String(m[fc.ka])])return!0}return!1};var Pe=function(a,b,c){var d=this;this.eventModel=a;this.targetConfig=b||{};this.globalConfig=c||{};this.getWithConfig=function(e){if(d.eventModel.hasOwnProperty(e))return d.eventModel[e];if(d.targetConfig.hasOwnProperty(e))return d.targetConfig[e];if(d.globalConfig.hasOwnProperty(e))return d.globalConfig[e]}};function Qe(){var a=Ic;return a.gcq=a.gcq||new Re}
var Te=function(a,b){Qe().register(a,b)},Ue=function(a,b,c,d){Qe().push("event",[b,a],c,d)},Ve=function(){this.status=1;this.uc={};this.je=null;this.Xd=!1},We=function(a,b,c,d,e){this.type=a;this.Wg=b;this.oa=c||"";this.Db=d;this.defer=e},Re=function(){this.ue={};this.Sd={};this.Xa=[]},Xe=function(a,b){return a.ue[b]=a.ue[b]||new Ve},Ye=function(a,b,c,d){var e=Xe(a,d.oa).je;if(e){var g=f(c),h=f(Xe(a,d.oa).uc),k=f(a.Sd),l=new Pe(g,h,k);try{e(b,d.Wg,l)}catch(m){}}};
Re.prototype.register=function(a,b){3!==Xe(this,a).status&&(Xe(this,a).je=b,Xe(this,a).status=3,this.flush())};Re.prototype.push=function(a,b,c,d){var e=Math.floor(wa()/1E3);if(c&&1===Xe(this,c).status&&(Xe(this,c).status=2,this.push("require",[],c),!Ad())){var g=encodeURIComponent(c);Ma(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+g+"&l=dataLayer&cx=c"))}this.Xa.push(new We(a,e,c,b,d));d||this.flush()};
Re.prototype.flush=function(a){for(var b=this;this.Xa.length;){var c=this.Xa[0];if(c.defer)c.defer=!1,this.Xa.push(c);else switch(c.type){case "require":if(3!==Xe(this,c.oa).status&&!a)return;break;case "set":ra(c.Db[0],function(h,k){b.Sd[h]=k});break;case "config":var d=c.Db[0],e=!!d[G.ub];delete d[G.ub];var g=Xe(this,c.oa);e||(g.uc={});g.Xd&&e||Ye(this,G.U,d,c);g.Xd=!0;f(d,g.uc);break;case "event":Ye(this,c.Db[1],c.Db[0],c)}this.Xa.shift()}};var Ze=new function(){this.Nc={}};var $e=null,af={},bf={},cf,df=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[G.$b]&&(c.eventCallback=b[G.$b]),b[G.Na]&&(c.eventTimeout=b[G.Na]));return c};
var kf={config:function(a){},event:function(a){var b=a[1];if(ia(b)&&!(3<a.length)){var c;
if(2<a.length){if(!Ha(a[2]))return;c=a[2]}var d=df(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];Ze.Nc[b]?Ze.Nc[b].push(c):Ze.Nc[b]=[c]}},set:function(a){var b;2==a.length&&Ha(a[1])?b=f(a[1]):3==a.length&&ia(a[1])&&(b={},b[a[1]]=a[2]);if(b){
b._clear=!0;return b}}},lf={policy:!0};var nf=function(a){return mf?C.querySelectorAll(a):null},of=function(a,b){if(!mf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},pf=!1;if(C.querySelectorAll)try{var qf=C.querySelectorAll(":root");qf&&1==qf.length&&qf[0]==C.documentElement&&(pf=!0)}catch(a){}var mf=pf;var xf=function(a){if(wf(a))return a;this.Zg=a};xf.prototype.Yf=function(){return this.Zg};var wf=function(a){return!a||"object"!==Fa(a)||Ha(a)?!1:"getUntrustedUpdateValue"in a};xf.prototype.getUntrustedUpdateValue=xf.prototype.Yf;var yf=!1,zf=[];function Af(){if(!yf){yf=!0;for(var a=0;a<zf.length;a++)D(zf[a])}}var Bf=function(a){yf?D(a):zf.push(a)};var Cf=[],Df=!1,Ef=function(a){return u["dataLayer"].push(a)},Ff=function(a){var b=Ic["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Hf=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&xd(g,void 0),xd(g,h))});Nc||(Nc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Tc(),a["gtm.uniqueEventId"]=d,xd("gtm.uniqueEventId",d));Pc=c;var e=Gf(a);
Pc=null;switch(c){case "gtm.init":bb("GTM",19),e&&bb("GTM",20)}return e};function Gf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Ic.zones;d=e?e.checkState(Hc.i,c):Wd;return d.active?Ne(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var If=function(){for(var a=!1;!Df&&0<Cf.length;){Df=!0;delete md.eventModel;pd();var b=Cf.shift();if(null!=b){var c=wf(b);if(c){var d=b;b=wf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=qd(h,1);if(ka(k)||Ha(k))k=f(k);nd[h]=k}}try{if(ha(b))try{b.call(rd)}catch(v){}else if(ka(b)){var l=b;if(ia(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=qd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ia(b[0])){var r=kf[b[0]];if(r&&(!c||!lf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Df=!1;continue}}a=Hf(b)||a}}finally{c&&pd(!0)}}Df=!1}
return!a},Jf=function(){var a=If();try{var b=Hc.i,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Kf=function(){var a=Ka("dataLayer",[]),b=Ka("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ce(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Bf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<Ic.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new xf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Cf.push.apply(Cf,d);if(300<this.length)for(bb("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return If()&&h};Cf.push.apply(Cf,a.slice(0));D(Jf)};var Lf;var gg={};gg.wb=new String("undefined");
var hg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===gg.wb?b:a[d]);return c.join("")}};hg.prototype.toString=function(){return this.resolve("undefined")};hg.prototype.valueOf=hg.prototype.toString;gg.$e=hg;gg.kc={};gg.Jf=function(a){return new hg(a)};var ig={};gg.Ig=function(a,b){var c=Tc();ig[c]=[a,b];return c};gg.Kd=function(a){var b=a?0:1;return function(c){var d=ig[c];if(d&&"function"===typeof d[b])d[b]();ig[c]=void 0}};gg.kg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};gg.wg=function(a){if(a===gg.wb)return a;var b=Tc();gg.kc[b]=a;return'google_tag_manager["'+Hc.i+'"].macro('+b+")"};gg.og=function(a,b,c){a instanceof gg.$e&&(a=a.resolve(gg.Ig(b,c)),b=fa);return{Ac:a,I:b}};var jg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Sa(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},kg=function(a){Ic.hasOwnProperty("autoEventsSettings")||(Ic.autoEventsSettings={});var b=Ic.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},lg=function(a,b,c){kg(a)[b]=c},mg=function(a,b,c,d){var e=kg(a),g=xa(e,b,d);e[b]=c(g)},ng=function(a,b,c){var d=kg(a);return xa(d,b,c)};var og=function(){for(var a=Ia.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(wa()/1E3)].join(".")},rg=function(a,b,c,d){var e=pg(b);return nb(a,e,qg(c),d)},sg=function(a,b,c,d){var e=""+pg(c),g=qg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},pg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},qg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var tg=["1"],ug={},yg=function(a,b,c,d){var e=vg(a);ug[e]||wg(e,b,c)||(xg(e,og(),b,c,d),wg(e,b,c))};function xg(a,b,c,d,e){var g=sg(b,"1",d,c);sb(a,g,c,d,0==e?void 0:new Date(wa()+1E3*(void 0==e?7776E3:e)))}function wg(a,b,c){var d=rg(a,b,c,tg);d&&(ug[a]=d);return d}function vg(a){return(a||"_gcl")+"_au"};var zg=function(){for(var a=[],b=C.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Yc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Yc]||(g[a[h].Yc]=[]),g[a[h].Yc].push({timestamp:k[1],Vf:k[2]}))}return g};function Ag(){for(var a=Bg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Cg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Bg,Dg,Eg=function(a){Bg=Bg||Cg();Dg=Dg||Ag();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Bg[l],Bg[m],Bg[n],Bg[p])}return b.join("")},Fg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Dg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Bg=Bg||Cg();Dg=Dg||
Ag();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Gg;function Hg(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Lg=function(){var a=Ig,b=Jg,c=Kg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Qa(C,"mousedown",d);Qa(C,"keyup",d);Qa(C,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},Kg=function(){var a=Ka("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Mg=/(.*?)\*(.*?)\*(.*)/,Ng=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Og=/^(?:www\.|m\.|amp\.)+/,Pg=/([^?#]+)(\?[^#]*)?(#.*)?/,Qg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Sg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Eg(String(d))))}var e=b.join("*");return["1",Rg(e),e].join("*")},Rg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Gg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Gg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Gg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Ug=function(){return function(a){var b=jb(u.location.href),c=b.search.replace("?",""),d=eb(c,"_gl",!0)||"";a.query=Tg(d)||{};var e=ib(b,"fragment").match(Qg);a.fragment=Tg(e&&e[3]||
"")||{}}},Vg=function(){var a=Ug(),b=Kg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(za(c,d.query),za(c,d.fragment));return c},Tg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Mg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Rg(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Fg(t[q+1]);return p}}}}catch(r){}};
function Wg(a,b,c){function d(m){var n=m,p=Qg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Pg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Xg(a,b,c){for(var d={},e={},g=Kg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Hg(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=Sg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=C.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=Wg(l,a.action);$a.test(v)&&(a.action=v)}}}else Yg(l,a,!1)}if(!c&&Aa(e)){var w=Sg(e);Yg(w,a,!0)}}function Yg(a,b,c){if(b.href){var d=Wg(a,b.href,void 0===c?!1:c);$a.test(d)&&(b.href=d)}}
var Ig=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Xg(e,e.hostname,!1)}}catch(h){}},Jg=function(a){try{if(a.action){var b=ib(jb(a.action),"host");Xg(a,b,!0)}}catch(c){}},Zg=function(a,b,c,d){Lg();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Kg().decorators.push(e)},$g=function(){var a=C.location.hostname,b=Ng.exec(C.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Og,""),l=e.replace(Og,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},ah=function(a,b){return!1===a?!1:a||b||$g()};var bh={};var ch=/^\w+$/,dh=/^[\w-]+$/,eh=/^~?[\w-]+$/,fh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function gh(a){return a&&"string"==typeof a&&a.match(ch)?a:"_gcl"}var ih=function(){var a=jb(u.location.href),b=ib(a,"query",!1,void 0,"gclid"),c=ib(a,"query",!1,void 0,"gclsrc"),d=ib(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||eb(e,"gclid",void 0);c=c||eb(e,"gclsrc",void 0)}return hh(b,c,d)};
function hh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(dh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==bh.gtm_3pds?0:bh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function jh(a,b,c){function d(p,t){var q=kh(p,e);q&&sb(q,t,h,g,l,!0)}b=b||{};var e=gh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.be?7776E3:b.be;c=c||wa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.Fh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var kh=function(a,b){var c=fh[a];if(void 0!==c)return b+c},lh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function mh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var nh=function(a,b,c,d,e){if(ka(b)){var g=gh(e);Zg(function(){for(var h={},k=0;k<a.length;++k){var l=kh(a[k],g);if(l){var m=kb(l,C.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},oh=function(a){return a.filter(function(b){return eh.test(b)})},qh=function(a){for(var b=["aw","dc"],c=gh(a&&a.prefix),d={},e=0;e<b.length;e++)fh[b[e]]&&(d[b[e]]=fh[b[e]]);ra(d,function(g,h){var k=kb(c+h,C.cookie);if(k.length){var l=k[0],m=lh(l),n={};n[g]=[mh(l)];jh(n,a,m)}})};var rh=/^\d+\.fls\.doubleclick\.net$/;function sh(a){var b=jb(u.location.href),c=ib(b,"host",!1);if(c&&c.match(rh)){var d=ib(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function th(a,b){if("aw"==a||"dc"==a){var c=sh("gcl"+a);if(c)return c.split(".")}var d=gh(b);if("_gcl"==d){var e;e=ih()[a]||[];if(0<e.length)return e}var g=kh(a,d),h;if(g){var k=[];if(C.cookie){var l=kb(g,C.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=mh(l[m]);n&&-1===la(k,n)&&k.push(n)}h=oh(k)}else h=k}else h=k}else h=[];return h}
var uh=function(){var a=sh("gac");if(a)return decodeURIComponent(a);var b=zg(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Vf);g=oh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},vh=function(a,b,c,d,e){yg(b,c,d,e);var g=ug[vg(b)],h=ih().dc||[],k=!1;if(g&&0<h.length){var l=Ic.joined_au=Ic.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ia.sendBeacon&&Ia.sendBeacon(t)||Pa(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=vg(b),r=ug[q];r&&xg(q,r,c,d,e)}};var wh;if(3===Hc.Ab.length)wh="g";else{var xh="G";wh=xh}
var yh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:wh,OPT:"o"},zh=function(a){var b=Hc.i.split("-"),c=b[0].toUpperCase(),d=yh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===Hc.Ab.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+Hc.Ab+e};var Eh=["input","select","textarea"],Fh=["button","hidden","image","reset","submit"],Gh=function(a){var b=a.tagName.toLowerCase();return!ma(Eh,function(c){return c===b})||"input"===b&&ma(Fh,function(c){return c===a.type.toLowerCase()})?!1:!0},Hh=function(a){return a.form?a.form.tagName?a.form:C.getElementById(a.form):Ya(a,["form"],100)},Ih=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Gh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Lh=!!u.MutationObserver,Mh=void 0,Nh=function(a){if(!Mh){var b=function(){var c=C.body;if(c)if(Lh)(new MutationObserver(function(){for(var e=0;e<Mh.length;e++)D(Mh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Qa(c,"DOMNodeInserted",function(){d||(d=!0,D(function(){d=!1;for(var e=0;e<Mh.length;e++)D(Mh[e])}))})}};Mh=[];C.body?b():D(b)}Mh.push(a)};var oi=u.clearTimeout,pi=u.setTimeout,L=function(a,b,c){if(Ad()){b&&D(b)}else return Ma(a,b,c)},qi=function(){return new Date},ri=function(){return u.location.href},si=function(a){return ib(jb(a),"fragment")},ti=function(a){return hb(jb(a))},ui=null;
var vi=function(a,b){return qd(a,b||2)},wi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Ef(a)},xi=function(a,b){u[a]=b},M=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]},yi=function(a,b,c){return kb(a,b,void 0===c?!0:!!c)},zi=function(a,b,c,d){var e={prefix:a,path:b,domain:c,be:d},g=ih();jh(g,e);qh(e)},Ai=function(a,b,c,d,e){for(var g=Vg(),h=gh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==fh[l]){var m=kh(l,h),
n=g[m];if(n){var p=Math.min(lh(n),wa()),t;b:{for(var q=p,r=kb(m,C.cookie),v=0;v<r.length;++v)if(lh(r[v])>q){t=!0;break b}t=!1}t||sb(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};jh(hh(g.gclid,g.gclsrc),w);},Bi=function(a,b,c,d,e){nh(a,b,c,d,e);},Ci=function(a,b){if(Ad()){
b&&D(b)}else Oa(a,b)},Di=function(a){return!!ng(a,"init",!1)},Ei=function(a){lg(a,"init",!0)},Fi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Mc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});L(H("https://","http://",d))},Gi=function(a,b){var c=a[b];return c};var Ii=gg.og;
var Ji=new pa,Ki=function(a,b){function c(h){var k=jb(h),l=ib(k,"protocol"),m=ib(k,"host",!0),n=ib(k,"port"),p=ib(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Li=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ka(c)){for(var d=0;d<c.length;d++)if(Li({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=la(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Ji.get(q);r||(r=new RegExp(c,t),Ji.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ki(b,c)}return!1};var Ni=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Oi={},Pi=encodeURI,W=encodeURIComponent,Qi=Pa;var Ri=function(a,b){if(!a)return!1;var c=ib(jb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Si=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Oi.lg=function(){var a=!1;return a};var rj=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||oa();return a.hid};var ak=window,bk=document,ck=function(a){var b=ak._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ak["ga-disable-"+a])return!0;try{var c=ak.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=kb("AMP_TOKEN",bk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return bk.getElementById("__gaOptOutExtension")?!0:!1};var hk=function(a,b,c){Ue(b,c,a)},ik=function(a,b,c){Ue(b,c,a,!0)},kk=function(a,b){},jk=function(a,b){},
lk=function(a){return"_"===a.charAt(0)},mk=function(a){ra(a,function(c){lk(c)&&delete a[c]});var b=a[G.vb]||{};ra(b,function(c){lk(c)&&delete b[c]})};var Y={a:{}};
Y.a.ctv=["google"],function(){(function(a){Y.__ctv=a;Y.__ctv.b="ctv";Y.__ctv.g=!0;Y.__ctv.priorityOverride=0})(function(){return"75"})}();

Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.b="jsm";Y.__jsm.g=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=M("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.b="sp";Y.__sp.g=!0;Y.__sp.priorityOverride=0})(function(a){var b=a.vtp_gtmOnFailure;le();L("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=M("google_trackConversion");if(ha(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Si(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),
a.vtp_eventValue&&(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:zh()})||b()}else b()},b)})}();Y.a.c=["google"],function(){(function(a){Y.__c=a;Y.__c.b="c";Y.__c.g=!0;Y.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Y.a.d=["google"],function(){(function(a){Y.__d=a;Y.__d.b="d";Y.__d.g=!0;Y.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=nf(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=C.getElementById(a.vtp_elementId);b&&(c=d?Sa(b,d):Wa(b));return va(String(b&&c))})}();
Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.b="e";Y.__e.g=!0;Y.__e.priorityOverride=0})(function(a){return String(zd(a.vtp_gtmEventId,"event"))})}();
Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.b="f";Y.__f.g=!0;Y.__f.priorityOverride=0})(function(a){var b=vi("gtm.referrer",1)||C.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ib(jb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):ti(String(b)):String(b)})}();
Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=jg(c,"gtm.click");wi(d)}}(function(b){Y.__cl=b;Y.__cl.b="cl";Y.__cl.g=!0;Y.__cl.priorityOverride=0})(function(b){if(!Di("cl")){var c=M("document");Qa(c,"click",a,!0);Ei("cl")}D(b.vtp_gtmOnSuccess)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.b="j";Y.__j.g=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=M(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();


Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.b="u";Y.__u.g=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:vi("gtm.url",1))||ri();var d=b[a("vtp_component")];if(!d||"URL"==d)return ti(String(c));var e=jb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ka(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=ib(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=ib(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.b="v";Y.__v.g=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=vi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;f(Si(n.vtp_fieldsToSet,"fieldName","value"),g);f(Si(n.vtp_contentGroup,"index","group"),h);f(Si(n.vtp_dimension,"index","dimension"),k);f(Si(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=f(n);d=f(d,p)}f(Si(d.vtp_fieldsToSet,"fieldName","value"),g);f(Si(d.vtp_contentGroup,
"index","group"),h);f(Si(d.vtp_dimension,"index","dimension"),k);f(Si(d.vtp_metric,"index","metric"),l);var t=se(d.vtp_functionName);if(ha(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+Tc(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},x=function(R){var O=[].slice.call(arguments,0);O[0]=q+O[0];t.apply(window,O)},y=function(R,O){return void 0===O?O:R(O)},z=function(R,O){if(O)for(var na in O)O.hasOwnProperty(na)&&x("set",R+na,O[na])},B=function(){},A=function(R,O,na){var Ta=0;if(R)for(var Ba in R)if(R.hasOwnProperty(Ba)&&(na&&v[Ba]||!na&&void 0===v[Ba])){var Ua=w[Ba]?ta(R[Ba]):R[Ba];"anonymizeIp"!=Ba||Ua||(Ua=void 0);O[Ba]=Ua;Ta++}return Ta},E={name:r};A(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);x("set","&gtm",zh(!0));d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(R,O){void 0!==d[O]&&x("set",R,d[O])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var F={};A(g,F,!1)&&x("set",F);var I;
d.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var R=g&&g.hitCallback;ha(R)&&R();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());var S={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(sa,d.vtp_eventValue||
e.value)};A(I,S,!1);x("send",S);}else if("TRACK_SOCIAL"==d.vtp_trackType){var T={hitType:"social",socialNetwork:String(d.vtp_socialNetwork),socialAction:String(d.vtp_socialAction),socialTarget:String(d.vtp_socialActionTarget)};A(I,T,!1);x("send",T);}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var X=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:X})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var Z="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:Z})}I?x("send","pageview",I):x("send","pageview");d.vtp_autoLinkDomains&&te(q,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);
}if(!a){var ca=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ca="internal/"+ca);a=!0;var Ca=H("https:","http:","//www.google-analytics.com/"+ca,g&&g.forceSSL);L(Ca,function(){var R=qe();R&&R.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else D(d.vtp_gtmOnFailure)};Y.__ua=c;Y.__ua.b="ua";Y.__ua.g=!0;Y.__ua.priorityOverride=0}();



Y.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Y.__gclidw=b;Y.__gclidw.b="gclidw";Y.__gclidw.g=!0;Y.__gclidw.priorityOverride=100})(function(b){D(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||
$g())&&Ai(a,h,k,l));zi(e,c,d);vh(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Bi(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();

Y.a.aev=["google"],function(){function a(q,r){var v=zd(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var x=q+"."+r,y;if(n.hasOwnProperty(x))y=n[x];else{var z=a(q,w);if(z&&(y=v(z),n[x]=y,p.push(x),35<p.length)){var B=p.shift();delete n[B]}}return y}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(ri());ka(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<r.length;x++)if(r[x]instanceof RegExp){if(r[x].test(q))return!1}else{var y=
r[x];if(0!=y.length){if(0<=e(q).indexOf(y))return!1;w.push(e(y))}}return!Ri(q,w)}function e(q){m.test(q)||(q="http://"+q);return ib(jb(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(r,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(r,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Sa(q,"value");case "button":return Wa(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)Gh(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Sa(w,r)||v}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Y.__aev=q;Y.__aev.b="aev";Y.__aev.g=!0;Y.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var x=a(r,"element");return x&&x.tagName||
v;case "TEXT":return b(r,w,Wa)||v;case "URL":var y;a:{var z=String(a(r,"elementUrl")||v||""),B=jb(z),A=String(q.vtp_component||"URL");switch(A){case "URL":y=z;break a;case "IS_OUTBOUND":y=d(z,q.vtp_affiliatedDomains);break a;default:y=ib(B,A,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return y;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var F=q.vtp_attribute,I=a(r,"element");E=I&&Sa(I,F)||v||""}return E;case "MD":var S=q.vtp_mdValue,T=b(r,"MD",ai);return S&&T?di(T,S)||
v:T||v;case "FORM":return g(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.b="gas";Y.__gas.g=!0;Y.__gas.priorityOverride=0})(function(a){var b=f(a),c=b;c[fc.ka]=null;c[fc.Ue]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=M("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){le();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:zh()},m=function(t){return function(q,r,v){var w="DATA_LAYER"==t?vi(v):k[r];w&&(l[q]=w)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(t){return{value:t.price,quantity:t.quantity,item_id:t.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var p=!0;p&&b.push(l);a||(a=!0,L("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Y.__awct=h;Y.__awct.b="awct";Y.__awct.g=!0;Y.__awct.priorityOverride=0}();
Y.a.fsl=[],function(){function a(){var e=M("document"),g=c(),h=HTMLFormElement.prototype.submit;Qa(e,"click",function(k){var l=k.target;if(l&&(l=Ya(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Sa(l,"value")){var m;(m=l.form?l.form.tagName?l.form:C.getElementById(l.form):Ya(l,["form"],100))&&g.store(m,l)}},!1);Qa(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,p=g.get(l),t=!0;if(d(l,function(){if(t){var q;
p&&(q=e.createElement("input"),q.type="hidden",q.name=p.name,q.value=p.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,n,p))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return ma(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k,l){var m=ng("fsl",h?"nv.mwt":"mwt",0),n;n=h?ng("fsl","nv.ids",[]):ng("fsl","ids",[]);if(!n.length)return!0;var p=jg(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);p["gtm.elementUrl"]=t;l&&(p["gtm.formSubmitElement"]=l);if(k&&m){if(!wi(p,Ff(g),m))return!1}else wi(p,function(){},m||2E3);return!0}(function(e){Y.__fsl=e;Y.__fsl.b=
"fsl";Y.__fsl.g=!0;Y.__fsl.priorityOverride=0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(p){return Math.max(k,p)};mg("fsl","mwt",m,0);h||mg("fsl","nv.mwt",m,0)}var n=function(p){p.push(l);return p};mg("fsl","ids",n,[]);h||mg("fsl","nv.ids",n,[]);Di("fsl")||(a(),Ei("fsl"));D(e.vtp_gtmOnSuccess)})}();Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.b="smm";Y.__smm.g=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Si(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();





Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,La(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){D(h)}}}var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,g=Ii(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Ac,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Xa(h),k,e)()}else pi(function(){c(d)},
200)};Y.__html=c;Y.__html.b="html";Y.__html.g=!0;Y.__html.priorityOverride=0}();
Y.a.dbg=["google"],function(){(function(a){Y.__dbg=a;Y.__dbg.b="dbg";Y.__dbg.g=!0;Y.__dbg.priorityOverride=0})(function(){return!1})}();




Y.a.lcl=[],function(){function a(){var c=M("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=Ya(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=ng("lcl",k?"nv.mwt":"mwt",0),m;m=k?ng("lcl","nv.ids",[]):ng("lcl","ids",[]);if(m.length){var n=jg(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var p=M((Gi(h,"target")||"_self").substring(1)),t=!0;if(wi(n,Ff(function(){t&&p&&(p.location.href=Gi(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else wi(n,function(){},l||2E3);return!0}}};Qa(c,"click",e,!1);Qa(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=Gi(d,"href"),h=g.indexOf("#"),k=Gi(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=ti(g),m=ti(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.b="lcl";Y.__lcl.g=!0;Y.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};mg("lcl","mwt",k,0);e||mg("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};mg("lcl","ids",l,[]);e||mg("lcl","nv.ids",l,[]);Di("lcl")||(a(),Ei("lcl"));D(c.vtp_gtmOnSuccess)})}();

var nk={};nk.macro=function(a){if(gg.kc.hasOwnProperty(a))return gg.kc[a]},nk.onHtmlSuccess=gg.Kd(!0),nk.onHtmlFailure=gg.Kd(!1);nk.dataLayer=rd;nk.callback=function(a){Rc.hasOwnProperty(a)&&ha(Rc[a])&&Rc[a]();delete Rc[a]};nk.vf=function(){Ic[Hc.i]=nk;za(Sc,Y.a);Yb=Yb||gg;Zb=Vd};
nk.gg=function(){bh.gtm_3pds=!0;Ic=u.google_tag_manager=u.google_tag_manager||{};if(Ic[Hc.i]){var a=Ic.zones;a&&a.unregisterChild(Hc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Qb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Tb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Sb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Rb.push(p)}Wb=Y;Xb=Li;nk.vf();Kf();Yd=!1;Zd=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)ae();else{Qa(C,"DOMContentLoaded",ae);Qa(C,"readystatechange",ae);if(C.createEventObject&&C.documentElement.doScroll){var q=!0;try{q=!u.frameElement}catch(x){}q&&be()}Qa(u,"load",ae)}yf=!1;"complete"===C.readyState?Af():
Qa(u,"load",Af);a:{if(!gd)break a;u.setInterval(hd,864E5);}
Oc=(new Date).getTime();}};(0,nk.gg)();

})()
