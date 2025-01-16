// 콜백지옥.... Callback-Hell
function getUser(userId, callback) {
  setTimeout(() => {
    // 1초 지나서 실행 할 내용
    const idol = {
      id: userId,
      name: '장원영',
    };

    callback(idol);
  }, 1000);
}

// 게시글 얻어오기
function getArticle(articleID, callback) {
  setTimeout(() => {
    const articles = [
      {
        id: 1,
        name: '장원영 첫 글',
      },
      {
        id: 2,
        name: '장원영 두 번째 글',
      },
    ];
    callback(articles);
  }, 1000);
}

// 댓글 얻어오기
function getComments(commentId, callback) {
  setTimeout(() => {
    const comments = [
      {
        id: 1,
        comment: '첫 댓글',
      },
      {
        id: 2,
        comment: '두 번째 댓글',
      },
      {
        id: 3,
        comment: '세 번째 댓글',
      },
    ];
    callback(comments); // callback 호출 추가
  }, 1000);
}

// 콜백 체인 실행
getUser(1, (result) => {
  console.log('아이돌 정보 : ', result);
  getArticle(result.id, (articles) => {
    console.log('게시글 목록 : ', articles);
    getComments(articles[0].id, (comments) => {
      console.log('댓글 목록 : ', comments);
    });
  });
});