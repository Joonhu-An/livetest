$(document).ready(function(){
    let recomend=document.getElementById("recomend");

    recomend.addEventListener("click",function(){
      console.log("추천하기");
      Kakao.API.request({
        url: '/v1/api/talk/friends/message/send',
        data: {
          receiver_uuids: ['receiver_uuids'],
          template_id: TEMPLATE_ID,
        },
        success: function(response) {
          console.log(response);
        },
        fail: function(error) {
          console.log(error);
        },
      });
    })
});