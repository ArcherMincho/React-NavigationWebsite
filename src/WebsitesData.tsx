// websites object: parsed from JSON
let websites = {
    "Frontend": [
        {
            "name": "Web Development Docs",
            "description": "Official mdn web docs",
            "url": "https://developer.mozilla.org/zh-CN/docs/Web",
            "subtype": "General"
        },
        {
            "name": "Httpbin.org",
            "description": "A simple HTTP request & response service",
            "url": "http://httpbin.org/",
            "subtype": "General"
        },
        {
            "name": "Can I Use..?",
            "description": "Check the availability of Html, CSS, ..",
            "url": "https://caniuse.com/",
            "subtype": "General"
        },
        {
            "name": "Carbon",
            "description": "Create beautiful images of source code",
            "url": "https://carbon.now.sh/",
            "subtype": "General"
        },
        {
            "name": "chrome Developers Tool",
            "description": "Official docs",
            "url": "https://developer.chrome.com/docs/devtools/overview/",
            "subtype": "General"
        },
        {
            "name": "Glassmorphism Generator",
            "description": "online CSS generator for 'frosted glass' effect",
            "url": "https://hype4.academy/tools/glassmorphism-generator",
            "subtype": "CSS Generator"
        },
        {
            "name": "Neumorphism",
            "description": "online soft UI CSS shadow generator",
            "url": "https://neumorphism.io/#e0e0e0",
            "subtype": "CSS Generator"
        },
        {
            "name": "Animate.CSS",
            "description": "An open-source library for CSS animations",
            "url": "https://animate.style/",
            "subtype": "CSS Generator"
        },
        {
            "name": "Uiverse",
            "description": "a CSS Generator library of buttons, switches, checkboxes, cards etc.",
            "url": "https://uiverse.io/",
            "subtype": "CSS Generator"
        },
        {
            "name": "CodePen",
            "description": "Online code editor, contains a lot good design",
            "url": "https://codepen.io",
            "subtype": "CSS Generator"
        },
        {
            "name": "React Tutorial",
            "description": "Official React.js tutorial",
            "url": "https://reactjs.org/docs/hello-world.html",
            "subtype": "React"
        },
        {
            "name": "Small Book of React.js",
            "description": "React tutorial by Uncle Huzi",
            "url": "https://hyf.js.org/react-naive-book/lesson1",
            "subtype": "React"
        },
        {
            "name": "Guide of Building A React Blog",
            "description": "An article that teaches how to build a react universal blog app step by step",
            "url": "https://www.sitepoint.com/building-a-react-universal-blog-app-a-step-by-step-guide/",
            "subtype": "React"
        },
        {
            "name": "Controlled V.S. Uncontrolled",
            "description": "An article that analyzes controlled and uncontrolled form inputs in React",
            "url": "https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/",
            "subtype": "React"
        },
        {
            "name": "HTML 5 Outliner",
            "description": "Outline html from input html files, URL, and live code",
            "url": "https://gsnedders.html5.org/outliner",
            "subtype": "Html"
        },
        {
            "name": "Selectors Level 3",
            "description": "Official CSS document",
            "url": "https://www.w3.org/TR/selectors-3",
            "subtype": "CSS"
        },
        {
            "name": "JSHint",
            "description": "A static code analysis tool for JavaScript",
            "url": "https://jshint.com",
            "subtype": "JavaScript"
        },
        {
            "name": "ES6 Tutorial",
            "description": "A good and easy-to-understand ES6 Tutorial",
            "url": "https://www.javascripttutorial.net/es6",
            "subtype": "JavaScript"
        },
        {
            "name": "ECMAScript 6 Getting Started Tutorial",
            "description": "ES6 tutorial by Yifeng Ruan",
            "url": "https://es6.ruanyifeng.com/#README",
            "subtype": "JavaScript"
        },
        {
            "name": "Javascript 'this' word",
            "description": "An article that explains how 'this' keyword work in JS",
            "url": "https://www.vojtechruzicka.com/javascript-this-keyword/",
            "subtype": "JavaScript"
        },
        {
            "name": "Icomoon.io",
            "description": "Free vector icon font & SVGs",
            "url": "https://icomoon.io/app/#/select",
            "subtype": "Font"
        },
        {
            "name": "Facetype.js",
            "description": "Convert a font to a typeface.js font",
            "url": "https://gero3.github.io/facetype.js",
            "subtype": "Font"
        },
        {
            "name": "Fonts.ninja",
            "description": "Detect what type of font a website is using",
            "url": "https://www.fonts.ninja/",
            "subtype": "Font"
        },
        {
            "name": "useAnimations",
            "description": "Button animations",
            "url": "https://useanimations.com/index.html#explore",
            "subtype": "Font"
        },
        {
            "name": "GitHub",
            "description": "An open source community, with repository management enabled with Git",
            "url": "https://github.com/",
            "subtype": "Forum"
        },
        {
            "name": "Stack Overflow",
            "description": "A public platform building the definitive collection of coding questions and answers",
            "url": "https://stackoverflow.com/",
            "subtype": "Forum"
        },
        {
            "name": "LeetCode",
            "description": "The world's leading online programming learning and practice platform",
            "url": "https://leetcode.com/explore/learn/",
            "subtype": "Forum"
        },
    ],
    "Design": [
        {
            "name": "Canva",
            "description": "Provide templates for writings, covers, pictures, etc.",
            "url": "https://www.canva.com",
            "subtype": "Inspiration"
        },
        {
            "name": "Dribbble",
            "description": "A lot of high-quality design portfolios",
            "url": "https://dribbble.com",
            "subtype": "Inspiration"
        },
        {
            "name": "Web Designer Depot",
            "description": "Web Design Blog",
            "url": "https://www.webdesignerdepot.com/",
            "subtype": "Inspiration"
        },
        {
            "name": "NN Group",
            "description": "Professional knowledge of UX design",
            "url": "https://www.nngroup.com",
            "subtype": "Methodology"
        },
        {
            "name": "How to 6-3-5 Brainwriting",
            "description": "What, Why, How",
            "url": "https://www.podojo.com/blog/how-to-6-3-5-brainwriting/",
            "subtype": "Methodology"
        },
        {
            "name": "5 stages in Design Thinking",
            "description": "Empathize, Define, Ideate, Prototype, Test",
            "url": "https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process",
            "subtype": "Methodology"
        },
        {
            "name": "Pilot Testing",
            "description": "Getting it right, wrote by NN Group",
            "url": "https://www.nngroup.com/articles/pilot-testing/",
            "subtype": "Methodology"
        },
        {
            "name": "Between-Subjects & Within-Subjects",
            "description": "Wrote by NN Group",
            "url": "https://www.nngroup.com/articles/between-within-subjects/",
            "subtype": "Methodology"
        },
        {
            "name": "Storyboard Creator",
            "description": "Comic storyboard strip maker",
            "url": "https://www.storyboardthat.com/storyboard-creator",
            "subtype": "UX Tool"
        },
        {
            "name": "Figma",
            "description": "Prototype tool",
            "url": "https://www.figma.com",
            "subtype": "UX Tool"
        },
        {
            "name": "Miro",
            "description": "Online whiteboard for visual collaboration",
            "url": "https://miro.com/app/dashboard/",
            "subtype": "UX Tool"
        },
        {
            "name": "Name Snack",
            "description": "Business name generator",
            "url": "https://www.namesnack.com/",
            "subtype": "UX Tool"
        },
        {
            "name": "oTranscribe",
            "description": "Online verbatim transcribe tool",
            "url": "https://otranscribe.com/",
            "subtype": "UX Tool"
        },
        {
            "name": "MockuPhone",
            "description": "free phone mockup with white background",
            "url": "https://mockuphone.com",
            "subtype": "Mockup"
        },
        {
            "name": "c.mockup",
            "description": "mockup model of scene",
            "url": "https://mockup.ceacle.com",
            "subtype": "Mockup"
        },
        {
            "name": "ColorBox",
            "description": "Auto generate color gradients",
            "url": "https://colorbox.io/",
            "subtype": "Color"
        },
        {
            "name": "Color Leap",
            "description": "Vintage color scheme",
            "url": "https://colorleap.app/home",
            "subtype": "Color"
        },
        {
            "name": "Mesh Gradients",
            "description": "Irregular gradients",
            "url": "https://products.ls.graphics/mesh-gradients/",
            "subtype": "Color"
        },
        {
            "name": "KaKa",
            "description": "Four-color palette, gradients, color steps",
            "url": "https://afterwork-design.github.io/color-card/",
            "subtype": "Color"
        },
        {
            "name": "CoolHue",
            "description": "Beautiful gradients",
            "url": "https://webkul.github.io/coolhue/",
            "subtype": "Color"
        },
        {
            "name": "ColorSpace",
            "description": "Auto generate color themes for different scenarios",
            "url": "https://mycolor.space/",
            "subtype": "Color"
        },
        {
            "name": "Picular",
            "description": "Search keywords for accordant color theme",
            "url": "https://picular.co/",
            "subtype": "Color"
        },
        {
            "name": "unDraw",
            "description": "Illustration vectors, color changing is available",
            "url": "https://undraw.co/illustrations",
            "subtype": "Vector"
        },
        {
            "name": "Blush",
            "description": "Colorful illustrations，provides plugins for Figma and Sketch",
            "url": "https://blush.design/zh-CN",
            "subtype": "Vector"
        },
        {
            "name": "Emoji XD",
            "description": "Emoji library",
            "url": "https://emojixd.com",
            "subtype": "Vector"
        },
        {
            "name": "seeklogo",
            "description": "logo images for 500000+ brands",
            "url": "https://seeklogo.com",
            "subtype": "Vector"
        },
        {
            "name": "Looka",
            "description": "Design your own beautiful brand logo by inputting company name and category",
            "url": "https://looka.com/?gclid=Cj0KCQjwguGYBhDRARIsAHgRm4_4qNXjR69h4jAkylpLt1gmGi_Fl_CDaR6BpKOhXI_cABJ0kQRyHEEaAvQ_EALw_wcB",
            "subtype": "Vector"
        },
        {
            "name": "ICONS8",
            "description": "diverse styles of icons",
            "url": "https://icons8.com",
            "subtype": "Vector"
        }
    ],
    "Image": [
        {
            "name": "Unsplash",
            "description": "free pictures",
            "url": "https://unsplash.com",
            "subtype": "Picture"
        },
        {
            "name": "Itsacat",
            "description": "Portuguese illustrator, graphics, colors, and animations",
            "url": "https://itsacatstudio.com",
            "subtype": "Picture"
        },
        {
            "name": "Chloe Takahashi",
            "description": "Japanese illustrator",
            "url": "https://chloetakahashi.net",
            "subtype": "Picture"
        },
        {
            "name": "Illustrationx",
            "description": "Illustration platform",
            "url": "https://www.illustrationx.com",
            "subtype": "Picture"
        },
        {
            "name": "Folio",
            "description": "Illustration platform",
            "url": "https://folioart.co.uk",
            "subtype": "Picture"
        },
        {
            "name": "404 Illustrations",
            "description": "Fun 404 illustrations",
            "url": "https://www.kapwing.com/404-illustrations",
            "subtype": "Picture"
        },
        {
            "name": "Screely",
            "description": "Generate browser frames for screenshots",
            "url": "https://www.screely.com/",
            "subtype": "Editing"
        },
        {
            "name": "Screen Guru",
            "description": "Online screenshot beautification tool, input URL to generate a clean browser frame",
            "url": "https://screen.guru",
            "subtype": "Editing"
        },
        {
            "name": "Magic Eraser",
            "description": "Quickly remove objects from pictures",
            "url": "https://www.magiceraser.io/",
            "subtype": "Editing"
        },
        {
            "name": "TinyPNG",
            "description": "Image compression",
            "url": "https://tinypng.com",
            "subtype": "Editing"
        }
    ],
    "English": [
        {
            "name": "Vocabulary",
            "description": "To learn english vocabulary",
            "url": "https://www.vocabulary.com",
            "subtype": "English"
        },
        {
            "name": "DeepL",
            "description": "Translator",
            "url": "https://www.deepl.com/translator",
            "subtype": "English"
        },
        {
            "name": "QuillBot",
            "description": "Writing assistant",
            "url": "https://quillbot.com",
            "subtype": "English"
        },
        {
            "name": "Grammarly",
            "description": "Writing assistant",
            "url": "https://www.grammarly.com",
            "subtype": "English"
        },
        {
            "name": "ESLnotes",
            "description": "Movie guides for english learners",
            "url": "https://www.eslnotes.com",
            "subtype": "English"
        }
    ],
    "Study": [
        {
            "name": "Cite This For Me",
            "description": "Online tool to create Harvard, APA, & MLA citations",
            "url": "https://www.citethisforme.com/",
            "subtype": "Study"
        },
        {
            "name": "Reference Guide for APA 7",
            "description": "By Karolinska Institutet University",
            "url": "https://kib.ki.se/en/write-cite/writing-references-apa-vancouver/reference-guides/reference-guide-apa-7",
            "subtype": "Study"
        }
    ]
};

// get all the main types without repeated ones
let allTypes = new Set<string>(Object.keys(websites));
const types: string[] = [...allTypes];

// get a map with types as keys and each type's subtypes as values
let subtypeMap = new Map<string, string[]>();
for (const t of types) {
    let subs = websites[t].map((w) => w.subtype);
    subs = new Set(subs);
    subtypeMap.set(t, [...subs]);
}

console.log(typeof types);

// get the first subtype of each type
let firstSubtypes = {};
for (const [t, s] of subtypeMap) {
    firstSubtypes[t] = s[0];
}

export { websites, types, subtypeMap, firstSubtypes };