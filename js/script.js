
$( document ).ready(function() {
    //var div = $(".overlap");
    if (window.matchMedia('(max-width: 992px)').matches) {
        $(".overlap").css("margin", "auto");    
    }
    else if (window.matchMedia('(min-width: 992px)').matches) {
      $(".overlap").animate({marginLeft:'10%'}, 1200);   
    }
  });

  $( window ).on("resize", function() {
    if (window.matchMedia('(max-width: 992px)').matches) {
      $(".overlap").css("margin", "auto");    
    }
    else if (window.matchMedia('(min-width: 992px)').matches) {
      $(".overlap").css("margin-left","10%");   
    } 
  });

$(".toggle").on("click", function(){
    $(".dropDown").slideToggle();
  });

  $( window ).on("resize", function(){
    $(".dropDown").css("display", "none");
  });

  // Menu toggle animation
  
  const menuBtn = document.querySelector('.toggle');
  let menuOpen = false;
  menuBtn.addEventListener('click',() => {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    }
    else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  });

  
  // Modal galery script

  $(document).ready(function() {
    var $modal = $('#imageModal');
    var $modalImage = $modal.find('.modal-body img');
    var $modalCaption = $modal.find('.modal-caption');
    var $enlargeImages = $('.enlarge-image');
    var currentIndex = 0;

    $enlargeImages.click(function() {
      var image = $(this);
      var caption = image.data('caption');
      var imageIndex = $enlargeImages.index(image);

      currentIndex = imageIndex;

      $modalImage.attr('src', image.attr('src'));
      $modalCaption.text(caption);
      $modal.modal('show');
    });

    $modal.on('hide.bs.modal', function() {
      $modalImage.attr('src', '');
      $modalCaption.text('');
    });

    $modal.on('keydown', function(e) {
      if (e.keyCode === 37) {
        currentIndex = (currentIndex - 1 + $enlargeImages.length) % $enlargeImages.length;
        updateModalImage();
      } else if (e.keyCode === 39) {
        currentIndex = (currentIndex + 1) % $enlargeImages.length;
        updateModalImage();
      }
    });

    $modal.find('.modal-prev').click(function() {
      currentIndex = (currentIndex - 1 + $enlargeImages.length) % $enlargeImages.length;
      updateModalImage();
    });

    $modal.find('.modal-next').click(function() {
      currentIndex = (currentIndex + 1) % $enlargeImages.length;
      updateModalImage();
    });

    function updateModalImage() {
      var image = $enlargeImages.eq(currentIndex);
      var caption = image.data('caption');

      $modalImage.attr('src', image.attr('src'));
      $modalCaption.text(caption);
    }
  });

  