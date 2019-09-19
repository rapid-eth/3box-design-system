import styled from 'styled-components'
import is from 'styled-is';
import Text from '../Text'

const Heading = styled(Text)
`
${is('noMargin')`
  margin: 0;
`};
${is('pointer')`
  cursor: pointer;
`};
${is('xs')`
font-size: 12px;
`};
${is('sm')`
font-size: 14px;
`};
${is('md')`
font-size: 22px;
`};
${is('lg')`
font-size: 36px;
`};
${is('xl')`
font-size: 42px;
`};
`

Heading.defaultProps = {
  as: 'h3',
  fontFamily: 'Ubuntu',
  fontWeight: 'normal',
  lineHeight: 'normal'
}

export default Heading