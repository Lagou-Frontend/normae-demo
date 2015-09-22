fis.match('jquery*.js', {
    isMod: false
});

fis.media('qa').match('**/page/**.html', {
    postprocessor: fis.plugin('velocity')
});

fis.media('qa').match("dep/**/{jquery,esl}.js",{
    packTo : "/pkg/vendor.js"
});

fis.media('prod').match('**/page/**.html', {
    postprocessor: fis.plugin('velocity')
});

fis.media('prod').match("dep/**/{jquery,esl}.js",{
    packTo : "/pkg/vendor.js"
});
