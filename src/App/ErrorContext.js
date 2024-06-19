import React from "react";


const ErrorContext = React.createContext()

function ErrorProvider({children}) {

    const errorList = [
        { title: "100 Continue", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/100.png?raw=true" },
        { title: "101 Switching Protocols", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/101.png?raw=true" },
        { title: "102 Processing", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/102.png?raw=true" },
        { title: "103 Early Hints", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/103.png?raw=true" },
        { title: "200 OK", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/http200.jpg?raw=true" },
        { title: "201 Created", imageUrl: "" },
        { title: "202 Accepted", imageUrl: "https://cdn.discordapp.com/attachments/1253009654389145711/1253023731597443123/vinland-saga-s2-ep-9-thorfinn-wakes-up-in-a-peaceful-field-smiling.png?ex=667458c9&is=66730749&hm=5607dca8a9b0896d841dc50b9ab90fba2e7c3972853e09de391f25cf3140ab4a&" },
        { title: "203 Non-Authoritative Information", imageUrl: "" },
        { title: "204 No Content", imageUrl: "" },
        { title: "205 Reset Content", imageUrl: "" },
        { title: "206 Partial Content", imageUrl: "" },
        { title: "207 Multi-Status", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/207.png?raw=true" },
        { title: "208 Already Reported", imageUrl: "" },
        { title: "226 IM Used", imageUrl: "" },
        { title: "300 Multiple Choices", imageUrl: "" },
        { title: "301 Moved Permanently", imageUrl: "" },
        { title: "302 Found", imageUrl: "" },
        { title: "303 See Other", imageUrl: "" },
        { title: "304 Not Modified", imageUrl: "" },
        { title: "305 Use Proxy", imageUrl: "" },
        { title: "306 Switch Proxy", imageUrl: "" },
        { title: "307 Temporary Redirect", imageUrl: "" },
        { title: "308 Permanent Redirect", imageUrl: "" },
        { title: "400 Bad Request", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/400.png?raw=true" },
        { title: "401 Unauthorized", imageUrl: "" },
        { title: "402 Payment Required", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/402.png?raw=true" },
        { title: "403 Forbidden", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/403.png?raw=true" },
        { title: "404 Not Found", imageUrl: "" },
        { title: "405 Method Not Allowed", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/405.png?raw=true" },
        { title: "406 Not Acceptable", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/406.png?raw=true" },
        { title: "407 Proxy Authentication Required", imageUrl: "" },
        { title: "408 Request Timeout", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/408.png?raw=true" },
        { title: "409 Conflict", imageUrl: "" },
        { title: "410 Gone", imageUrl: "" },
        { title: "411 Length Required", imageUrl: "" },
        { title: "412 Precondition Failed", imageUrl: "" },
        { title: "413 Payload Too Large", imageUrl: "" },
        { title: "414 URI Too Long", imageUrl: "" },
        { title: "415 Unsupported Media Type", imageUrl: "" },
        { title: "416 Range Not Satisfiable", imageUrl: "" },
        { title: "417 Expectation Failed", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/417.png?raw=true" },
        { title: "418 I'm a teapot", imageUrl: "" },
        { title: "421 Misdirected Request", imageUrl: "" },
        { title: "422 Unprocessable Entity", imageUrl: "" },
        { title: "423 Locked", imageUrl: "" },
        { title: "424 Failed Dependency", imageUrl: "" },
        { title: "425 Too Early", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/425.png?raw=true" },
        { title: "426 Upgrade Required", imageUrl: "" },
        { title: "428 Precondition Required", imageUrl: "" },
        { title: "429 Too Many Requests", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/429.png?raw=true" },
        { title: "431 Request Header Fields Too Large", imageUrl: "" },
        { title: "451 Unavailable For Legal Reasons", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/451.png?raw=true" },
        { title: "500 Internal Server Error", imageUrl: "" },
        { title: "501 Not Implemented", imageUrl: "" },
        { title: "502 Bad Gateway", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/src/images/502.png?raw=true" },
        { title: "503 Service Unavailable", imageUrl: "" },
        { title: "504 Gateway Timeout", imageUrl: "" },
        { title: "505 HTTP Version Not Supported", imageUrl: "" },
        { title: "506 Variant Also Negotiates", imageUrl: "" },
        { title: "507 Insufficient Storage", imageUrl: "" },
        { title: "508 Loop Detected", imageUrl: "https://cdn.discordapp.com/attachments/1253009654389145711/1253022833546760304/maxresdefault.png?ex=667457f3&is=66730673&hm=358587ebf6fec48fb0f63bc9ed4ad94510183c16f192b66f547a1e0dd9ea9887&" },
        { title: "510 Not Extended", imageUrl: "" },
        { title: "511 Network Authentication Required", imageUrl: "" },
      ];

      return (
        <ErrorContext.Provider value={{
            errorList
        }}>
            {children}
        </ErrorContext.Provider>
    )
}

export {ErrorContext, ErrorProvider};