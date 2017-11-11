<script type="text/javascript">
  $(document).ready(function() {
       $('.frm_timkiem').submit(function(){
          var timkiem = $('#name_tk').val();
          if(!timkiem){
            alert('Bạn chưa nhập từ khóa . ');
          } else {
            window.location.href="tim-kiem.html&keywords="+timkiem;
          }
          return false;
      })
  });
</script>

 <div id="timkiem">
       <form action="tim-kiem.html" method="" name="frm2" class="frm_timkiem">
                <input type="search" name="timkiem" id="name_tk" class="input" placeholder="Từ khóa tìm kiếm">
                <button type="submit" value="" id="btn" class="nut_tim"></button>
        </form>
  </div>