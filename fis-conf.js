fis.match('jquery*.js', {
    isMod: false
});

fis.media('qa').match('**/page/**.html', {
    parser: fis.plugin('vm')
});

// fis.media('qa').match('**/*', {
//     domain: "http://static.lagou.com/www"
// });

fis.media('qa').match("dep/**/{jquery,esl}.js",{
    packTo : "/pkg/vendor.js"
});

fis.media('prod').match('**/page/**.html', {
    parser: fis.plugin('vm')
});

// fis.media('prod').match('**/*', {
//     domain: "http://static.lagou.com/www"
// });

fis.media('prod').match("dep/**/{jquery,esl}.js",{
    packTo : "/pkg/vendor.js"
});
