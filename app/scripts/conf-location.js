/* globals alert */

(function($) {
  'use strict';

  if ($('#contact')[0]) {

    var GMaps = window.GMaps || {};

    /**
     * Location
     */
    var map,
        mapOpts = {}
    ;
    /**
     * Draw route
     * @param  {[type]} opts [description]
     * @return {[type]}      [description]
     */
    var drawRouteInMaps = function(opts) {
      //  Clean oldest routes
      map.cleanRoute();

      map.drawRoute({
        origin: [opts.origin.lat , opts.origin.lng ],
        destination: [opts.destination.lat, opts.destination.lng],
        travelMode: 'driving',
        strokeColor: '#131540',
        strokeOpacity: 0.6,
        strokeWeight: 6
      });
    };


    GMaps.geolocate({
      success: function(position) {
        mapOpts.origin = {
          lat: position.coords.latitude.toFixed(6),
          lng: position.coords.longitude.toFixed(6)
        };
      },
      error: function() {
        /*  Add Salvador Location*/
        mapOpts.origin = {
          lat: -12.971606,
          lng: -38.501587
        };
      },
      always: function() {
        if ( !navigator.geolocation ) {
          alert('Your browser does not support geolocation');
        }
        /* Init Gmaps class*/
        map = new GMaps({
          div: '#contact',
          lat: mapOpts.origin.lat,
          lng: mapOpts.origin.lng,
          zoomControl : true,
          zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
          }
        });

        map.addMarker({
          lat:  mapOpts.origin.lat,
          lng:  mapOpts.origin.lng,
          color: 'blue',
          title: 'Você está aqui ',
          infoWindow: {
            content: '<p>Você está aqui </p>'
          },
          verticalAlign: 'top',
          horizontalAlign: 'center'
        });

        /* Set user location for center map*/
        map.setCenter(mapOpts.origin.lat, mapOpts.origin.lng);

        mapOpts.destination = {
          lat: -12.938570,
          lng: -38.386982,
          icon: '/images/pin.png',
          title: 'LinguÁgil 2015 - SENAI CIMATEC ( 11 a 14 de março ).'
        };

        map.addMarker({
          lat:  mapOpts.destination.lat,
          lng:  mapOpts.destination.lng,
          title:  mapOpts.destination.title,
          icon: mapOpts.destination.icon,
          infoWindow: {
            content: '<p>' + mapOpts.destination.title + '</p>' +
                    '<p><a id="draw-destination-route" data-talk="false">Como chegar</a></p>' +
                    '<p><a href="http://portais.fieb.org.br/senai/senai-na-sua-cidade/salvador/cimatec.html" target="_blank" >Website</a></p>'
          },
        });

        $(document).on('click', '#draw-destination-route', function(e) {
          e.preventDefault();
          var destinationTalk = $(this).data('talk');
          var opts = {
              origin: mapOpts.origin,
              destination : (destinationTalk ? mapOpts.destinationTalks : mapOpts.destination)
            }
          ;
          drawRouteInMaps(opts);
        });

        map.addControl({
          position: 'top_right',
          style: {
            margin: '5px',
            padding: '1px 6px',
            border: 'solid 1px #717B87',
            background: '#fff'
          },
          content: 'Minha localização',
          events: {
            click: function(){
              map.setCenter(mapOpts.origin.lat, mapOpts.origin.lng);
            },
          }
        });

        map.addControl({
          position: 'top_right',
          style: {
            margin: '5px',
            padding: '1px 6px',
            border: 'solid 1px #717B87',
            background: '#fff'
          },
          content: 'Local do evento dias 11 a 14 de março',
          events: {
            click: function(){
              map.setCenter(mapOpts.destination.lat, mapOpts.destination.lng);
            },
          }
        });

        map.fitZoom();
      }
    });
  }

})(jQuery);
