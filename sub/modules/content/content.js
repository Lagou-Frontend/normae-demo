define(function (require, exports, module) {
	var template = require("dep/artTemplate/dist/template");
	var tpl = __inline("./tpl/content.tpl");
	$.ajax({
		url: "/getFeatures.json",
		dataType: "json"
	}).done(function(result) {
		var html = template.compile(tpl)({features: result.features});
		$(".container").append(html);
	});
});