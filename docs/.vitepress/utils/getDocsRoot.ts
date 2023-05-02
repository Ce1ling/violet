// @ts-ignore
import path from 'path'

interface GetDocsRoot {
  (): string
}
/** 
 * 获取文档根目录
 * @return 返回路径字符串
 **/
export const getDocsRoot: GetDocsRoot = () => path.resolve(__dirname, '..', '..')