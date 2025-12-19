import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
};

export class AppErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("App crashed:", error, errorInfo);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div style={{ padding: 16, fontFamily: "ui-sans-serif, system-ui" }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
          App crashed
        </h1>
        <pre style={{ whiteSpace: "pre-wrap", opacity: 0.9 }}>
          {this.state.error?.message}
        </pre>
      </div>
    );
  }
}
