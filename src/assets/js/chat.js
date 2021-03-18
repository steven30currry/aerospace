

export default function chat(){
  var d, h, m,
  i = 0;
  var msg;

  $(window).on('load',(function() {
    $('.messages-content').mCustomScrollbar()
    setTimeout(function() {
      getMessage();
    }, 100);
  }));

function timeAdd0(str) {
    if(str.length<=1){
      console.log('33')
        str='0'+str;
    }
    return str
}
function updateScrollbar() {
  $('.messages-content').mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
  scrollInertia: 10,
  timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
  m = d.getMinutes();
  var day=timeAdd0(d.getHours());
  var min=timeAdd0(m)
  $('<div class="timestamp">' +  day + ':' + min + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
  return false;
  }
  $('<div class="message message-personal">' +
  '<figure class="avatar right-head"><img src="https://img-blog.csdnimg.cn/20210227161750923.png#pic_center" /></figure>'
   + msg+'</div>').appendTo($('.mCSB_container')).addClass('new');

  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    getMessage();
  }, 1000 );
}

$('.message-submit').click(function() {
insertMessage();
});

$(window).on('keydown', function(e) {
if (e.which == 13) {
insertMessage();
return false;
}
})



function getMessage() {
  if ($('.message-input').val() != '') {
  return false;
  }
 
  $('<div class="message loading new"><figure class="avatar left-head"><img src="https://img-blog.csdnimg.cn/20210202010304545.png#pic_center" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  // 先生成头像

  if(i==0){
    var beginmsg="你好，我是知识科普机器人"
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar left-head"><img src="https://img-blog.csdnimg.cn/20210202010304545.png#pic_center" /></figure>' + beginmsg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++
    return;
  }

  var question=msg
  $.ajax({
    url: "http://39.100.119.221:8085/robat/query/",
    type: "GET",
    data:{
        "questionStr": question
    },
    success: function(data) {
        console.log('yes')
        answer(data.data)
    },
    error: function() {
        alert('网络错误')//失败
    }
  });

  function answer(data){
    setTimeout(() => {
      $('.message.loading').remove();
      $('<div class="message new"><figure class="avatar left-head"><img src="https://img-blog.csdnimg.cn/20210202010304545.png#pic_center" /></figure>' + data + '</div>').appendTo($('.mCSB_container')).addClass('new');
      setDate();
      updateScrollbar();
    }, 1000);
   

  

  }
 
  }
}