/* --- Global Dependencies --- */
import React from 'react'
import { Button, Span, Flex } from 'web3-design-system/lib'

/* --- React Component --- */
export default ({ box, children, ...props }) => 
!box.instance
? <ButtonLogin box={box} isLoggingIn={box.isLoggingIn} open={box.open} />
: box.profile && box.isLoggedIn
  ? <Flex alignCenter>
      <Span xs mx={10} onClick={box.logout}>Logout</Span>
      <Button white sm >{box.profile.name}</Button>
    </Flex>
  : null // do something


const ButtonLogin = ({ box, isLoggedIn, isLoggingIn, loading, open }) => {
  return (
    <Button white sm onClick={open}>
    { 
      isLoggingIn
      ? <Span pl={10} pr={10}>Loading...</Span>
      : <Span>3ID Login</Span>
    }
    </Button> 
  )
}