$(document).ready(function(){
           $('#loginTrigger').click(function(){
$('#loginModal').modal();
           });
           $('#registerTrigger').click(function(){
$('#registerModal').modal();
           });     

$("#petsearch").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#petgrid .pet-col").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
// $("#feefilter").on("change", function() {
//      // var value = $(this).val().toLowerCase();
//      var value=parseInt("190");
//     $("#petgrid .pet-col").filter(function() {
//       // $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//       $(this).toggle(parseInt($(this).find('.pet-price').text())>value)
//       // parseInt($(this ".pet-price").text().toLowerCase())>value
//     });
//   });

  $("#articlesearch").on("keyup", function() {
     var value = $(this).val().toLowerCase();
    $("#pet-articles .article-col").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });           
        });
function showArticle(articles)
{
  $('#articleModal').modal();
  var article = $(articles).find('.petarticle');
  var body =article.find('.blockquote').html();
  var head =article.find('.petarticle-header').text();
$('#article-head').text(head);
$('#article-content').html(body);
}
function filterfree(chkfree) {
        if(chkfree.checked) 
        {
           var value = "free";
          $("#petgrid .pet-col").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
        }
        else
        {
          $("#petgrid .pet-col").show();
        }
    }
 function disableadoptionfee(checkfree) {
        var petfee = document.getElementById("pet-fee");
        petfee.value=0;
        petfee.disabled = !checkfree.checked ? false : true;
        if (!petfee.disabled) {
            petfee.focus();
            petfee.value=null;
        }
    }
function replaceClass(id, oldClass, newClass) {
  var elem =document.getElementById(id);
  
  if ($(elem).hasClass(oldClass)) {
    $(elem).removeClass(oldClass);
    
  }
  $(elem).addClass(newClass);
}
var article = $('#pet-articles').find('.petarticle-body').find('p');
 function excerpt(excerptElement, number , more = "..."){
    excerptElement.each(function(){
    var articlebody = $(this).text(),
    articlebodyExcerpt,
    toArray = articlebody.split("", number),
    joinArray = toArray.join(''),
    joinArrayToArray = joinArray.split(" "),
    joinArrayToArrayPop = joinArrayToArray.pop(),
    joinArrayToArrayPopPush = joinArrayToArray.push(more),
    joinArrayToArrayPopPushJoin = joinArrayToArray.join(' '),
    articlebodyExcerpt = joinArrayToArrayPopPushJoin;
    if(articlebody.length > number){
      articlebody = articlebodyExcerpt;
      $(this).text(articlebody);
    }
    });
  }
  excerpt(article, 200);
$(function() {
    $(document).on("change",".uploadFile", function()
    {
    		var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return;
 
        if (/^image/.test( files[0].type)){
            var reader = new FileReader(); 
            reader.readAsDataURL(files[0]);
 
            reader.onloadend = function(){ 
uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
            }
        }
      
    });
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#img-prev').attr('src', e.target.result);
      $('#img-prev').removeClass("p-5");
      $('#img-prev').addClass("p-1");
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

$("#pet-img").change(function() {
  readURL(this);
});

