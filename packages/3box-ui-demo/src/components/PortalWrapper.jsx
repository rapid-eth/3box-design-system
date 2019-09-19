import React from 'react';
import { Button, Image, BackgroundImage, Box, Container, Heading, Flex, Text, Span } from 'web3-design-system/lib'
import { PortalProvider, PortalComponent, PortalWithContext } from 'react-context-portal/lib'

export default ({ styled, ...props}) =>
<PortalProvider>
  {PortalWithContext(props => (
    <PortalComponent
      label='Portal'
      className="portal"
      activeClassName="is-active"
      backgroundClassName="portal-background"
      position={props.position || 'panel'}
      {...props}
    />
  ))}
</PortalProvider>