"use strict";

module.exports = {
    rendererDefaultOptions: {
        highlight: true,
        style: true,
        minify: false,
        koala: false
    },
    regex: {
        html: /^\s*<\!DOCTYPE html>\s*<html>[\s\S]*<\/html>\s*$/,
        htmlBody: /<body>[\s\S]*<\/body>/,
        htmlTestFile: {
            title: /<h1>Markdown Test<\/h1>/,
            text: /This <strong>file<\/strong> is for <em>testing<\/em> purposes of/,
            link: /<a\s+href=\"https:\/\/github.com\/angrykoala\/yamp\">yamp<\/a>/,
            header2: /<h2>C\+\+ test code<\/h2>/,
            code: /<pre>\s*<code\s+class=\"language-c\+\+\">[\s\S]*Test[\s\S]*<\/code>\s*<\/pre>/,
            included: /<body>[\s\S]*<p>This should be included<\/p>[\s\S]*<\/body>/
        },
        options: {
            highlightjs: /<head>[\s\S]*<script>[\s\S]*highlightjs\.org[\s\S]*return hljs;[\s\S]*<\/script>[\s\S]*<\/head>/,
            highlightcss: /<head>[\s\S]*<style>[\s\S]*highlight\.js[\s\S]*\.hljs[\s\S]*<\/style>[\s\S]*<\/head>/
        },
        xejsTestFile: {
            common: [
                /^# This is a text for xejs/,
                /This plain text <p> should not <\/p> be parsed/,
                /Tags test\s+(\d\d?\/\d\d?\/\d{4}\s+){3}\s/,
                /false tags\s+{{ not tag }}\s+{{ not DATE }}\s+{{DATE not}}\s+{{\s+Date\s+}}/,
                /<% should not parse EJS%>/,
                /Include test\s+Second File[\s\S]*End of second file\s+End of first file/,
                /Second File\s+((\d+\.){2}\d+\s+){2}\s+<p style="page-break-after:always;"><\/p>/
            ],
            defaultTags: [
                /extra tags\s+{{ extra tag\(12\)}}\s+{{ extra tag\(a\)}}\s+End of second file/
            ],
            customTags: [
                /extra tags\s+tag is 12\s+{{ extra tag\(a\)}}\s+End of second file/
                
            ]
        }

    },
    testMdFiles: ["test.md", "test2.md"],
    testXejsFiles: ["xejs_test.md", "xejs_test2.md"],
    testDir: "test/test_sandbox"
};
