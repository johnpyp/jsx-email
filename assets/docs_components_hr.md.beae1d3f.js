import{_ as o,o as t,c as l,k as a,a as n,t as e,Q as p}from"./chunks/framework.a7175731.js";const b=JSON.parse('{"title":"Hr","description":"Creates divider (horizontal rule) that separates content","frontmatter":{"title":"Hr","description":"Creates divider (horizontal rule) that separates content","slug":"hr","type":"component","head":[["meta",{"name":"og:description","content":"Creates divider (horizontal rule) that separates content"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"Hr"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"Creates divider (horizontal rule) that separates content"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"Hr"}]]},"headers":[],"relativePath":"../../../docs/components/hr.md","filePath":"../../../docs/components/hr.md"}'),c={name:"../../../docs/components/hr.md"},r={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=a("h2",{id:"install",tabindex:"-1"},[n("Install "),a("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),m=p(`<div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-79cCk" id="tab-SPQxQnn" checked="checked"><label for="tab-SPQxQnn">pnpm</label><input type="radio" name="group-79cCk" id="tab-q4WxY47"><label for="tab-q4WxY47">bun</label><input type="radio" name="group-79cCk" id="tab-AvNj7cy"><label for="tab-AvNj7cy">npm</label><input type="radio" name="group-79cCk" id="tab-lfN0bVJ"><label for="tab-lfN0bVJ">yarn</label></div><div class="blocks"><div class="language-console vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">pnpm add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">pnpm add jsx-email</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">bun add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">bun add jsx-email</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">npm add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">npm add jsx-email</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">yarn add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">yarn add jsx-email</span></span></code></pre></div></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Hr</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;jsx-email&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Hr</span><span style="color:#E6E6E6;"> </span><span style="color:#808080;">/&gt;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Hr</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;jsx-email&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> &lt;</span><span style="color:#DC3EB7;">Hr</span><span style="color:#002339;"> /&gt;;</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><p>This component has no custom props, but expresses all of the <a href="https://react.dev/reference/react-dom/components/common" target="_blank" rel="noreferrer">Common Component Props</a> for <code>ComponentProps&lt;&#39;hr&#39;&gt;</code>.</p>`,6);function y(s,h,E,u,g,v){return t(),l("div",null,[a("h2",r,[n(e(s.$frontmatter.title)+" ",1),i]),a("p",null,e(s.$frontmatter.description),1),d,a("p",null,"Install the "+e(s.$frontmatter.type)+" from your command line",1),m])}const C=o(c,[["render",y]]);export{b as __pageData,C as default};
