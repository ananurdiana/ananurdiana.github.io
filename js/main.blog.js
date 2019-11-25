(function(){
  // side menu
  for(var i = 0; i< $('h5').length; i++){
    a = $('h5:eq('+i+')').text();
    b = a.toLowerCase();
    id = b.replace(/ /g, "-");
    $(".navbar-nav").append('<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#'+id+'">'+a+'</a></li>');
    console.log(a);
  }
});
