function solution(){
    let xhr = new XMLHttpRequest();
   
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let responseObj = this.responseText;
             for(let a in Object.entries(responseObj)){
               $('.comment-list').append(`<div class="comment-item"><div class="comment-item__username">${a.username}</div><div class="comment-item__message">${a.message}</div></div>`);
              }
        }
        else if(this.readyState ==3){
            let i =0;         
            while(i< xhr.response.length){
                 $('.comment-list').append(`<div class="comment-item"><div class="comment-item__username">Loading...</div><div class="comment-item__message">Loading...</div></div>`);
                  i++;
              }
        }
    };
    xhr.open("GET","https://www.example.com/comments?count=10", true);
    xhr.responseType = 'json';
    xhr.send();
  }
  solution();




  **************************************************************************************************






  function solution(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
      let responseObj = xhr.response;
             for(let a in Object.entries(responseObj)){
               $('.comment-list .comment-item .comment-item__username').text(`${a.username}`);
               $('.comment-list .comment-item .comment-item__message').text(`${a.message}`);
              }
};

xhr.onerror = function() { // only triggers if the request couldn't be made at all
  $('.comment-list').text("");
};

xhr.onprogress = function(event) { let i =0;         
            while(i< xhr.response.length){
                 $('.comment-list').append(`<div class="comment-item"><div class="comment-item__username">Loading...</div><div class="comment-item__message">Loading...</div></div>`);
                  i++;
              }
};
  
    xhr.open("GET","https://www.example.com/comments?count=10", true);
    xhr.responseType = 'json';
    xhr.send();
  }
  solution();