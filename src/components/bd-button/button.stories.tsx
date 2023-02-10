import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './button'

// https://github.com/storybookjs/storybook/issues/15574
export default {
  title: 'Button',
  component: Button,
  // parameters: {
  //   docs: {
  //     page: WelcomeMDX
  //   }
  // }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const ADefault = Template.bind({})

ADefault.args = {
  type: 'bd-obvious-default',
  children: 'Default Button',
}

ADefault.storyName = '默认按钮的样式'

export const BButtonWithSize = () => (
  <>
    <Button size="large" type={'bd-obvious-default'}>
      large button
    </Button>
    <Button size="small" type={'bd-obvious-default'}>
      small button
    </Button>
  </>
)
BButtonWithSize.storyName = '不同尺寸的按钮'
