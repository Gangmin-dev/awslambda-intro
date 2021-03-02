"use strict";
const dbModule = require("./module/db_module");
const httpModule = require("./module/http_module");

module.exports.hello = async (event) => {
  const [dbResult, httpResult] = await Promise.all([
    dbModule.getCommentByDB(),
    httpModule.getUsersByHttp(),
  ]);

  console.log("2. DB RESULT");
  if (dbResult) {
    dbResult.forEach((comment) => {
      console.log(`id = ${comment.id}, commnet = ${comment.comment}`);
    });
  }

  console.log("3. HTTP RESULT");
  if (httpResult) {
    httpResult.forEach((user) => {
      console.log(
        `id = ${user.id}, name = ${user.name}, email = ${user.email}`
      );
    });
  }

  // const dbResult = await dbModule.getCommentByDB();
  // console.log("2. DB RESULT");
  // if (dbResult) {
  //   dbResult.forEach((comment) => {
  //     console.log(`id = ${comment.id}, commnet = ${comment.comment}`);
  //   });
  // }
  // const httpResult = await httpModule.getUsersByHttp();
  // console.log("3. HTTP RESULT");
  // if (httpResult) {
  //   httpResult.forEach((user) => {
  //     console.log(
  //       `id = ${user.id}, name = ${user.name}, email = ${user.email}`
  //     );
  //   });
  // }
};
