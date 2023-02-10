import { Button } from 'antd'
import classNames from 'classnames'
import React from 'react'

import styles from './button.module.less'

type ButtonProps = JSXProps<typeof Button>
type ExtraProps = {
  type: ButtonProps['type'] | 'bd-obvious-default'
}

function getInnerClassname(type: ExtraProps['type']) {
  switch (type) {
    case 'bd-obvious-default':
      return styles.bdObviousDefault
    default:
      return
  }
}


const BdButton: React.FC<Omit<ButtonProps, 'type'> & ExtraProps> = ({
  type,
  className,
  ...config
}) => {
  if (type === 'bd-obvious-default') {
    className = classNames(getInnerClassname(type), className)
    type = 'default'
  }
  return <Button {...config} type={type} className={className} />
}

export default React.memo(BdButton)
