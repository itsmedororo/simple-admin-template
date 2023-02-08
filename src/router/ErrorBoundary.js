import React from 'react';
import {
  NoInternet,
  Page500,
} from '@pages';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidMount() {
    window.addEventListener('online', () => {
      window.location.reload();
    });
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Page500 />;
    }

    if (!navigator.onLine) {
      return <NoInternet />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
