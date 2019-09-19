/* --- Global Dependencies --- */
import React from "react";
import { PortalProvider, PortalApi } from 'react-context-portal/lib'
/* ------- Component ------- */
export default ({
  content,
  children
}) => 
<>
  <PortalProvider>
    <span onClick={() => PortalApi.open(content, 'toast')}>
      {children}
    </span>
  </PortalProvider>
</>