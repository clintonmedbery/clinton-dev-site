import React, { useState } from "react";
import { DesktopView } from "./DesktopView";
import { withRouter } from "react-router-dom";

const Desktop = ({ history }) => {
  const [isTerminalHidden, setTerminalHidden] = useState(false);
  const [isResumeHidden, setResumeHidden] = useState(true);

  const showTerminal = () => {
    setTerminalHidden(false);
  };

  const closeTerminal = () => {
    setTerminalHidden(true);
  };

  const showResume = () => {
    setResumeHidden(false);
  };

  const closeResume = () => {
    setResumeHidden(true);
  };

  const goHome = () => {
    history.push("/");
  };

  return (
    <DesktopView
      isTerminalHidden={isTerminalHidden}
      isResumeHidden={isResumeHidden}
      showTerminal={showTerminal}
      closeTerminal={closeTerminal}
      showResume={showResume}
      closeResume={closeResume}
      goHome={goHome}
    />
  );
};

export default withRouter(Desktop);
