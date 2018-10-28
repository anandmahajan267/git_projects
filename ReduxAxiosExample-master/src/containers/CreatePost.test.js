import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreatePost from './CreatePost';
import NewPost from '../components/NewPost';


configure({adapter: new Adapter()});

describe('<CreatePost />', () => {
    let wrapper;
    

    it('should render <CreatePost /> ', () => {
      
      
    });
});