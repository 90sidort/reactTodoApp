import Header from '../../components/Header'
import React from 'react'
import { shallow } from 'enzyme'

test('Should correctly render Header component', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
})