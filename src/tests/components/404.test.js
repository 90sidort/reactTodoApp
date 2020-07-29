import NotFoundPage from '../../components/404'
import React from 'react'
import { shallow } from 'enzyme'

test('Should correctly render 404 component', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})