<template>
  <section id="preview" class="container preview-section" style="padding-top: 80px; padding-bottom: 80px">
    <div class="hero-content" style="flex: 1">
      <h2 class="section-title" style="font-size: 32px">Write code smarter</h2>
      <p class="hero-desc" style="font-size: 18px; margin-bottom: 24px">
        Our intelligent code editor understands your codebase and provides context-aware
        suggestions, helping you write better code faster.
      </p>
      <ul class="bullet-list">
        <li>AI-powered autocomplete with 95% accuracy</li>
        <li>Real-time error detection and fixes</li>
        <li>Smart refactoring suggestions</li>
        <li>Inline documentation on hover</li>
      </ul>
    </div>

    <div class="hero-visual" style="flex: 1.2">
      <div class="code-card" style="box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)">
        <div class="code-header">
          <div class="code-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <span class="code-title">app.ts</span>
        </div>
        <pre class="code-body"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Lencamo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@lencamo/core'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class">Lencamo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> ai<span class="token punctuation">:</span> <span class="token keyword">true</span><span class="token punctuation">,</span> collab<span class="token punctuation">:</span> <span class="token keyword">true</span><span class="token punctuation">,</span> theme<span class="token punctuation">:</span> <span class="token string">'dark'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// AI suggests: Add error handling</span>
app<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Ready!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
      </div>
    </div>
  </section>
</template>

<style scoped>
.preview-section {
  display: flex;
  align-items: center;
  gap: 64px;
}

.hero-content {
  flex: 1;
}

.hero-visual {
  flex: 1;
  min-width: 0;
}

.code-card {
  background: #0d0d0d;
  border: 1px solid var(--panel-border);
  border-radius: 8px;
  overflow: hidden;
  font-family: var(--font-mono);
  font-size: 14px;
}

.code-header {
  background: rgba(255, 255, 255, 0.02);
  padding: 12px 16px;
  border-bottom: 1px solid var(--panel-border);
  display: flex;
  align-items: center;
  gap: 8px;
}

.code-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--panel-border);
}

.dot:nth-child(1) {
  background: #ef4444;
}

.dot:nth-child(2) {
  background: #f59e0b;
}

.dot:nth-child(3) {
  background: #10b981;
}

.code-title {
  color: var(--text-muted);
  font-size: 12px;
  margin-left: 8px;
}

.code-body {
  padding: 16px;
  overflow-x: auto;
  color: #d4d4d8;
  white-space: pre;
  margin: 0;
}

.token.keyword {
  color: var(--color-pink);
}

.token.function {
  color: var(--color-blue);
}

.token.string {
  color: var(--color-green);
}

.token.comment {
  color: var(--text-muted);
  font-style: italic;
}

.token.punctuation,
.token.operator {
  color: #8b949e;
}

.token.property {
  color: var(--color-cyan);
}

.token.class {
  color: var(--color-orange);
}

.bullet-list {
  list-style: none;
  margin-top: 24px;
}

.bullet-list li {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-muted);
  font-size: 16px;
}

.bullet-list li::before {
  content: '✓';
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-green);
  font-size: 12px;
}

@media (max-width: 992px) {
  .preview-section {
    flex-direction: column;
  }

  .hero-visual {
    width: 100%;
  }
}
</style>
