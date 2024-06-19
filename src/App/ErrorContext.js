import React from "react";


const ErrorContext = React.createContext()

function ErrorProvider({children}) {

    const errorList = [
        { title: "100 Continue", imageUrl: "https://media.discordapp.net/attachments/1253009654389145711/1253013329236983838/400px-SC-E5-TBC.png?ex=66744f19&is=6672fd99&hm=37b7f75774946eb25588603ed4e23444c58866974eff44e86c14877d4afd0450&=&format=webp&quality=lossless" },
        { title: "101 Switching Protocols", imageUrl: "https://media.discordapp.net/attachments/1253009654389145711/1253012520466251786/6a2d56eed98439a1b8687b4464ec89df.png?ex=66744e58&is=6672fcd8&hm=aa073a501ec77cd318b851f9edbcf2593ce262eadf19dd08e0f2561c6243212e&=&format=webp&quality=lossless&width=1193&height=671" },
        { title: "102 Processing", imageUrl: "https://media.discordapp.net/attachments/1253009654389145711/1253015028085428336/s_day11-23-01.png?ex=667450ae&is=6672ff2e&hm=74dc293c539488070c0516dff300b6daf1b33e48f474f359e7a988bbd72f76aa&=&format=webp&quality=lossless" },
        { title: "103 Early Hints", imageUrl: "https://media.discordapp.net/attachments/1253009654389145711/1253016239807135825/yotsuba-Go-Toubun-no-Hanayome.png?ex=667451cf&is=6673004f&hm=e75c83797d2b4ddb8c63c35ec62a5933aecfb407aa2e4233a9a0aff9a86af4ce&=&format=webp&quality=lossless" },
        { title: "200 OK", imageUrl: "https://github.com/demsuru/anime-http-error/blob/main/images/http200.jpg?raw=true" },
        { title: "201 Created", imageUrl: "" },
        { title: "202 Accepted", imageUrl: "https://cdn.discordapp.com/attachments/1253009654389145711/1253023731597443123/vinland-saga-s2-ep-9-thorfinn-wakes-up-in-a-peaceful-field-smiling.png?ex=667458c9&is=66730749&hm=5607dca8a9b0896d841dc50b9ab90fba2e7c3972853e09de391f25cf3140ab4a&" },
        { title: "203 Non-Authoritative Information", imageUrl: "" },
        { title: "204 No Content", imageUrl: "" },
        { title: "205 Reset Content", imageUrl: "" },
        { title: "206 Partial Content", imageUrl: "" },
        { title: "207 Multi-Status", imageUrl: "https://cdn.discordapp.com/attachments/1253009654389145711/1253028704167399424/komi-najimi-introduction.png?ex=66745d6b&is=66730beb&hm=d5099deb09d7abb857bf68548a76677789dec366d629a4f57eb3f43b25dcfe35&" },
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
        { title: "400 Bad Request", imageUrl: "https://cdn.discordapp.com/attachments/1253009654389145711/1253028037046308944/maxresdefault.png?ex=66745ccc&is=66730b4c&hm=29b7c882bd5b1ba4829abd4e13c38061cd9d5882332dfeb9522c429a91b7e5a3&" },
        { title: "401 Unauthorized", imageUrl: "" },
        { title: "402 Payment Required", imageUrl: "https://cdn.discordapp.com/attachments/1253009654389145711/1253020378503184395/maxresdefault.png?ex=667455aa&is=6673042a&hm=c278efe10b619d31bd0ada464524f4132a97bee6cb31abdef3cf34e2a64d2cdb&" },
        { title: "403 Forbidden", imageUrl: "https://media.discordapp.net/attachments/1253009654389145711/1253025423151992832/maxresdefault.png?ex=66745a5c&is=667308dc&hm=33aa7061d9f235d03f428fc57fbcf5b08c981e4b73306127de56b0f263e25bca&=&format=webp&quality=lossless&width=550&height=309" },
        { title: "404 Not Found", imageUrl: "" },
        { title: "405 Method Not Allowed", imageUrl: "https://cdn.discordapp.com/attachments/1253009654389145711/1253027652902588569/o7aqgpf1z3o51.png?ex=66745c70&is=66730af0&hm=14b40ea6cbcb3a553558ef6066fbb31905950e84b7d7b82c726b4c45c14ea703&" },
        { title: "406 Not Acceptable", imageUrl: "https://cdn.discordapp.com/attachments/1253009654389145711/1253029214785900687/griffith_crop1657306910185.png?ex=66745de4&is=66730c64&hm=2a9ed87b2f00a64d73d28707d5a7f5bef317f8a6ef8c8aa8f30df806413d5b72&" },
        { title: "407 Proxy Authentication Required", imageUrl: "" },
        { title: "408 Request Timeout", imageUrl: "https://media.discordapp.net/attachments/1253009654389145711/1253020079784722442/maxresdefault.png?ex=66745563&is=667303e3&hm=83ad093806f97eb1be57b1d36abfb8c360c2e2f13fdafba52eb2ee547d93235b&=&format=webp&quality=lossless&width=550&height=309" },
        { title: "409 Conflict", imageUrl: "" },
        { title: "410 Gone", imageUrl: "" },
        { title: "411 Length Required", imageUrl: "" },
        { title: "412 Precondition Failed", imageUrl: "" },
        { title: "413 Payload Too Large", imageUrl: "" },
        { title: "414 URI Too Long", imageUrl: "" },
        { title: "415 Unsupported Media Type", imageUrl: "" },
        { title: "416 Range Not Satisfiable", imageUrl: "" },
        { title: "417 Expectation Failed", imageUrl: "https://media.discordapp.net/attachments/1253009654389145711/1253019700292489287/image.png?ex=66745508&is=66730388&hm=4edd93dde53957369d42f28571025d9f337a96028166faa86577d72023468f13&=&format=webp&quality=lossless&width=465&height=350" },
        { title: "418 I'm a teapot", imageUrl: "" },
        { title: "421 Misdirected Request", imageUrl: "" },
        { title: "422 Unprocessable Entity", imageUrl: "" },
        { title: "423 Locked", imageUrl: "" },
        { title: "424 Failed Dependency", imageUrl: "" },
        { title: "425 Too Early", imageUrl: "https://cdn.discordapp.com/attachments/1253009654389145711/1253017828035006625/F7N6ML-XUAElIot.png?ex=6674534a&is=667301ca&hm=b91b0f910cc318fb5051fbe2252b11fb9f75e4e13956b5cee325d610882fe749&" },
        { title: "426 Upgrade Required", imageUrl: "" },
        { title: "428 Precondition Required", imageUrl: "" },
        { title: "429 Too Many Requests", imageUrl: "https://cdn.discordapp.com/attachments/1253009654389145711/1253017471334481971/Naruto-Shadow-Clone-Jutsu-Rasengan-Naruto-Anime.png?ex=667452f5&is=66730175&hm=037f5b2a5584a63f9bab33a3acfef42003d3b4682748ea08b68a513098fbd9cc&" },
        { title: "431 Request Header Fields Too Large", imageUrl: "" },
        { title: "451 Unavailable For Legal Reasons", imageUrl: "https://cdn.discordapp.com/attachments/1253009654389145711/1253030067232051302/made-in-abyss-reg-riko-nanachi-main-characters.png?ex=66745eb0&is=66730d30&hm=763bb8f4510d754e1d5ee34954633c186881c8b0b40bbff6303af3ed0dfe0920&" },
        { title: "500 Internal Server Error", imageUrl: "" },
        { title: "501 Not Implemented", imageUrl: "" },
        { title: "502 Bad Gateway", imageUrl: "https://cdn.discordapp.com/attachments/1253009654389145711/1253021664632111194/5LYzTBVoS196gvYvw3zjwNyXGVFvbEAeJSYsLUzS8_5QABL6KELsByxMY9u2IGje.png?ex=667456dc&is=6673055c&hm=15ff2d8ab0a94fbab8c2f139aa10f08856758701b3b5db092e790e409c3c2e93&" },
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