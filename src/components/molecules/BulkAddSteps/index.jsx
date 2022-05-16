import styled from '@emotion/styled';
import { Space, Steps } from 'antd';

const { Step } = Steps;

const StepsStyled = styled(Steps)`
  & .ant-steps-item-finish .ant-steps-item-title:after {
    background-color: ${({ theme }) => theme.color.primary} !important;
  }
  & .ant-steps-item-process .ant-steps-item-icon {
    background-color: ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primary};
  }
  & .ant-steps-item-finish .ant-steps-item-icon, & .ant-steps-item-finish .ant-steps-icon {
    border-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
  }

  & .ant-steps-item-title {
    color: ${({ theme }) => theme.text.primary} !important;
  }
`

const Spacer = styled(Space)`
  width: 100%;
`

const BulkAddSteps = ({ curStep, stepOne, stepTwo }) => (
  <Spacer direction="vertical" size="large">
    <StepsStyled current={curStep}>
      <Step title="Choose Anime"/>
      <Step title="Choose Collection"/>
    </StepsStyled>
    {curStep === 0 && stepOne}
    {curStep === 1 && stepTwo}
  </Spacer>
);

export default BulkAddSteps