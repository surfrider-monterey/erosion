this["templates"] = this["templates"] || {};
this["templates"]["components"] = this["templates"]["components"] || {};

this["templates"]["components"]["images"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "          <li><a href=\"#"
    + alias1(container.lambda((depths[1] != null ? depths[1].image_id : depths[1]), depth0))
    + "/"
    + alias1(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"year","hash":{},"data":data}) : helper)))
    + "\" data-year=\""
    + alias1(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"year","hash":{},"data":data}) : helper)))
    + "\">"
    + alias1(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"year","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"image-wrapper\">\n\n  <div class=\"year-now\">\n    <a class=\"btn btn-default\">Today</a>\n  </div>\n  <div class=\"year-selector\">\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        "
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + " <span class=\"caret\"></span>\n      </button>\n      <ul class=\"dropdown-menu\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.images : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n    </div>\n  </div>\n  <div class=\"image-compare twentytwenty-container\">\n    <img src=\"http://coastal-erosion.s3-website-us-west-2.amazonaws.com/"
    + alias4(((helper = (helper = helpers.image_id || (depth0 != null ? depth0.image_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_id","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + ".jpg\" alt=\"\"/>\n    <img src=\"http://coastal-erosion.s3-website-us-west-2.amazonaws.com/"
    + alias4(((helper = (helper = helpers.image_id || (depth0 != null ? depth0.image_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_id","hash":{},"data":data}) : helper)))
    + "/2015.jpg\" alt=\"\"/>\n  </div>\n</div>\n";
},"useData":true,"useDepths":true});