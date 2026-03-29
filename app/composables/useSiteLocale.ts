import { computed, onMounted } from 'vue'

export type SiteLocale = 'en' | 'zh'

const DEFAULT_LOCALE: SiteLocale = 'en'
const LOCALE_STORAGE_KEY = 'homeweb-locale'
const DISMISSED_SUGGESTION_KEY = 'homeweb-dismissed-locale-suggestion'

function normalizeLocale(value?: string | null): SiteLocale {
  return value?.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

function parseStoredLocale(value?: string | null): SiteLocale | null {
  if (!value) {
    return null
  }

  return value === 'zh' || value === 'en' ? value : normalizeLocale(value)
}

function detectBrowserLocale(): SiteLocale {
  if (!import.meta.client) {
    return DEFAULT_LOCALE
  }

  const browserLocale = navigator.languages?.[0] || navigator.language || DEFAULT_LOCALE

  return normalizeLocale(browserLocale)
}

export const siteMessages = {
  en: {
    seo: {
      title: 'lencamo | Modern Developer Tools',
      description:
        'A personal site for templates, CLI tooling, and TingNote, built for focused developer workflows.'
    },
    localeSuggestion: {
      message: 'We detected your browser language is English. Switch now?',
      action: 'Switch to English',
      close: 'Dismiss language suggestion'
    },
    common: {
      language: 'Language',
      installCommandLabel: 'Install command',
      copyCommand: 'Copy command',
      copied: 'Copied',
      goToSlide: 'Go to slide'
    },
    header: {
      logoAlt: 'lencamo logo',
      nav: [
        { label: 'CLI', href: '#cli' },
        { label: 'TingNote', href: '#tingnote' },
        { label: 'Templates', href: '#templates' }
      ]
    },
    hero: {
      avatarAlt: 'lencamo avatar',
      title: "Hi, I'm lencamo",
      highlight: 'Developer & Creator',
      description:
        'I am not defined by discipline, but an unproductive day leaves me uneasy. I am not inherently optimistic either, yet I still keep a quiet sense of hope for tomorrow.',
      status: 'Available for new opportunities'
    },
    toolcli: {
      title: 'Create, snippet, and generate with lencamo-cli',
      description:
        'A lightweight CLI that helps you start clean, stay productive, and keep repetitive setup work out of the way.'
    },
    preview: {
      title: 'TingNote',
      description: 'A focused workspace for writing, thinking, and organizing knowledge.',
      bullets: [
        'AI Q&A for faster search and understanding',
        'Tab completion to speed up editing',
        'Real-time Markdown editing and preview',
        'Mind mapping for structured organization'
      ],
      slides: [
        {
          description: 'A quick look at the TingNote home workspace.',
          alt: 'TingNote home workspace'
        },
        {
          description: 'An AI-assisted view for asking, exploring, and following up.',
          alt: 'TingNote AI workspace'
        },
        {
          description: 'A writing-focused editor for longer-form content and notes.',
          alt: 'TingNote editor view'
        },
        {
          description: 'A mind map view for connecting ideas and outlining structure.',
          alt: 'TingNote mind map view'
        }
      ]
    },
    cta: {
      title: 'Try TingNote today',
      description:
        'Experience the power of TingNote and change the way you capture, refine, and organize ideas.',
      button: 'Get Started for free',
      benefits: ['Focused', 'Structured', 'Efficient']
    },
    features: {
      title: 'Powerful Templates',
      subtitle:
        'Browse my template collection, from open-source starters to premium builds, and get running faster with the setup that fits your project.',
      items: [
        {
          icon: '✧',
          title: 'lencamo-cli',
          description:
            'Open source CLI tooling for scaffolding, snippets, and everyday workflow support.',
          githubHref: 'https://github.com/ren-34/lencamo-cli'
        },
        {
          icon: '⚡',
          title: 'Open Blog Starter',
          description: 'An open source starter for content sites, blogs, and personal publishing.',
          href: 'https://ting-hexo.netlify.app/',
          githubHref: 'https://github.com/Lencamo/ting-hexo'
        },
        {
          icon: '⎇',
          title: 'Docs Starter',
          description:
            'A free project base for documentation, guides, and developer-facing content.',
          href: 'https://note-taking.cn'
        },
        {
          icon: '🚀',
          title: 'TingNote',
          description:
            'A premium writing product focused on notes, knowledge, and structured thinking.',
          href: 'https://tingbiji.com'
        },
        {
          icon: '☁️',
          title: 'Premium Dashboard',
          description:
            'A production-ready paid admin template with stronger structure and cleaner UI detail.',
          href: 'https://vue3-ting-admin.vercel.app'
        }
      ]
    },
    footer: {
      logoAlt: 'lencamo logo',
      links: [
        { label: 'Product', href: '#' },
        { label: 'Docs', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contact', href: '#' }
      ],
      copyright: '© 2024 lencamo. All rights reserved.'
    }
  },
  zh: {
    seo: {
      title: 'lencamo | 现代开发者工具',
      description: '一个展示模板、CLI 工具和 TingNote 产品的个人站点，面向更专注的开发流程。'
    },
    localeSuggestion: {
      message: '检测到浏览器语言是：中文，是否切换？',
      action: '切换到中文',
      close: '关闭语言提示'
    },
    common: {
      language: '语言',
      installCommandLabel: '安装命令',
      copyCommand: '复制命令',
      copied: '已复制',
      goToSlide: '切换到第'
    },
    header: {
      logoAlt: 'lencamo 标志',
      nav: [
        { label: 'CLI', href: '#cli' },
        { label: '亭笔记', href: '#tingnote' },
        { label: '模板', href: '#templates' }
      ]
    },
    hero: {
      avatarAlt: 'lencamo 头像',
      title: '你好，我是 lencamo',
      highlight: '开发者与创作者',
      description:
        '我不是一个靠自律定义自己的人，但毫无成效的一天会让我感到不安。我也不是天生乐观，不过依然会对明天保留一点安静的期待。',
      status: '目前开放新的机会'
    },
    toolcli: {
      title: '用 lencamo-cli 快速创建、生成与复用片段',
      description:
        '一个轻量 CLI，帮你更干净地起步、更顺手地开发，把重复的环境准备工作从流程里挪开。'
    },
    preview: {
      title: 'TingNote',
      description: '一个专注于写作、思考和知识整理的工作空间。',
      bullets: [
        'AI 问答，帮助更快搜索与理解',
        'Tab 补全，加快编辑速度',
        '实时 Markdown 编辑与预览',
        '脑图整理，帮助结构化组织内容'
      ],
      slides: [
        {
          description: '快速浏览 TingNote 的首页与整体工作区。',
          alt: 'TingNote 首页工作区'
        },
        {
          description: 'AI 协作视图，用于提问、延展思路和继续追问。',
          alt: 'TingNote AI 协作界面'
        },
        {
          description: '面向写作的编辑界面，适合长文和笔记整理。',
          alt: 'TingNote 写作编辑界面'
        },
        {
          description: '脑图视图，适合连接概念、搭建结构和梳理主题。',
          alt: 'TingNote 脑图界面'
        }
      ]
    },
    cta: {
      title: '立即体验 TingNote',
      description: '用更专注的方式记录、沉淀并组织你的想法。',
      button: '免费开始',
      benefits: ['更专注', '更有结构', '更高效率']
    },
    features: {
      title: '精选模板与产品',
      subtitle: '浏览我的模板集合，从开源起步项目到付费成品，帮你更快找到适合当前项目的起点。',
      items: [
        {
          icon: '✧',
          title: 'lencamo-cli',
          description: '开源 CLI 工具集，用于脚手架、代码片段和日常开发流程支持。',
          githubHref: 'https://github.com/ren-34/lencamo-cli'
        },
        {
          icon: '⚡',
          title: '开放博客模板',
          description: '适用于内容站、博客和个人发布场景的开源起步模板。',
          href: 'https://ting-hexo.netlify.app/',
          githubHref: 'https://github.com/Lencamo/ting-hexo'
        },
        {
          icon: '⎇',
          title: '文档站模板',
          description: '一个免费的项目基础模板，适合文档、指南和开发者内容。',
          href: 'https://note-taking.cn'
        },
        {
          icon: '🚀',
          title: 'TingNote',
          description: '一款面向笔记、知识沉淀和结构化思考的付费写作产品。',
          href: 'https://tingbiji.com'
        },
        {
          icon: '☁️',
          title: '高级后台模板',
          description: '面向生产环境的付费管理后台模板，结构更稳，界面更干净。',
          href: 'https://vue3-ting-admin.vercel.app'
        }
      ]
    },
    footer: {
      logoAlt: 'lencamo 标志',
      links: [
        { label: '产品', href: '#' },
        { label: '文档', href: '#' },
        { label: '定价', href: '#' },
        { label: '博客', href: '#' },
        { label: '联系', href: '#' }
      ],
      copyright: '© 2024 lencamo。保留所有权利。'
    }
  }
} as const

export function useSiteLocale() {
  const locale = useState<SiteLocale>('site-locale', () => DEFAULT_LOCALE)
  const browserLocale = useState<SiteLocale | null>('site-browser-locale', () => null)
  const localeReady = useState<boolean>('site-locale-ready', () => false)
  const hasExplicitPreference = useState<boolean>('site-locale-explicit-preference', () => false)
  const dismissedSuggestion = useState<SiteLocale | null>(
    'site-dismissed-locale-suggestion',
    () => null
  )

  const messages = computed(() => siteMessages[locale.value])
  const localeOptions = [
    { value: 'zh', label: '中' },
    { value: 'en', label: 'EN' }
  ] as const

  function syncClientLocale() {
    if (!import.meta.client || localeReady.value) {
      return
    }

    const storedLocale = parseStoredLocale(localStorage.getItem(LOCALE_STORAGE_KEY))
    const storedDismissedSuggestion = parseStoredLocale(
      localStorage.getItem(DISMISSED_SUGGESTION_KEY)
    )

    if (storedLocale) {
      locale.value = storedLocale
      hasExplicitPreference.value = true
    }

    dismissedSuggestion.value = storedDismissedSuggestion
    browserLocale.value = detectBrowserLocale()
    localeReady.value = true
  }

  function clearDismissedSuggestion() {
    dismissedSuggestion.value = null

    if (import.meta.client) {
      localStorage.removeItem(DISMISSED_SUGGESTION_KEY)
    }
  }

  function setLocale(nextLocale: SiteLocale, options: { persist?: boolean } = {}) {
    const shouldPersist = options.persist ?? true

    locale.value = nextLocale

    if (!shouldPersist || !import.meta.client) {
      return
    }

    hasExplicitPreference.value = true
    localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
    clearDismissedSuggestion()
  }

  function toggleLocale() {
    setLocale(locale.value === 'zh' ? 'en' : 'zh')
  }

  function dismissLocaleSuggestion() {
    if (!browserLocale.value) {
      return
    }

    dismissedSuggestion.value = browserLocale.value

    if (import.meta.client) {
      localStorage.setItem(DISMISSED_SUGGESTION_KEY, browserLocale.value)
    }
  }

  const suggestedLocale = computed<SiteLocale | null>(() => {
    if (!localeReady.value || hasExplicitPreference.value) {
      return null
    }

    if (!browserLocale.value || browserLocale.value === locale.value) {
      return null
    }

    if (dismissedSuggestion.value === browserLocale.value) {
      return null
    }

    return browserLocale.value
  })

  onMounted(syncClientLocale)

  return {
    locale,
    localeOptions,
    messages,
    suggestedLocale,
    setLocale,
    toggleLocale,
    dismissLocaleSuggestion
  }
}
