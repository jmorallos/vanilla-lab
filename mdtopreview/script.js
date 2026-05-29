const preview = document.getElementById('preview');
const mdInput = document.getElementById('markdown-input');
const rawOutput = document.getElementById('html-output');

const RULES = [
    {
        name: "h6",
        regex: /^[ /t]*######[ /t](.+)$/gm,
        replace: "<h6>$1</h6>"
    },
    {
        name: "h6",
        regex: /^[ /t]*#####[ /t](.+)$/gm,
        replace: "<h5>$1</h5>"
    },
    {
        name: "h6",
        regex: /^[ /t]*####[ /t](.+)$/gm,
        replace: "<h4>$1</h4>"
    },
    {
        name: "h6",
        regex: /^[ /t]*###[ /t](.+)$/gm,
        replace: "<h3>$1</h3>"
    },
    {
        name: "h6",
        regex: /^[ /t]*##[ /t](.+)$/gm,
        replace: "<h2>$1</h2>"
    },
    {
        name: "h6",
        regex: /^[ /t]*#[ /t](.+)$/gm,
        replace: "<h1>$1</h1>"
    },

    {
        name: "hr",
        regex: /^(?:^|\n)---(?:$|\n)/g,
        replace: "<hr>"
    },

    {
        name: "strong",
        regex: /(\*\*|__)(.*?)\1/g,
        replace: "<strong>$2</strong>"
    },
    {
        name: "italic",
        regex: /(\*|_)(.*?)\1/g,
        replace: "<em>$2</em>"
    },

    {
        name: "img",
        regex: /!\[\s*(.*?)\s*\]\(\s*(.*?)\s*\)/g,
        replace: '<img alt="$1" src="$2">'
    },
    {
        name: "a",
        regex: /\[(.*?)\]\(\s*(.*?)\s*\)/g,
        replace: '<a href="$2">$1</a>'
    },

    {
        name: "blockquote",
        regex: /^[ \t]*> (.+)$/gm,
        replace: "<blockquote>$1</blockquote>"
    },

    {
        name: "ul",
        regex: /(?:^[-*+]\s+.*$\n?)+/gm,
        replace: (match) => `<ul>\n${match.replace(/^[-*+]\s+/gm, "<li>").replace(/\n/g, "</li>\n")} </ul>`
    },
    {
        name: "ol",
        regex: /(?:^\d+\.\s+.*$\n?)+/gm,
        replace: (match) =>
            `<ol>\n${match.replace(/^\d+\.\s+/gm, "<li>").replace(/\n/g, "</li>\n")} </ol>`
    },

    {
        name: "paragraph",
        regex: /^(?!<h\d|<ul|<ol|<blockquote|<hr|<img|<p>)(.+)$/gm,
        replace: "<p>$1</p>"
    }
]

function convertMarkdown() {
    const markdown = mdInput.value || "";
    if (typeof markdown !== "string") return "";

    let html = markdown;

    for (const rule of RULES) {
        html = html.replace(rule.regex, rule.replace);
    }

    rawOutput.textContent = html;
    preview.innerHTML = html;

    return html;

}


mdInput.addEventListener("input", () => convertMarkdown());
