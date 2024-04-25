import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="react-security">React Security<a class="anchor" href="#react-security"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<p><code>dangerouslySetInnerHTML</code>预防 xss 攻击</p>\n<h2 id="questions">Questions<a class="anchor" href="#questions"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p><a href="https://github.com/haizlin/fe-interview/issues/862">在 React 中你有遇到过安全问题吗？怎么解决？</a></p>',frontmatter={title:"React Security",topic:["React"],type:"D",tags:["React"],DateStarted:"2024-03-06T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,aliases:["React Security","React Security Issue"],"linter-yaml-title-alias":"React Security",category:"Front-End Frameworks",draft:!0,minutes:1,words:25},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/react-security/react-security.md",url=void 0;function rawContent(){return"\n# React Security\n\n`dangerouslySetInnerHTML`预防 xss 攻击\n\n## Questions\n\n[在 React 中你有遇到过安全问题吗？怎么解决？](https://github.com/haizlin/fe-interview/issues/862)\n\n\n\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"react-security",text:"React Security#"},{depth:2,slug:"questions",text:"Questions#"}]}const Content=createComponent(((e,t,n)=>{const{layout:r,...a}=frontmatter;return a.file=file,a.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};