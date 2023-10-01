import{_ as e,o as t,c as p,k as s,a as o,t as a,Q as l}from"./chunks/framework.fd95ed2e.js";const X=JSON.parse('{"title":"Container","description":"Horizontally center child components and content","frontmatter":{"title":"Container","description":"Horizontally center child components and content","slug":"container"},"headers":[],"relativePath":"../../../docs/components/container.md","filePath":"../../../docs/components/container.md"}'),c={name:"../../../docs/components/container.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=s("h2",{id:"install",tabindex:"-1"},[o("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),y=s("p",null,"Install component from your command line.",-1),E={class:"vp-code-group vp-adaptive-theme"},_=l('<div class="tabs"><input type="radio" name="group-ufbmU" id="tab-vMTzfo9" checked="checked"><label for="tab-vMTzfo9">pnpm</label><input type="radio" name="group-ufbmU" id="tab-0_TOd7o"><label for="tab-0_TOd7o">npm</label><input type="radio" name="group-ufbmU" id="tab-OGhCvRs"><label for="tab-OGhCvRs">yarn</label></div>',1),h={class:"blocks"},m={class:"language-console vp-adaptive-theme active"},u=s("button",{title:"Copy Code",class:"copy"},null,-1),C=s("span",{class:"lang"},"console",-1),D={class:"shiki slack-dark vp-code-dark"},f={class:"line"},g={style:{color:"#E6E6E6"}},b={class:"shiki slack-ochin vp-code-light"},k={class:"line"},v={style:{color:"#002339"}},B={class:"language-console vp-adaptive-theme"},T=s("button",{title:"Copy Code",class:"copy"},null,-1),x=s("span",{class:"lang"},"console",-1),P={class:"shiki slack-dark vp-code-dark"},A={class:"line"},$={style:{color:"#E6E6E6"}},j={class:"shiki slack-ochin vp-code-light"},F={class:"line"},S={style:{color:"#002339"}},q={class:"language-console vp-adaptive-theme"},I=s("button",{title:"Copy Code",class:"copy"},null,-1),V=s("span",{class:"lang"},"console",-1),N={class:"shiki slack-dark vp-code-dark"},O={class:"line"},U={style:{color:"#E6E6E6"}},z={class:"shiki slack-ochin vp-code-light"},R={class:"line"},G={style:{color:"#002339"}},H=l(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Button</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/button&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Container</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/container&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Container</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Button</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">href</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://example.com&quot;</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">style</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#D4D4D4;">{ </span><span style="color:#9CDCFE;">color:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#61dafb&#39;</span><span style="color:#D4D4D4;"> }</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">        Click me</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Container</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Button</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/button&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Container</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/container&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Container</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">href</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;https://example.com&quot;</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">style</span><span style="color:#7B30D0;">=</span><span style="color:#002339;">{{ color: </span><span style="color:#A44185;">&#39;#61dafb&#39;</span><span style="color:#002339;"> }}&gt;</span></span>
<span class="line"><span style="color:#002339;">        Click me</span></span>
<span class="line"><span style="color:#002339;">      &lt;/</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Container</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><p>This component has no custom props, but expresses all of the <a href="https://react.dev/reference/react-dom/components/common" target="_blank" rel="noreferrer">Common Component Props</a> for <code>ComponentProps&lt;&#39;table&#39;&gt;</code>.</p>`,5);function M(n,w,J,Q,K,L){return t(),p("div",null,[s("h2",r,[o(a(n.$frontmatter.title)+" ",1),i]),s("p",null,a(n.$frontmatter.description),1),d,y,s("div",E,[_,s("div",h,[s("div",m,[u,C,s("pre",D,[s("code",null,[s("span",f,[s("span",g,"pnpm add @jsx-email/"+a(n.$frontmatter.slug),1)])])]),s("pre",b,[s("code",null,[s("span",k,[s("span",v,"pnpm add @jsx-email/"+a(n.$frontmatter.slug),1)])])])]),s("div",B,[T,x,s("pre",P,[s("code",null,[s("span",A,[s("span",$,"npm add @jsx-email/"+a(n.$frontmatter.slug),1)])])]),s("pre",j,[s("code",null,[s("span",F,[s("span",S,"npm add @jsx-email/"+a(n.$frontmatter.slug),1)])])])]),s("div",q,[I,V,s("pre",N,[s("code",null,[s("span",O,[s("span",U,"yarn add @jsx-email/"+a(n.$frontmatter.slug),1)])])]),s("pre",z,[s("code",null,[s("span",R,[s("span",G,"yarn add @jsx-email/"+a(n.$frontmatter.slug),1)])])])])])]),H])}const Y=e(c,[["render",M]]);export{X as __pageData,Y as default};