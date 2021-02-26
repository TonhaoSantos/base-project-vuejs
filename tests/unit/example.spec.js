import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg: ''
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('Render the component without error.', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders props.msg when passed', () => {
    const msg = 'new message'
    
    expect(wrapper.text()).toMatch('msg')
  })
})
