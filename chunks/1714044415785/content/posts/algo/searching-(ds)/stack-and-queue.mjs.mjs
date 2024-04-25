import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h2 id="栈与队列">栈与队列<a class="anchor" href="#栈与队列"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ol>\n<li><a href="./problems/%E6%A0%88%E4%B8%8E%E9%98%9F%E5%88%97%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80">栈与队列：理论基础</a></li>\n<li><a href="./problems/0232.%E7%94%A8%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97">栈与队列：232.用栈实现队列</a></li>\n<li><a href="./problems/0225.%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E6%A0%88">栈与队列：225.用队列实现栈</a></li>\n<li><a href="./problems/0020.%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7">栈与队列：20.有效的括号</a></li>\n<li><a href="./problems/1047.%E5%88%A0%E9%99%A4%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E6%89%80%E6%9C%89%E7%9B%B8%E9%82%BB%E9%87%8D%E5%A4%8D%E9%A1%B9">栈与队列：1047.删除字符串中的所有相邻重复项</a></li>\n<li><a href="./problems/0150.%E9%80%86%E6%B3%A2%E5%85%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%B1%82%E5%80%BC">栈与队列：150.逆波兰表达式求值</a></li>\n<li><a href="./problems/0239.%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E6%9C%80%E5%A4%A7%E5%80%BC">栈与队列：239.滑动窗口最大值</a></li>\n<li><a href="./problems/0347.%E5%89%8DK%E4%B8%AA%E9%AB%98%E9%A2%91%E5%85%83%E7%B4%A0">栈与队列：347.前 K 个高频元素</a></li>\n<li><a href="./problems/%E6%A0%88%E4%B8%8E%E9%98%9F%E5%88%97%E6%80%BB%E7%BB%93">栈与队列：总结篇！</a></li>\n</ol>',frontmatter={title:"stack-and-queue",topic:null,type:null,Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,draft:!0,DateStarted:"2023-09-07T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",category:"Programming",tags:["Algo"],minutes:1,words:107},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/algo/searching-(ds)/stack-and-queue.md",url=void 0;function rawContent(){return"\n## 栈与队列\n\n1. [栈与队列：理论基础](./problems/栈与队列理论基础)\n2. [栈与队列：232.用栈实现队列](./problems/0232.用栈实现队列)\n3. [栈与队列：225.用队列实现栈](./problems/0225.用队列实现栈)\n4. [栈与队列：20.有效的括号](./problems/0020.有效的括号)\n5. [栈与队列：1047.删除字符串中的所有相邻重复项](./problems/1047.删除字符串中的所有相邻重复项)\n6. [栈与队列：150.逆波兰表达式求值](./problems/0150.逆波兰表达式求值)\n7. [栈与队列：239.滑动窗口最大值](./problems/0239.滑动窗口最大值)\n8. [栈与队列：347.前 K 个高频元素](./problems/0347.前K个高频元素)\n9. [栈与队列：总结篇！](./problems/栈与队列总结)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"栈与队列",text:"栈与队列#"}]}const Content=createComponent(((e,n,l)=>{const{layout:r,...t}=frontmatter;return t.file=file,t.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};