import TodoDashboardPage from '../../components/TodoDashboardPage'
import React from 'react'
import { shallow } from 'enzyme'

test('Should correctly render TodoDashboardPage component', () => {
    const wrapper = shallow(<TodoDashboardPage />)
    expect(wrapper).toMatchSnapshot()
})