/* --- Global Dependencies --- */
import React from "react";
import { PortalProvider, PortalApi } from 'react-context-portal/lib'
/* ------- Component ------- */
export default ({
  content,
  children,
  position
}) => 
<>
  <PortalProvider>
    <span onClick={() => PortalApi.open(content, 'panel', position)}>
      {children}
    </span>
  </PortalProvider>
</>