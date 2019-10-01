import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header.js'
import axios from 'axios'



//make sure testing is working

describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
      expect(2 + 2).toBe(4)
    })
  })

  let wrapper;
  beforeEach(() => {
      wrapper = shallow(<Header />)
  });
  describe('<Header /> rendering', () => {
      it('should render two <h3>', () => {
          expect(wrapper.find('h3')).toHaveLength(2)
      })
  it('should render one <img>', () => {
          expect(wrapper.find('img')).toHaveLength(1)
      })
  it('should render one <div>', () => {
          expect(wrapper.find('div')).toHaveLength(1)
      })
  })


  describe('Header component', () => {
    describe('when rendered', () => {
      it('should get an artist and an image', () => {
        const getSpy = jest.spyOn(axios, 'get')
        const axiosInstance = shallow(
          <Header />
        )
        expect(getSpy).toBeCalled()
      })
    })
  })