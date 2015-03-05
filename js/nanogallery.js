  $(document).ready(function () {
    
   jQuery("#nanoGallery").nanoGallery({
    thumbnailWidth: 160,
    thumbnailHeight: 'auto',
    thumbnailGutterWidth: 30,
    thumbnailGutterHeight: 30,
    maxItemsPerLine: 4,
   thumbnailLabel:{ display: false},
      thumbnailHoverEffect: [{ name: 'imageScale150', duration: 300 }],
});



  });