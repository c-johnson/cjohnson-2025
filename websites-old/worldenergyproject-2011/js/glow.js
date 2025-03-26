$(document).ready(function() {
      $('.nav ul li').addGlow({ textColor: 'white', haloColor: '#aaa', radius: 100 });
      $('*').bind('glow:started', console.info);
      $('*').bind('glow:canceled', console.info);
});