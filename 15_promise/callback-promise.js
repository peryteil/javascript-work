const { run } = require("node:test");

function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const idol = {
          id: userId,
          name: "장원영",
        };
        resolve(idol); // resolve 호출
      } catch (error) {
        reject(error); // 에러 처리
      }
    }, 1000);
  });
}

function getArticle(articleID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const articles = [
          {
            id: 1,
            name: "장원영 첫 글",
          },
          {
            id: 2,
            name: "장원영 두 번째 글",
          },
        ];
        resolve(articles); // resolve 호출
      } catch (error) {
        reject(error); // 에러 처리
      }
    }, 1000);
  });
}

function getComments(commentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const comments = [
          {
            id: 1,
            comment: "첫 댓글",
          },
          {
            id: 2,
            comment: "두 번째 댓글",
          },
          {
            id: 3,
            comment: "세 번째 댓글",
          },
        ];
        resolve(comments); // resolve 호출
      } catch (error) {
        reject(error); // 에러 처리
      }
    }, 1000);
  });
}

// Async : 비동기, await : 기다림....
// 늘 같이 다니는 짝...

// Promise 체인
getUser(1)
  .then((user) => {
    console.log("아이돌 정보:", user);
    return getArticle(user.id);
  })
  .then((articles) => {
    console.log("게시글 목록:", articles);
    return getComments(articles[0].id);
  })
  .then((comments) => {
    console.log("댓글 목록:", comments);
  })
  .catch((err) => {
    console.error("에러 발생:", err);
  })
  .finally(() => console.log("작업 종료"));

async function runPromise() {
  await getUser(2).then((user) => {
    if (user != null) {
      console.log("User : ", user);
    } else {
      console.log("자료가 없어요");
    }
  });
}
runPromise();
