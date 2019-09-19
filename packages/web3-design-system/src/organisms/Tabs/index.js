/* --- Global Dependencies --- */
import idx from 'idx'
import styled from 'styled-components'
import is from 'styled-is';
import { Box as BoxBase } from "rebass";

const Box = styled(BoxBase)
`
${is('card')`
  background-color: #FFF;
  background: ${props => props.theme.gradient['white'][0]};
  background-image: -webkit-linear-gradient(${props => props.gradientDir ? props.gradientDir : '180'}deg , ${props => `${props.theme.gradient['white'][0]}, ${props.theme.gradient['white'][1]}` });
  background-image: linear-gradient(${props => props.gradientDir ? props.gradientDir : '180'}deg , ${props => `${props.theme.gradient['white'][0]}, ${props.theme.gradient['white'][1]}`} );
  ${props =>`box-shadow: ${props.theme.shadows[0]};`}
  border-radius: 5px;
  padding: 15.5px;
`};

${is('shadowMedium')`
  ${props =>`box-shadow: ${props.theme.shadows[4]};`}
`}

${is('cardHover')`
&:hover {
  box-shadow: ${props => idx(props, _=>_.theme.shadows['lightHover'])};
}
`};

${is('pointer')`
  cursor: pointer;
`};

${is('curved')`
  border-radius: 40px;
`};

${is('rounded')`
  border-radius: 8px;
`};
${is('circle')`
  border-radius: 99999px;
`};


${is('borderBottom')`
  border-radius: 0 0 8px 8px;
`};
${is('borderTop')`
  border-radius: 8px 8px 0 0;
`};
${is('borderNone')`
  border-radius: 0 !important;
`};

  /***************************** text align *****************************/
  ${is('uppercase')`
    text-transform: uppercase;
  `};
  ${is('textCenter')`
    text-align: center;
  `};
  ${is('textRight')`
    text-align: right;
  `};

  /***************************** Gradient *****************************/
  ${props => 
    props.gradient && idx(props, _=>_.theme.gradient[props.gradient])
    ? `
      background: ${props.theme.gradient[props.gradient][0]};
      background-image: -webkit-linear-gradient(${props.gradientDir ? props.gradientDir : '-90'}deg , ${props.theme.gradient[props.gradient]});
      background-image: linear-gradient(${props.gradientDir ? props.gradientDir : '-90'}deg , ${props.theme.gradient[props.gradient]})
      `
    : null
  }
  &:hover {
    ${props => idx(props, _=>_.hover.boxShadow) && `box-shadow: ${props.theme.shadows[props.hover.boxShadow]};`}
    ${props => idx(props, _=>_.hover.zIndex) > 0 && `z-index: ${props.hover.zIndex}`}
  }
`

export default Box