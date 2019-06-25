$( document ).ready(function(){

  var feed = new Instafeed({
    get: 'user',
    userId: '595791341',
    clientId: 'b8473a9d5e6d42828a343390f2b49ccc',
    accessToken: '595791341.1677ed0.f8d49f43f10946bca257ab7c317efe82',
    resolution: "standard_resolution",
    limit: "9000",
    template:'<div class="item "><a href="{{image}}" title="{{link}}"><img src="{{image}}" alt="{{link}}"></img></a></div>',
    sortBy: "most-recent",
    links: false,
    

  
});
feed.run();


$('.gallary').magnificPopup({
  delegate: 'a',
  type: 'image',
  // src:'{{link}}',

  // other options
  gallery: {
    enabled: true, // set to true to enable gallery
    navigateByImgClick: true,
    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
  
    tPrev: 'Previous (Left arrow key)', // title for left button
    tNext: 'Next (Right arrow key)', // title for right button
  
  },

});





}) 
  