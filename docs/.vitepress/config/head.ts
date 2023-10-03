import type { HeadConfig } from 'vitepress'

interface Head {
  (baseURI: string): HeadConfig[]
}
/**
 * 文档头部配置
 * @param {String} baseURI `config` 的 `base`(如果设置了 `base` 的话)
 * @return 返回一个 `HeadConfig[]` 的数组
 */
export const head: Head = (baseURI = '/') => [
  [
    'link',
    { rel: 'icon', href: `${baseURI}violet-logo.svg`, type: 'image/svg+xml' },
  ],
]
