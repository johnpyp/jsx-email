import{_ as o,o as e,c as p,k as s,a as l,t as n,Q as t}from"./chunks/framework.a7175731.js";const b=JSON.parse('{"title":"Column","description":"A JSX email component which displays columns that separate content bounaries vertically","frontmatter":{"title":"Column","description":"A JSX email component which displays columns that separate content bounaries vertically","slug":"column","type":"component","head":[["meta",{"name":"og:description","content":"A JSX email component which displays columns that separate content bounaries vertically"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"Column"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"A JSX email component which displays columns that separate content bounaries vertically"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"Column"}]]},"headers":[],"relativePath":"../../../docs/components/column.md","filePath":"../../../docs/components/column.md"}'),c={name:"../../../docs/components/column.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=s("h2",{id:"install",tabindex:"-1"},[l("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),y=t(`<div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-A-VoC" id="tab-xE_LxoU" checked="checked"><label for="tab-xE_LxoU">pnpm</label><input type="radio" name="group-A-VoC" id="tab-2zVNgK0"><label for="tab-2zVNgK0">bun</label><input type="radio" name="group-A-VoC" id="tab-R_Vtv-k"><label for="tab-R_Vtv-k">npm</label><input type="radio" name="group-A-VoC" id="tab-yWzZduQ"><label for="tab-yWzZduQ">yarn</label></div><div class="blocks"><div class="language-console vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">pnpm add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">pnpm add jsx-email</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">bun add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">bun add jsx-email</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">npm add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">npm add jsx-email</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">yarn add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">yarn add jsx-email</span></span></code></pre></div></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Column</span><span style="color:#E6E6E6;">, </span><span style="color:#9CDCFE;">Row</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;jsx-email&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">A</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">B</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">C</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Column</span><span style="color:#002339;">, </span><span style="color:#2F86D2;">Row</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;jsx-email&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;A&lt;/</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;B&lt;/</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;C&lt;/</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><p>This component has no custom props, but expresses all of the <a href="https://react.dev/reference/react-dom/components/common" target="_blank" rel="noreferrer">Common Component Props</a> for <code>ComponentProps&lt;&#39;td&#39;&gt;</code>.</p>`,6);function m(a,E,u,h,C,g){return e(),p("div",null,[s("h2",r,[l(n(a.$frontmatter.title)+" ",1),i]),s("p",null,n(a.$frontmatter.description),1),d,s("p",null,"Install the "+n(a.$frontmatter.type)+" from your command line",1),y])}const k=o(c,[["render",m]]);export{b as __pageData,k as default};
