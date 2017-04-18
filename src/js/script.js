$(function(){
  $('.navbar-header-inner').on('show.bs.dropdown', function(ev) {
    var $this = $(this);
    $this.find('.open-menu').addClass('open');
  });
  $('.navbar-header-inner').on('hide.bs.dropdown', function(ev) {
    var $this = $(this);
    $this.find('.open-menu').removeClass('open');
  });

  function myTemplateSelection(data) {
    var $state = $('<span>' + data.text + '</span><span class="select2_custom-arrow"></span>');
    return $state;
  }

  $('select').select2({
    placeholder: "Год рождения",
    // allowClear: true,
    templateSelection: myTemplateSelection
  });

  $('.form-control input').change(function() {
    if($(this).val())
        $(this).addClass('has_value');
      else
        $(this).removeClass('has_value');
  });

  $('select').on('select2:open', function () {
      $('.select2-results__options').mCustomScrollbar('destroy');
      $('.select2-results__options').mCustomScrollbar('update');
      setTimeout(function() {
          $('.select2-results__options').mCustomScrollbar({
              axis: 'y',
              scrollbarPosition: 'inside',
              advanced:{
                  updateOnContentResize: true
              },
              live: true
          });
      }, 0);
  });

  $("#range_01").ionRangeSlider({
    grid: true,
    min: 0,
    max: 100,
    from: 50,
    grid_num: 4
  });
});