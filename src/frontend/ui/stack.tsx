import { CSSProperties, forwardRef, ReactNode, Ref } from 'react'
import { twMerge } from 'tailwind-merge'

export default forwardRef(function Stack(
  {
    children,
    style,
    className
  }: {
    children?: ReactNode
    style?: CSSProperties
    className?: string
  },
  ref?: Ref<any>
) {
  return (
    <div
      ref={ref}
      style={style}
      className={twMerge('flex flex-col', className)}
    >
      {children}
    </div>
  )
})
