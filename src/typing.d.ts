declare module '*.mdx' {
  const value: string
  export default value
}

declare module '*.css'
declare module '*.less' {
  const t: Record<string, string>
  export default t
}

type JSXProps<FC> = FC extends React.FC<infer P>
  ? P
  : FC extends React.VFC<infer P2>
  ? P2
  : never
