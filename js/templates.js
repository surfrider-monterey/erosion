this["templates"] = this["templates"] || {};
this["templates"]["components"] = this["templates"]["components"] || {};

this["templates"]["components"]["images"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"image-compare twentytwenty-container\">\n  <img src=\"https://surfrider-monterey.github.io/coastal-erosion-photos/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.y2015 : stack1), depth0))
    + "/1972.JPG\" alt=\"\"/>\n  <img src=\"https://surfrider-monterey.github.io/coastal-erosion-photos/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.y2015 : stack1), depth0))
    + "/2015.JPG\" alt=\"\"/>\n</div>\n";
},"useData":true});