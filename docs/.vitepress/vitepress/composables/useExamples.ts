
interface Examples {
}

/**
 * 批量导入文档示例组件，并可以通过 "短路径" 得到对应的组件
 * @return 返回示例组件组成的对象
 */
export const useExamples = () => {
  const examples = import.meta.globEager('../../../examples/**') as Examples
  Object.keys(examples).forEach((k) => {
    examples[k.replace('../../../examples/', '').replace('.vue', '')] = examples[k].default
  })
  return examples
}