const http = require("http");

// REST API 호출하고, 결과 JSON을 읽어 출력
exports.getUsersByHttp = () => {
  return new Promise((resolve, reject) => {
    const options = {
      host: "jsonplaceholder.typicode.com",
      port: 80,
      path: "/users",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const request = http.request(options, (response) => {
      let body = "";
      response.on("data", (data) => {
        body += data;
      });
      response.on("end", () => {
        resolve(JSON.parse(body));
      });
      response.on("error", (err) => {
        console.log("http-error:", err);
      });
    });
    request.end();
  });
};
