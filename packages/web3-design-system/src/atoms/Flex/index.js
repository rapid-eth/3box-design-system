/* --- Global Dependencies --- */
import styled from 'styled-components'
import is from 'styled-is';
import { down} from 'styled-breakpoints';

/* --- Local Dependencies --- */
import Box from '../Box'

const Flex = styled(Box)`
  display: flex;

  /* --------------- */
  /*     General     */
  /* --------------- */
  ${is('row')`
    flex-direction: row; /* default */
  `};

  ${is('rowReverse')`
    flex-direction: row-reverse;
  `};

  ${is('column')`
    flex-direction: column;
  `};

  ${is('columnReverse')`
    flex-direction: column-reverse;
  `};

  /* --------------- */
  /*       Wrap      */
  /* --------------- */

  ${is('nowrap')`
    flex-wrap: nowrap; /* default */
  `};

  ${is('wrap')`
    flex-wrap: wrap;
  `};

  ${is('wrapReverse')`
    flex-wrap: wrap-reverse;
  `};

  /* --------------- */
  /*     Justify     */
  /* --------------- */

  ${is('justifyStart')`
    justify-content: flex-start; /* default */
  `};

  ${is('justifyEnd')`
    justify-content: flex-end;
  `};

  ${is('justifyCenter')`
    justify-content: center;
  `};

  ${is('justifyBetween')`
    justify-content: space-between;
  `};

  ${is('justifyAround')`
    justify-content: space-around;
  `};

  /* --------------- */
  /*      Align      */
  /* --------------- */

  ${is('contentStart')`
    align-content: flex-start;
  `};

  ${is('contentEnd')`
    align-content: flex-end;
  `};

  ${is('contentCenter')`
    align-content: center;
  `};

  ${is('contentSpaceBetween')`
    align-content: space-between;
  `};

  ${is('contentSpaceAround')`
    align-content: space-around;
  `};

  ${is('contentStretch')`
    align-content: stretch; /* default */
  `};

  ${is('alignStart')`
    align-items: flex-start;
  `};

  ${is('alignEnd')`
    align-items: flex-end;
  `};

  ${is('alignCenter')`
    align-items: center;
  `};

  ${is('alignBaseline')`
    align-items: baseline;
  `};

  ${is('alignStretch')`
    align-items: stretch;
  `};

  /* --------------- */
  /*    Shorthand    */
  /* --------------- */

  ${is('between')`
  justify-content: space-between;
  `};

  ${is('evenly')`
  justify-content: space-evenly;
  `};

  ${is('center')`
    align-items: center;
    justify-content: center;
  `};

  ${is('jc')`
    justify-content: center;
  `};

  ${is('ac')`
    align-items: center;
  `};

  ${is('full')`
    width: 100%;
    height: 100%;
    flex-basis: 100%;
  `};
  /* --------------- */
  /*     Gutters     */
  /* --------------- */

  // Gutter 2
  ${is('gutter2')`
    flex-wrap: wrap;
    & > * {
      flex: 1;
      width: 45%;
      margin-right: 5%;
      max-width: 50%;
    }
    & > *:nth-child(2n) {
      margin-right: 0;
    }

    & > *:nth-child(n+3) {
      margin-top: 20px;
    }
    
    & > *:nth-child(n+3):last-of-type {
      margin-right: 50px;
    }

    ${down('tablet')} {
      & > * {
        margin: 0;
        width: 100;
      }
    }

  `};

  // Gutter 3
  ${is('gutter3')`
    flex-wrap: wrap;
    & > * {
      width: 30%;
      margin-right: 5%;
    }
    & > *:nth-child(3n) {
      // align-self: flex-end;
      margin-right: 0;
    }
    & > *:nth-child(n+4) {
      margin-top: 50px;
    }
  `};

  // Gutter 4
  ${is('gutter4')`
    flex-wrap: wrap;
    & > * {
      flex: 1;
      width: 22%;
      margin-right: 30px;
    }
    & > *:nth-child(4) {
      margin-right: 0;
    }
    & > *:nth-child(n+5) {
      margin-top: 30px;
    }

    ${down('desktop')} {
      flex-wrap: wrap;
      & > * {
        width: 45%;
        margin-right: 30px;
      }
      & > *:nth-child(2) {
        margin-right: 0;
      }

      & > *:nth-child(n+3) {
        margin-top: 20px;
      }
    }

    ${down('tablet')} {
      & > * {
        margin: 0;
        width: 100% !important;
      }
      & > *:nth-child(n+1) {
        margin-top: 10px;
      }
    }
  `};

`

Flex.propTypes = {

}

Flex.defaultProps = {

}

export default Flex