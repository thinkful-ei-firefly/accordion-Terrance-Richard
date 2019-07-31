import React from 'react';
import { isDoExpression } from '@babel/types';

class Accordion extends React.Component {
    // static defaultProps = {
    //     sections: [],
    // };
    
    state = {
        currentSectionIndex: 0,
    };

    handleButtonClick(index) {
        this.setState({
            currentSectionIndex: index
        })
    }

    renderButtons() {
        return this.props.sections.map((section, idx) => (
            <button key={idx} onClick={() => this.handleButtonClick(idx)}>
                {section.title}
            </button>
        ))
    }

    renderContent() {
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        return (
            <div className='content'>
                {currentSection.content}
            </div>
        )}

    render() {
        return (
            <div>
                {this.renderButtons()}
                {this.props.sections.length && this.renderContent()}
            </div>
        )
    }
}



export default Accordion
