var template = require("../../../dep/artTemplate/dist/template");
var tpl = __inline("./tpl/content.tpl");
$.ajax({
	url: "/getFeatures.json",
	dataType: "json",
    type: 'post'
}).done(function(result) {
	var html = template.compile(tpl)({features: result.features});
	$(".container").append(html);
});

