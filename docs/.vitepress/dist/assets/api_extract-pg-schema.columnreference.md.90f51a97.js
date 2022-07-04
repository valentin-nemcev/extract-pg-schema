import{_ as s,c as e,o as a,a as n}from"./app.fae77951.js";const A=JSON.parse('{"title":"ColumnReference type","description":"","frontmatter":{},"headers":[{"level":2,"title":"ColumnReference type","slug":"columnreference-type"}],"relativePath":"api/extract-pg-schema.columnreference.md"}'),p={name:"api/extract-pg-schema.columnreference.md"},l=n(`<p><a href="./">Home</a> &gt; <a href="./extract-pg-schema.html">extract-pg-schema</a> &gt; <a href="./extract-pg-schema.columnreference.html">ColumnReference</a></p><h2 id="columnreference-type" tabindex="-1">ColumnReference type <a class="header-anchor" href="#columnreference-type" aria-hidden="true">#</a></h2><p><b>Signature:</b></p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ColumnReference</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">schemaName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">tableName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">columnName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">onDelete</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UpdateAction</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">onUpdate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UpdateAction</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p><b>References:</b> <a href="./extract-pg-schema.updateaction.html">UpdateAction</a></p>`,5),o=[l];function t(c,r,y,D,C,F){return a(),e("div",null,o)}var m=s(p,[["render",t]]);export{A as __pageData,m as default};
