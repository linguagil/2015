(function($) {
  'use strict';

  /**
   * Getting application base url
   * @return {string} application base url
   */
  // function baseUrl(){
  //   var l = window.location;
  //   return l.protocol + '//' + l.host + '/';
  // }
  // var BASE_URL = baseUrl();

  /**
   *  Calling fastclick in application
   */
  var FastClick = window.FastClick || {},
      $window = $(window)
  ;

  FastClick.attach(document.body);

  //  Add target blank in realtime for htmllint validation
  $('a[rel="external"], .external').attr('target','_blank');

  $('#menu-close, #menu-toggle, .sidebar-nav li a[data-animation="scroll"]').click(function(e) {
    e.preventDefault();
    $('#sidebar-wrapper').toggleClass('active');
  });

  if ( $('.nav-tabs')[0] ) {
    var date = new Date(),
      month = date.getMonth(),
      day = date.getDate(),
      $navTabs = $('.nav-tabs')
    ;
    if (month < 2 || (month === 2 && day <= 11)) {
      $navTabs.find('a[href="#tab1"]').trigger('click');
    } else if (month === 2 && day === 12) {
      $navTabs.find('a[href="#tab2"]').trigger('click');
    } else if (month === 2 && day === 13) {
      $navTabs.find('a[href="#tab3"]').trigger('click');
    } else {
      $navTabs.find('a[href="#tab4"]').trigger('click');
    }
  }

  /**
   * Sponsors
   */
  if ( $window.width() >= 886) {
    $('.thumbnail').hover(
      function(){
        $(this).find('.caption').slideDown(250); //.fadeIn(250)
      },
      function(){
        $(this).find('.caption').slideUp(250); //.fadeOut(205)
      }
    );
  }

  /**
   * Active scroll to top of target element
   * @param  {[type]} scrollHeight height to scroll EX: activeScrollTop( $('div').offset )
   * @return {void}
   */
  function activeScrollTop( scrollHeight ) {
    $('html, body').animate({ scrollTop: scrollHeight }, 'fast');
  }

  /**
   * Active scroll to top of target element
   * @param  {[type]} scrollHeight height to scroll EX: activeScrollTop( $('div').offset )
   * @return {void}
   */
  function activeCloseAlertMessage( ) {
    $('.close').on('click', function(e){
      e.preventDefault();
      $(this).parents('.send-mail-message').slideUp('fast').html('');
    });
  }

  //  FORM VALIDATION SEND EMAIL
  $('#send-mail').submit( function(event){
    event.preventDefault();
    var sendMailItems = $('#send-mail').serializeArray(),
        $sendMailMessage = $('.send-mail-message'),
        el = {},
        message = []
    ;
    $.each( sendMailItems, function(i, field) {
      el[field.name] = field.value;
    });
    if (el.nome === '') {
      message.push('Nome é obrigatório');
    }
    if (el.email === '') {
      message.push('Email é obrigatório');
    }
    //  Return message for user
    if( message.length !== 0) {
      $sendMailMessage.html('<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">×</button><p>' + message.join('<br/>') + '</p></div>' )
                        .slideDown('fast');
      activeScrollTop($sendMailMessage.offset().top - 100 );
      //  Activate alert close click
      activeCloseAlertMessage();
      return;
    }

    $.post('save_email.php', el, function(data) {
      $sendMailMessage.html(data);
      activeScrollTop($sendMailMessage.offset().top - 100);
      //  Activate alert close click
      activeCloseAlertMessage();
    });
  });

  $('a[href*=#][data-animation="scroll"]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name="' + this.hash.slice(1) +'"]');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  /**
   * Render video
   */
  //  Calling video target
  $('.video-target').on('click', function(e){
    e.preventDefault();
    var $videoTarget = $(this),
        targetID = $videoTarget.data('target'),
        targetVideo = $videoTarget.data('video-src'),
        videoWidth = $videoTarget.data('width'),
        videoHeight = $videoTarget.data('height')
    ;

    if ( $window.width() <= 600) {
      var $imgResponsive = $('.img-responsive');
      videoWidth = $imgResponsive.width();
      videoHeight = $imgResponsive.height();
    }
    getVideoFileFromPlayer(targetID, {
      'videoPath': targetVideo,
      'width': videoWidth,
      'height': videoHeight
    });
  });

  /**
   * Render Video player
   * @param  {[type]} target  DOMElement target
   * @param  {[type]} options Array options
   * @return {[void]}
   */
  function getVideoFileFromPlayer(target, options) {

    var type = '',
        $target = $(target);

    if( options.videoPath.indexOf('vimeo') !== -1 ) {
      type = 'type="video/vimeo"';
    }
    if( options.videoPath.indexOf('youtube') !== -1) {
      type = 'type="video/youtube"';
    }

    options.count = $('.video-player').size() + 1;

    /**
     *   Width and height verification
     *   If you want get container width and height
     */
    $target.html('<video class="video-player" autoplay="true" width="'+options.width+'" height="'+options.height+'" id="player'+ options.count +'" src="' + options.videoPath + '" ' + type + ' /></video>');

    $('#player'+ options.count).mediaelementplayer({
      //enableAutosize: true,
      // if the <video width> is not specified, this is the default
      //defaultVideoWidth: 500,
      // if the <video height> is not specified, this is the default
      //defaultVideoHeight: 400,
      // if set, overrides <video width>
      /*videoWidth: -1,
      // if set, overrides <video height>
      videoHeight: -1,*/
      // show framecount in timecode (##:00:00:00)
      showTimecodeFrameCount: true,
      // used when showTimecodeFrameCount is set to true
      framesPerSecond: 25,
      // Hide controls when playing and mouse is not over the video
      alwaysShowControls: true,
      // force iPad's native controls
      iPadUseNativeControls: true,
      // force iPhone's native controls
      iPhoneUseNativeControls: true,
      // force Android's native controls
      AndroidUseNativeControls: true,
      // when this player starts, it will pause other players
      pauseOtherPlayers: true,
      // allows testing on HTML5, flash, silverlight
      // auto: attempts to detect what the browser can do
      // auto_plugin: prefer plugins and then attempt native HTML5
      // native: forces HTML5 playback
      // shim: disallows HTML5, will attempt either Flash or Silverlight
      // none: forces fallback view
      mode: 'auto',
      // remove or reorder to change plugin priority and availability
      plugins: ['vimeo', 'youtube', 'native', 'flash', 'silverlight']
    });
    //  Removing controls if video == vimeo
    if( options.videoPath.indexOf('vimeo') !== -1 ) {
      $target.find('.mejs-controls').remove();
    }

  }

  //  jquery-unveil load
  if ( $('.load-image-async')[0] ){
    $('.load-image-async').unveil();
  }

  $window.load( function(){
    if ( $window.width() <= 600 ) {
      $('.video-target').trigger('click');
    }
  });

})(jQuery);
