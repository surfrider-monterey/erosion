(function() {
  var app;

  app = {};

  app.data = false;

  app.map = false;

  app.currentDot = false;

  app.run = function() {
    this.renderMap();
    this.getData(function() {
      app.renderDots();
      if (window.location.hash) {
        app.showImage(parseInt(window.location.hash.replace('#', '')));
      }
    });
  };

  app.renderMap = function() {
    app.map = new google.maps.Map($('#map').get(0), {
      center: {
        lat: 36.6309049,
        lng: -121.8583173
      },
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      scrollwheel: false,
      zoom: 13
    });
  };

  app.getData = function(callback) {
    $.getJSON('data/images.json', function(data) {
      app.data = data;
      callback();
    });
  };

  app.renderDots = function() {
    $.each(app.data, function(id) {
      var dot, image;
      image = this;
      dot = new google.maps.Circle({
        strokeColor: '#0000FF',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#0000FF',
        fillOpacity: 0.35,
        map: app.map,
        center: {
          lat: this.lat,
          lng: this.lon
        },
        radius: 20
      });
      google.maps.event.addListener(dot, 'click', function() {
        window.location.hash = "\#" + id;
        app.showImage(id);
      });
    });
  };

  app.showImage = function(id) {
    var image, imageLoaded;
    image = app.data[id];
    if (app.currentDot) {
      app.currentDot.setMap(null);
    }
    $('#images').html(templates.components.images(image));
    imageLoaded = function() {
      $('.image-compare').twentytwenty();
    };
    $('.image-compare img').each(function() {
      if (this.complete) {
        imageLoaded.call(this);
      }
      $(this).one('load', imageLoaded);
    });
    $(window).trigger('resize.twentytwenty');
    app.map.setCenter({
      lat: image.lat,
      lng: image.lon
    });
    app.map.setZoom(15);
    app.currentDot = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.75,
      map: app.map,
      center: {
        lat: image.lat,
        lng: image.lon
      },
      radius: 50
    });
  };

  $(document).ready(function() {
    app.run();
  });

}).call(this);
