app = {}

app.data = false

app.map = false

app.currentDot = false

app.run = ->
  @renderMap()
  @getData ->
    app.renderDots()
    if window.location.hash
      hash = window.location.hash.replace('#', '').split('/')
      id = hash[0]
      year = if hash[1]? then hash[1] else false
      app.showImage parseInt(id), parseInt(year)
    else
      app.showImage 201500668
    return
  return

app.renderMap = ->
  app.map = new google.maps.Map $('#map').get(0),
    center:
      lat: 36.6309049
      lng: -121.8583173
    mapTypeId: google.maps.MapTypeId.TERRAIN
    scrollwheel: false
    zoom: 12
  return

app.getData = (callback) ->
  $.getJSON 'data/images.json', (data) ->
    app.data = data;
    callback()
    return
  return

app.renderDots = ->
  $.each app.data, (id) ->
    image = @
    dot = new google.maps.Circle
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000FF',
      fillOpacity: 0.35,
      map: app.map,
      center:
        lat: this.lat
        lng: this.lon
      radius: 20
    google.maps.event.addListener dot, 'click', ->
      window.location.hash = "\##{id}"
      app.showImage id
      return
    return
  return

app.showImage = (id, year) ->
  unless year?
    year = 1972
  image = app.data[id]
  if app.currentDot
    app.currentDot.setMap null
  $('#images').html templates.components.images
    year: year
    image_id : id
    image : image
  $('.year-selector a').on 'click', ->
    app.showImage id, $(@).data('year')
    return
  imageLoaded = ->
    $('.image-compare').twentytwenty()
    return
  $('.image-compare img').each ->
    if this.complete
      imageLoaded.call this
    $(this).one 'load', imageLoaded
    return
  $(window).trigger 'resize.twentytwenty'
  app.map.setCenter
    lat : image.lat
    lng : image.lon
  app.map.setZoom 15
  app.currentDot = new google.maps.Circle
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.75,
    map: app.map,
    center:
      lat: image.lat
      lng: image.lon
    radius: 50
  return

$(document).ready ->
  app.run()
  return
