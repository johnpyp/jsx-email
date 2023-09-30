import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.33544f09.js";const h=JSON.parse('{"title":"HTML","description":"A React html component to wrap emails.","frontmatter":{"title":"HTML","sidebarTitle":"HTML","description":"A React html component to wrap emails.","og:image":"https://react.email/static/covers/html.png","icon":"file-code"},"headers":[],"relativePath":"../../../docs/components/html.md","filePath":"../../../docs/components/html.md"}'),o={name:"../../../docs/components/html.md"},p=l(`<h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><p>Install component from your command line.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-RwQrI" id="tab-8htEoGh" checked="checked"><label for="tab-8htEoGh">pnpm</label><input type="radio" name="group-RwQrI" id="tab-d729sER"><label for="tab-d729sER">npm</label><input type="radio" name="group-RwQrI" id="tab-L_WT-Oh"><label for="tab-L_WT-Oh">yarn</label></div><div class="blocks"><div class="language-console vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">pnpm add @jsx-email/html</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">pnpm add @jsx-email/html</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">npm add @jsx-email/html</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">npm add @jsx-email/html</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">yarn add @jsx-email/html</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">yarn add @jsx-email/html</span></span></code></pre></div></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Button</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/button&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Html</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/html&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Html</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;en&quot;</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">dir</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ltr&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Button</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">href</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://example.com&quot;</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">style</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#D4D4D4;">{ </span><span style="color:#9CDCFE;">color:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#61dafb&#39;</span><span style="color:#D4D4D4;"> }</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">        Click me</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Html</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Button</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/button&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Html</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/html&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Html</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">lang</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;en&quot;</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">dir</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;ltr&quot;</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">href</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;https://example.com&quot;</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">style</span><span style="color:#7B30D0;">=</span><span style="color:#002339;">{{ color: </span><span style="color:#A44185;">&#39;#61dafb&#39;</span><span style="color:#002339;"> }}&gt;</span></span>
<span class="line"><span style="color:#002339;">        Click me</span></span>
<span class="line"><span style="color:#002339;">      &lt;/</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Html</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><h3 id="lang" tabindex="-1"><code>lang</code> <a class="header-anchor" href="#lang" aria-label="Permalink to &quot;\`lang\`&quot;">​</a></h3><p>Type: <code>string</code><br> Default: <code>en</code><br> Required: <code>false</code></p><p>Identify the language of text content on the email</p><h3 id="dir" tabindex="-1"><code>dir</code> <a class="header-anchor" href="#dir" aria-label="Permalink to &quot;\`dir\`&quot;">​</a></h3><p>Type: <code>string</code><br> Default: <code>ltr</code><br></p><p>Identify the direction of text content on the email</p>`,13),e=[p];function t(c,r,i,y,d,E){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{h as __pageData,u as default};