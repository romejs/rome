---
title: Lint Rule js/importDefaultBasename
layout: layouts/page.njk
description: MISSING DOCUMENTATION
eleventyNavigation: {
	key: lint-rules/js/importDefaultBasename,
	parent: lint-rules,
	title: js/importDefaultBasename
}
---

# js/importDefaultBasename

MISSING DOCUMENTATION

<!-- EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS -->


## Examples
### Invalid
<pre class="language-text"><code class="language-text"><span class="token keyword">import</span> <span class="token variable">foo</span> <span class="token keyword">from</span> <span class="token string">&apos;./bar&apos;</span><span class="token punctuation">;</span><strong><span style="background-color: red">import foo from &apos;./bar&apos;;</span></strong></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.ts:1</span> <strong>lint/js/importDefaultBasename</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Use the basename </span><span style="color: Tomato;"><strong>bar</strong></span><span style="color: Tomato;"> or </span><span style="color: Tomato;"><strong>Bar</strong></span><span style="color: Tomato;"> when importing the default.</span>

    <span class="token keyword">import</span> <span class="token variable">foo</span> <span class="token keyword">from</span> <span class="token string">&apos;./bar&apos;</span><span class="token punctuation">;</span>
    <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">If you really meant to use a named import, use the following:</span>

    import {default as foo}

</code></pre>
### Valid
<pre class="language-text"><code class="language-text"><span class="token keyword">import</span> <span class="token variable">foo</span> <span class="token keyword">from</span> <span class="token string">&apos;./foo&apos;</span><span class="token punctuation">;</span><strong><span style="background-color: red">import foo from &apos;./foo&apos;;</span></strong></code></pre>