import{_ as e,o as l,c as p,k as s,a as o,t as n,Q as t}from"./chunks/framework.fd95ed2e.js";const ls=JSON.parse('{"title":"Button","description":"A JSX email component which styles an anchor element to appear as a button","frontmatter":{"title":"Button","description":"A JSX email component which styles an anchor element to appear as a button","slug":"button","type":"component","head":[["meta",{"name":"og:description","content":"A JSX email component which styles an anchor element to appear as a button"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"Button"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"A JSX email component which styles an anchor element to appear as a button"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"Button"}]]},"headers":[],"relativePath":"../../../docs/components/button.md","filePath":"../../../docs/components/button.md"}'),c={name:"../../../docs/components/button.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[o("Semantics: Quite often in the email world we talk about buttons when we actually mean links. Behind the scenes this component is a "),s("code",null,"<a>"),o(" element which is styled like a "),s("code",null,"<button>"),o(" element.")])],-1),m=s("h2",{id:"install",tabindex:"-1"},[o("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),y={class:"vp-code-group vp-adaptive-theme"},h=t('<div class="tabs"><input type="radio" name="group-kfLnN" id="tab-qpNZHJO" checked="checked"><label for="tab-qpNZHJO">pnpm</label><input type="radio" name="group-kfLnN" id="tab-VWbQs4m"><label for="tab-VWbQs4m">bun</label><input type="radio" name="group-kfLnN" id="tab-wGc2rqQ"><label for="tab-wGc2rqQ">npm</label><input type="radio" name="group-kfLnN" id="tab-yflNBIo"><label for="tab-yflNBIo">yarn</label></div>',1),u={class:"blocks"},_={class:"language-console vp-adaptive-theme active"},E=s("button",{title:"Copy Code",class:"copy"},null,-1),g=s("span",{class:"lang"},"console",-1),b={class:"shiki slack-dark vp-code-dark"},k={class:"line"},f={style:{color:"#E6E6E6"}},C={class:"shiki slack-ochin vp-code-light"},D={class:"line"},v={style:{color:"#002339"}},B={class:"language-console vp-adaptive-theme"},$=s("button",{title:"Copy Code",class:"copy"},null,-1),w=s("span",{class:"lang"},"console",-1),A={class:"shiki slack-dark vp-code-dark"},S={class:"line"},P={style:{color:"#E6E6E6"}},T={class:"shiki slack-ochin vp-code-light"},j={class:"line"},q={style:{color:"#002339"}},F={class:"language-console vp-adaptive-theme"},N=s("button",{title:"Copy Code",class:"copy"},null,-1),I=s("span",{class:"lang"},"console",-1),x={class:"shiki slack-dark vp-code-dark"},V={class:"line"},J={style:{color:"#E6E6E6"}},Q={class:"shiki slack-ochin vp-code-light"},X={class:"line"},L={style:{color:"#002339"}},O={class:"language-console vp-adaptive-theme"},G=s("button",{title:"Copy Code",class:"copy"},null,-1),H=s("span",{class:"lang"},"console",-1),R={class:"shiki slack-dark vp-code-dark"},U={class:"line"},W={style:{color:"#E6E6E6"}},Z={class:"shiki slack-ochin vp-code-light"},z={class:"line"},K={style:{color:"#002339"}},M=t(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Button</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/button&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Button</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">href</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://example.com&quot;</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">style</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#D4D4D4;">{ </span><span style="color:#9CDCFE;">color:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#61dafb&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">padding:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;10px 20px&#39;</span><span style="color:#D4D4D4;"> }</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      Click me</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Button</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/button&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">href</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;https://example.com&quot;</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">style</span><span style="color:#7B30D0;">=</span><span style="color:#002339;">{{ color: </span><span style="color:#A44185;">&#39;#61dafb&#39;</span><span style="color:#002339;">, padding: </span><span style="color:#A44185;">&#39;10px 20px&#39;</span><span style="color:#002339;"> }}&gt;</span></span>
<span class="line"><span style="color:#002339;">      Click me</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">href: </span><span style="color:#9CDCFE;">string</span><span style="color:#E6E6E6;">;</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">href: </span><span style="color:#2F86D2;">string</span><span style="color:#002339;">;</span></span></code></pre></div><p>The url to navigate to when the button is clicked.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#9CDCFE;">target</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">string</span><span style="color:#E6E6E6;">;</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#2F86D2;">target</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">string</span><span style="color:#002339;">;</span></span></code></pre></div><p>Specifies the value of the <code>&quot;target&quot;</code> attribute for the button <code>target</code>.</p><p>In addition to the custom props above, this component expresses all of the <a href="https://react.dev/reference/react-dom/components/common" target="_blank" rel="noreferrer">Common Component Props</a> for <code>ComponentProps&lt;&#39;a&#39;&gt;</code>.</p>`,9);function Y(a,ss,as,ns,os,ts){return l(),p("div",null,[s("h2",r,[o(n(a.$frontmatter.title)+" ",1),i]),s("p",null,n(a.$frontmatter.description),1),d,m,s("p",null,"Install the "+n(a.$frontmatter.type)+" from your command line",1),s("div",y,[h,s("div",u,[s("div",_,[E,g,s("pre",b,[s("code",null,[s("span",k,[s("span",f,"pnpm add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])]),s("pre",C,[s("code",null,[s("span",D,[s("span",v,"pnpm add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])])]),s("div",B,[$,w,s("pre",A,[s("code",null,[s("span",S,[s("span",P,"bun add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])]),s("pre",T,[s("code",null,[s("span",j,[s("span",q,"bun add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])])]),s("div",F,[N,I,s("pre",x,[s("code",null,[s("span",V,[s("span",J,"npm add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])]),s("pre",Q,[s("code",null,[s("span",X,[s("span",L,"npm add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])])]),s("div",O,[G,H,s("pre",R,[s("code",null,[s("span",U,[s("span",W,"yarn add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])]),s("pre",Z,[s("code",null,[s("span",z,[s("span",K,"yarn add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])])])])]),M])}const ps=e(c,[["render",Y]]);export{ls as __pageData,ps as default};