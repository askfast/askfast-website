define(["modals/modals"],function(e){e.factory("AskFast",["$resource","$q",function(e,t){var n=e("http://char-a-lot.appspot.com/rpc",{},{request:{method:"POST",params:{}}});return n.prototype.contact=function(e){var r=t.defer(),i={message:e.message,sender:e.name+" "+e.surname+" <"+e.email+">",subject:"New message from AskFast, related to: "+e.subject};return n.request({},{method:"outboundCallWithMap",params:{adapterID:"2dbe5b60-154a-11e3-b728-00007f000001",addressMap:{"abektes@ask-cs.com":"Contact Inquiry"},url:"http://askfastmarket1.appspot.com/resource/question/comment?message="+encodeURIComponent(i.message),publicKey:"",privateKey:"",senderName:i.sender,subject:i.subject}},function(e){r.resolve(e)},function(e){r.resolve({error:e})}),r.promise},new n}])});