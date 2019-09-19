/* --- Global Dependencies --- */
import idx from 'idx'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { border, position, color, layout, flexbox, grid, background, typography, shadow, system, space } from 'styled-system'
import is from 'styled-is';
import { withoutProps, ignoreList } from '../../utils'

const Box = styled(withoutProps(ignoreList)('div'))
`
box-sizing: border-box;
${border}
${color}
${layout}
${flexbox}
${grid}
${background}
${typography}
${position}
${shadow}
${space}

/* --------------- */
/*      System     */
/* --------------- */
${system({
  opacity: {
    property: 'opacity',
  },

})}

${
  variant({
    prop: 'layout',
    variants: {
      toast: {
        position: 'fixed !important',
        top: 0,
        right: 0,
        marginTop: 20,
        marginRight: 20,
        minWidth: 180
      },
      panel: {
        position: 'fixed !important',
        top: 0,
        bottom: 0,
        right: 0,
        height: '100%',
        minWidth: 360,
        maxWidth: 360
      },
      panelRight: {
        position: 'fixed !important',
        relative: false,
        top: 0,
        bottom: 0,
        right: 0,
        height: '100%',
        minWidth: 360,
        maxWidth: 360
      },
      panelLeft: {
        position: 'fixed !important',
        relative: false,
        top: 0,
        bottom: 0,
        left: 0,
        height: '100%',
        minWidth: 360,
        maxWidth: 360
      },
    }
  })
}

/* --------------- */
/*     General     */
/* --------------- */
${is('fill')`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`}
${is('relative')`
  position: relative
`}
${is('absolute')`
  position: absolute !important;
`}

${is('fixed')`
  position: fixed !important;
`}

${is('noPadding')`
  padding: 0px !important;
`}

${is('noMargin')`
  margin: 0px !important;
`}



/* --------------- */
/*     Helpers     */
/* --------------- */
${is('pointer')`
  cursor: pointer;
`};

${is('rounded')`
  border-radius: 8px;
`};
${is('borderRoundedBottom')`
  border-radius: 0 0 8px 8px !important;
`};
${is('borderRoundedTop')`
  border-radius: 8px 8px 0 0 !important;
`};

${is('curved')`
  border-radius: 40px;
`};
${is('borderCurvedTop')`
  border-radius: 15px 15px 0 0 !important;
`};
${is('borderCurvedBottom')`
  border-radius: 0 0 15px 15px !important;
`};

${is('circle')`
  border-radius: 99999px;
`};


${is('borderNone')`
  border-radius: 0 !important;
`};

  /* --------------- */
  /*       Text      */
  /* --------------- */
  ${is('uppercase')`
    text-transform: uppercase;
  `};
  ${is('textLeft')`
    text-align: left;
  `};
  ${is('textCenter')`
    text-align: center;
  `};
  ${is('textRight')`
    text-align: right;
  `};

  /* --------------- */
  /*     Gradient     */
  /* --------------- */
  ${props => 
    props.gradient && idx(props, _=>_.theme.gradient[props.gradient])
    ? `
      background: ${idx(props, _=>_.theme.gradient[props.gradient][0])};
      background-image: -webkit-linear-gradient(${props.gradientDir ? props.gradientDir : '-90'}deg , ${idx(props, _=>_.theme.gradient[props.gradient])});
      background-image: linear-gradient(${props.gradientDir ? props.gradientDir : '-90'}deg , ${idx(props, _=>_.theme.gradient[props.gradient])});
      `
    : null
  }
  &:hover {
    ${props => idx(props, _=>_.hover.boxShadow) && `box-shadow: ${idx(props, _=>_.theme.shadows[props.hover.boxShadow])};`}
    ${props => idx(props, _=>_.hover.zIndex) > 0 && `z-index: ${props.hover.zIndex}`}
  }

  /* --------------- */
  /*     Card     */
  /* --------------- */
  ${is('card')`
    background-color: #FFF;
    ${
      props => console.log(props, 'themememem')
    }
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
`

Box.propTypes = {
  curved: PropTypes.string,
  rounded: PropTypes.string,
  pointer: PropTypes.string
}

Box.defaultProps = {
  relative: true,
  zIndex: 10
}

module.exports = Box