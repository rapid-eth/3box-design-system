
/* --- Global Dependencies --- */
import idx from 'idx'
import React from "react";
import {Box, Button, Flex, Image, Heading, Span, Paragraph} from 'web3-design-system/lib'
import { GenerateImage } from './utilities'
/* ------- Component ------- */
export default ({box, styled, ...props }) => {
return !box.profile ? null
:
<>
  <ProfileCard profile={box.profile}/>
</>
}


const VerifiedPanel = ({ name, job, employer, role, description, ...props}) =>
<Flex>
  <Heading>Verified</Heading>
</Flex>
const ProfileInteract = ({ name, job, employer, role, description, ...props}) =>
<Flex>
  <Box flex={3} mr={30}>
      <Heading lg thin>
        {name}
      </Heading>
      <Paragraph fontSize={[1]} mb={[25]}>
        {name} | {employer} | {role}
      </Paragraph>
      <Span color='white' heavy fontSize={[2]}>	{job}</Span>
    <Span color='white' thin fontSize={[2]}>	{employer}</Span>
      <p>{description}</p>
  </Box>
</Flex>

const ProfileCard = ({ profile, ...props}) => {
  return (
    profile
    ?<>
      <Image variant='avatar' src={GenerateImage(idx(profile, _=>_.image))} width={120}/>
      <Heading md heavy mt={20}>
        {idx(profile, _=>_.name)}
      </Heading>
      <Heading sm thin level={4}>{idx(profile, _=>_.job)}</Heading>
      <Flex column my={10}>
        {
          idx(profile, _=>_.verified) && profile.verified.twitter && 
          <Flex alignCenter>
            <a style={{color: '#FFF'}} target="_blank" href={`https://twitter.com/${profile.verified.twitter.username}}`}>
              <Heading sm noMargin><strong>twitter:</strong>{profile.verified.twitter.username}</Heading>
            </a>
          </Flex>
        }
        {
          idx(profile, _=>_.verified) && profile.verified.github && 
          <Flex alignCenter mt={10}>
            <a style={{color: '#FFF'}} target="_blank" href={`https://github.com/${profile.verified.twitter.username}}`}>
              <Heading sm noMargin><strong>github:</strong>{profile.verified.github.username}</Heading>
            </a>
          </Flex>
        }
      </Flex>
    <Flex column mt={20}>
      <Heading xs thin my={'7px'} level={5}><Span heavy>employer:</Span> <br/> {idx(profile, _=>_.employer)}</Heading>
      <Heading xs thin my={'7px'} level={5}><Span heavy>school:</Span> <br/> {idx(profile, _=>_.school)}</Heading>
      <Heading xs thin my={'7px'} level={5}><Span heavy>summary:</Span> <br/> {idx(profile, _=>_.description)}</Heading>
      
    </Flex>
    </>
    : null
  )
}
