import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../chunks/1713773016041/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="css/layout/grids.md",collection="posts",slug="css/layout/grids",body='\n### Grids\n\n- Create a grid\n  - `display:grid`\n    - gives you a one column grid, so your items will continue to display one below the other as they do in normal flow.\n  - ⭐`grid-template-columns`\n    - `200px 200px 200px;`\n      - add three 200-pixel columns\n    - Flexible grids with the `fr` unit\n      - `fr` unit represents one fraction of the available space in the grid container to flexibly size grid rows and columns.\n    - Repeating track listings\n      - repeat all or merely a section of your track listing\n      - `grid-template-columns: repeat(3, 1fr);`\n    - As many columns as will fit\n      - `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`\n        - grid is creating as many 200-pixel columns as will fit into the container, then sharing whatever space is leftover among all the columns\n  - ⭐Gaps between tracks\n    - `gap` / `grid-gap`\n      - a shorthand for both\n      - `column-gap`\n      - `row-gap`\n    - 📌 can be any length unit or percentage, but not an `fr` unit\n- Implicit and explicit grids\n  - Explicit grid\n    - created using `grid-template-columns` or `grid-template-rows`.\n  - Implicit grid\n    - when content is placed outside of that grid, such as into the rows by drawing additional grid lines.\n    - By default, tracks created in the implicit grid are auto sized\n      - they\'re large enough to contain their content\n    - To give implicit grid tracks a size\n      - `grid-auto-rows`\n      - `grid-auto-columns`\n  - The `minmax()` function\n    - `grid-auto-rows: minmax(100px, auto);`\n      - The minimum size is 100 pixels, but the maximum iwill expand to accommodate more content.\n- Arrange items on the grid\n  - ⭐Line-based placement\n    - 📌specify the start and end lines of the grid area where an item should be placed\n    - `grid-column`\n      - `grid-column-start`, `grid-column-end`\n      - `grid-column: 1 / 3;`\n        - specify that an item should start on line 1 and end on line 3\n    - `grid-row`\n      - `grid-row-start`, `grid-row-end`\n  - ⭐Positioning with `grid-template-areas`\n    - Rules\n      - You need to have every cell of the grid filled.\n      - To span across two cells, repeat the name.\n      - To leave a cell empty, use a . (period).\n      - Areas must be rectangular — for example, you can\'t have an L-shaped area.\n      - Areas can\'t be repeated in different locations.\n\n```css\n.container {\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t"header header"\n\t\t"sidebar content"\n\t\t"footer footer";\n\tgrid-template-columns: 1fr 3fr;\n\tgap: 20px;\n}\n\nheader {\n\tgrid-area: header;\n}\narticle {\n\tgrid-area: content;\n}\n```\n\n- Nesting grids and subgrid\n  - ` grid-template-columns: subgrid;`\n    - to inherit the parent grid\'s column tracks\n- Grid frameworks\n  - offering a 12 or 16-column grid, to help with laying out your content\n- Guide and Resources\n  - [CSS Grid Guides](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout#guides)\n  - [Subgrid Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid)\n  - [Firefox Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)\n  - [Complete Guide to CSS Grid-A Visual Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)\n  - [Grid Garden](https://cssgridgarden.com/)\n',data={title:"grids",DateStarted:new Date(16956e8),draft:!1,tags:["CSS"],category:"Web Design"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/layout/grids.md",rawData:void 0},html='<h3 id="grids">Grids<a class="anchor" href="#grids"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Create a grid\n<ul>\n<li><code>display:grid</code>\n<ul>\n<li>gives you a one column grid, so your items will continue to display one below the other as they do in normal flow.</li>\n</ul>\n</li>\n<li>⭐<code>grid-template-columns</code>\n<ul>\n<li><code>200px 200px 200px;</code>\n<ul>\n<li>add three 200-pixel columns</li>\n</ul>\n</li>\n<li>Flexible grids with the <code>fr</code> unit\n<ul>\n<li><code>fr</code> unit represents one fraction of the available space in the grid container to flexibly size grid rows and columns.</li>\n</ul>\n</li>\n<li>Repeating track listings\n<ul>\n<li>repeat all or merely a section of your track listing</li>\n<li><code>grid-template-columns: repeat(3, 1fr);</code></li>\n</ul>\n</li>\n<li>As many columns as will fit\n<ul>\n<li><code>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</code>\n<ul>\n<li>grid is creating as many 200-pixel columns as will fit into the container, then sharing whatever space is leftover among all the columns</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>⭐Gaps between tracks\n<ul>\n<li><code>gap</code> / <code>grid-gap</code>\n<ul>\n<li>a shorthand for both</li>\n<li><code>column-gap</code></li>\n<li><code>row-gap</code></li>\n</ul>\n</li>\n<li>📌 can be any length unit or percentage, but not an <code>fr</code> unit</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Implicit and explicit grids\n<ul>\n<li>Explicit grid\n<ul>\n<li>created using <code>grid-template-columns</code> or <code>grid-template-rows</code>.</li>\n</ul>\n</li>\n<li>Implicit grid\n<ul>\n<li>when content is placed outside of that grid, such as into the rows by drawing additional grid lines.</li>\n<li>By default, tracks created in the implicit grid are auto sized\n<ul>\n<li>they’re large enough to contain their content</li>\n</ul>\n</li>\n<li>To give implicit grid tracks a size\n<ul>\n<li><code>grid-auto-rows</code></li>\n<li><code>grid-auto-columns</code></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>The <code>minmax()</code> function\n<ul>\n<li><code>grid-auto-rows: minmax(100px, auto);</code>\n<ul>\n<li>The minimum size is 100 pixels, but the maximum iwill expand to accommodate more content.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Arrange items on the grid\n<ul>\n<li>⭐Line-based placement\n<ul>\n<li>📌specify the start and end lines of the grid area where an item should be placed</li>\n<li><code>grid-column</code>\n<ul>\n<li><code>grid-column-start</code>, <code>grid-column-end</code></li>\n<li><code>grid-column: 1 / 3;</code>\n<ul>\n<li>specify that an item should start on line 1 and end on line 3</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><code>grid-row</code>\n<ul>\n<li><code>grid-row-start</code>, <code>grid-row-end</code></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>⭐Positioning with <code>grid-template-areas</code>\n<ul>\n<li>Rules\n<ul>\n<li>You need to have every cell of the grid filled.</li>\n<li>To span across two cells, repeat the name.</li>\n<li>To leave a cell empty, use a . (period).</li>\n<li>Areas must be rectangular — for example, you can’t have an L-shaped area.</li>\n<li>Areas can’t be repeated in different locations.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#B392F0">.container</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#79B8FF">\tdisplay</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">grid</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#79B8FF">\tgrid-template-areas</span><span style="color:#E1E4E8">:</span></span>\n<span class="line"><span style="color:#9ECBFF">\t\t"header header"</span></span>\n<span class="line"><span style="color:#9ECBFF">\t\t"sidebar content"</span></span>\n<span class="line"><span style="color:#9ECBFF">\t\t"footer footer"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#79B8FF">\tgrid-template-columns</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">1</span><span style="color:#F97583">fr</span><span style="color:#79B8FF"> 3</span><span style="color:#F97583">fr</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#79B8FF">\tgap</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">20</span><span style="color:#F97583">px</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#85E89D">header</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#79B8FF">\tgrid-area</span><span style="color:#E1E4E8">: header;</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"><span style="color:#85E89D">article</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#79B8FF">\tgrid-area</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">content</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"></span></code></pre>\n<ul>\n<li>Nesting grids and subgrid\n<ul>\n<li><code> grid-template-columns: subgrid;</code>\n<ul>\n<li>to inherit the parent grid’s column tracks</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Grid frameworks\n<ul>\n<li>offering a 12 or 16-column grid, to help with laying out your content</li>\n</ul>\n</li>\n<li>Guide and Resources\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout#guides">CSS Grid Guides</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid">Subgrid Guide</a></li>\n<li><a href="https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html">Firefox Grid Inspector</a></li>\n<li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/">Complete Guide to CSS Grid-A Visual Guide</a></li>\n<li><a href="https://cssgridgarden.com/">Grid Garden</a></li>\n</ul>\n</li>\n</ul>',frontmatter={category:"Web Design",draft:!1,title:"grids",type:"D",tags:["CSS"],status:null,DateStarted:"2023-09-25T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",comment:"⭐⭐⭐",difficulty:"Hard",topic:"Layout",reviewed:1,Datereviewed:"2024-01-04T16:00:00.000Z",minutes:2,words:328},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/layout/grids.md",url=void 0;function rawContent(){return'\n### Grids\n\n- Create a grid\n  - `display:grid`\n    - gives you a one column grid, so your items will continue to display one below the other as they do in normal flow.\n  - ⭐`grid-template-columns`\n    - `200px 200px 200px;`\n      - add three 200-pixel columns\n    - Flexible grids with the `fr` unit\n      - `fr` unit represents one fraction of the available space in the grid container to flexibly size grid rows and columns.\n    - Repeating track listings\n      - repeat all or merely a section of your track listing\n      - `grid-template-columns: repeat(3, 1fr);`\n    - As many columns as will fit\n      - `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`\n        - grid is creating as many 200-pixel columns as will fit into the container, then sharing whatever space is leftover among all the columns\n  - ⭐Gaps between tracks\n    - `gap` / `grid-gap`\n      - a shorthand for both\n      - `column-gap`\n      - `row-gap`\n    - 📌 can be any length unit or percentage, but not an `fr` unit\n- Implicit and explicit grids\n  - Explicit grid\n    - created using `grid-template-columns` or `grid-template-rows`.\n  - Implicit grid\n    - when content is placed outside of that grid, such as into the rows by drawing additional grid lines.\n    - By default, tracks created in the implicit grid are auto sized\n      - they\'re large enough to contain their content\n    - To give implicit grid tracks a size\n      - `grid-auto-rows`\n      - `grid-auto-columns`\n  - The `minmax()` function\n    - `grid-auto-rows: minmax(100px, auto);`\n      - The minimum size is 100 pixels, but the maximum iwill expand to accommodate more content.\n- Arrange items on the grid\n  - ⭐Line-based placement\n    - 📌specify the start and end lines of the grid area where an item should be placed\n    - `grid-column`\n      - `grid-column-start`, `grid-column-end`\n      - `grid-column: 1 / 3;`\n        - specify that an item should start on line 1 and end on line 3\n    - `grid-row`\n      - `grid-row-start`, `grid-row-end`\n  - ⭐Positioning with `grid-template-areas`\n    - Rules\n      - You need to have every cell of the grid filled.\n      - To span across two cells, repeat the name.\n      - To leave a cell empty, use a . (period).\n      - Areas must be rectangular — for example, you can\'t have an L-shaped area.\n      - Areas can\'t be repeated in different locations.\n\n```css\n.container {\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t"header header"\n\t\t"sidebar content"\n\t\t"footer footer";\n\tgrid-template-columns: 1fr 3fr;\n\tgap: 20px;\n}\n\nheader {\n\tgrid-area: header;\n}\narticle {\n\tgrid-area: content;\n}\n```\n\n- Nesting grids and subgrid\n  - ` grid-template-columns: subgrid;`\n    - to inherit the parent grid\'s column tracks\n- Grid frameworks\n  - offering a 12 or 16-column grid, to help with laying out your content\n- Guide and Resources\n  - [CSS Grid Guides](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout#guides)\n  - [Subgrid Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid)\n  - [Firefox Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)\n  - [Complete Guide to CSS Grid-A Visual Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)\n  - [Grid Garden](https://cssgridgarden.com/)\n'}function compiledContent(){return html}function getHeadings(){return[{depth:3,slug:"grids",text:"Grids#"}]}const Content=createComponent(((e,n,i)=>{const{layout:t,...a}=frontmatter;return a.file=file,a.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),grids=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,data,grids,id,slug};