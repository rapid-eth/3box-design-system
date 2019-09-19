import React from 'react';
import { ThemeProvider } from 'web3-design-system/node_modules/styled-components'
import { PortalProvider, PortalComponent, PortalWithContext } from 'react-context-portal/lib'
import { BackgroundImage, Box, Container, Heading, Flex, Text, Span } from 'web3-design-system/lib'

import { BoxProvider, BoxWrapper } from 'react-context-3box/lib'
import { BoxLoginButton, BoxProfile, BoxLoginProfile } from 'react-3box-components/lib'
import './assets/App.css';
import theme from './assets/theme'

// const { BoxLoginButton } = BoxComponents
export default props => <>
    <div className="App">
    <BoxProvider>
    <ThemeProvider theme={theme}>
    <>
        
        <Flex alignCenter between gradient='blue' color='white' p={10} px={80}>
          <Heading sx>3Box Design System</Heading>
          <Flex>
            <BoxWrapper>
              <BoxLoginProfile styled={{mx: 20}}/>
            </BoxWrapper>
            <BoxWrapper>
              <BoxLoginButton/>
            </BoxWrapper>
          </Flex>
          
        </Flex>

        <AtomicDesign/>

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
      </>
  </ThemeProvider>
  </BoxProvider>
  </div>
  </>


const AtomicDesign = ({ styled, ...props}) =>
<Box gradient='blue' py={120}>
  <BackgroundImage
    opacity={0.2}
    ratio={.1} src={'https://images.unsplash.com/Ys-DBJeX0nE.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'}/>
    <Container color='white'>
        <Flex>
          <Box flex={2} textLeft>
            <BoxWrapper>
              <BoxProfile/>
            </BoxWrapper>
          </Box>
          <Flex flex={7}>
            
          </Flex>
        </Flex>
    </Container>
</Box>
