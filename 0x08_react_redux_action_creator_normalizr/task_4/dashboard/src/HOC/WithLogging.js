import React from 'react';

const WithLogging = (WrappedComponent) => {
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    class HOC extends React.Component {
        componentDidMount() {
            console.log(`Component ${componentName} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${componentName} is going to unmount`);
        }

        render() {
            return <WrappedComponent { ... this.props } />;
        }
    }

    HOC.displayName = `WithLogging(${componentName})`;
    return HOC;
}

export default WithLogging;
