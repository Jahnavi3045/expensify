import React from "react";
import ReactShallowRenderer from 'react-test-renderer/shallow'
import PageNotFound from "../../components/PageNotFound";

test('should render 404 page correctly',()=>{
    const renderer=new ReactShallowRenderer()
    renderer.render(<PageNotFound/>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})