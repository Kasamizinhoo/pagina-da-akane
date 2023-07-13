$(document).ready(function() {
  $("a[href^='#']").on("click", function(e) {
    e.preventDefault();

    var target = $(this).attr("href");
    var offset = $(target).offset().top;

    $("html, body").animate({
      scrollTop: offset
    }, 800);
  });
});

$(document).ready(function() {
    // faz com que o título apareça suavemente quando a página é carregada
    $(".titulo").hide().fadeIn(2000);
     // aiciona uma animação de rolagem suave para todos os links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
    

  $(document).ready(function() {
    $(window).scroll(function() {
      var topoJanela = $(window).scrollTop();
      var alturaJanela = $(window).height();
  
      $(".animar").each(function() {
        var elementoTopo = $(this).offset().top;
  
        if (elementoTopo < topoJanela + alturaJanela) {
          $(this).addClass("animar-rolagem");
        }
      });
  
      if (topoJanela > 200) {
        $(".cabecalho-menu").addClass("menu-rolagem");
      } else {
        $(".cabecalho-menu").removeClass("menu-rolagem");
      }
    });
  });
  

  $(document).ready(function() {
    // adiciona animação de zoom in ao passar o mouse na imagem
    $(".conteudo-principal-imagem").on("mouseenter", function() {
      $(this).addClass("zoom-in");
    });
  
    // remove a classe zoomin ao remover o mouse da imagem
    $(".conteudo-principal-imagem").on("mouseleave", function() {
      $(this).removeClass("zoom-in");
    });
  });

  $(document).ready(function() {
    $(".conteudo-principal-botao").hover(
      function() {
        $(this).addClass("zoom-in");
      },
      function() {
        $(this).removeClass("zoom-in");
      }
    );
  });
  

  
  
})