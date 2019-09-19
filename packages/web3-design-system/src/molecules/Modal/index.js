/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import { PortalProvider, PortalComponent, PortalWithContext, PortalApi } from 'react-context-portal/lib'

/* ------- Component ------- */
export default ({
  content,
  children
}) => 
<>
  <PortalProvider>
    <span onClick={() => PortalApi.open(content, 'modal')}>
      {children}
    </span>
  </PortalProvider>
</>