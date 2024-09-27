import React from "react";
import ReactShallowRenderer from 'react-test-renderer/shallow'
import NavHeader from '../../components/NavHeader'

test('should render header correctly',()=>{
    const renderer=new ReactShallowRenderer()
    renderer.render(<NavHeader/>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})