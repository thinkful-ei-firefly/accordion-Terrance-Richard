import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import  Accordion from './Accordion';



it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Accordion sections= {{sections: [{
        title: 'Section 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    }]}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});

// it('renders the UI as expected with no unreads', () => {
//   const tree = renderer
//     .create(<Accordion />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();  
// });