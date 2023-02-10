import './App.css';
import $ from 'jquery';
import Index from './pages/Index';


function App() {

  $('.heamburger').click(function(){
    $(this).next().slideToggle('nav');
  });
    
  $('.menu_arrow > .fa-angle-down').click(function(e) {
    
    e.preventDefault();
    let $this = $(this);
    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
    } else {
      $this.parent().parent().find('.submenu').removeClass('show');        
      $this.parent().parent().find('.submenu').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
    }
    if($(this).hasClass('menu_active')){
        $('.menu_arrow > .fa-angle-down').removeClass('menu_active');
    }
    else{         
      $('.menu_arrow > .fa-angle-down').removeClass('menu_active');
      $(this).addClass('menu_active');
    }
    
    });
    $('.sub_menu_arrow > .fa-angle-right').click(function(e) {	
              e.preventDefault();
              let $this = $(this);
              if ($this.next().hasClass('show')) {
                  $this.next().removeClass('show');
                  $this.next().slideUp(350);
              } else {
                  $this.parent().parent().find('.sub_sub_menu').removeClass('show');        
                  $this.parent().parent().find('.sub_sub_menu').slideUp(350);
                  $this.next().toggleClass('show');
                  $this.next().slideToggle(350);
              }
    
          if($(this).hasClass('submenu_active')){
        $('.sub_menu_arrow > .fa-angle-right').removeClass('submenu_active');
        }
        else{         
          $('.sub_menu_arrow > .fa-angle-right').removeClass('submenu_active');
          $(this).addClass('submenu_active');
        }
          
  });

  return (
    <div>
      <Index />
    </div>
  );
}

export default App;
