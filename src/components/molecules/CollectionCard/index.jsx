import { Card } from 'antd';
import styled from '@emotion/styled';
import IconButton from 'components/atoms/IconButton';
import DeleteIcon from 'components/atoms/TrashIcon';
import EditIcon from 'components/atoms/EditIcon';
import ImageRenderer from 'components/atoms/ImageRenderer';

const { Meta } = Card;

const StyledCard = styled(Card)`
  border-color: ${({ theme }) => theme.color.tertiaryShade};

  &.ant-card-hoverable:hover {
    border: 2px solid ${({ theme }) => theme.color.tertiaryShade};
    box-shadow: 0 3px 5px ${({ theme }) => theme.color.tertiaryShade};
  }

  & .ant-card-actions li {
    margin: 0;
  }

  & .ant-card-body {
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.color.primary};

    & p {
      color: white;
    }
  }

  & .ant-card-actions {
    background-color: ${({ theme }) => theme.color.secondary};
  }
`

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
`

const CollectionCard = ({ imgSrc, name, onClickCard, onClickEdit, onClickDelete }) => {
  const noProp = (fn) => (e) => {
    e.stopPropagation()
    fn(e)
  }

  return (
    <StyledCard
      hoverable
      style={{ width: 240 }}
      onClick={onClickCard}
      actions={[
        <ActionsContainer>
          <IconButton onClick={noProp(onClickEdit)}><EditIcon /></IconButton>
          <IconButton onClick={noProp(onClickDelete)}><DeleteIcon /></IconButton>
        </ActionsContainer>
      ]}
      cover={<ImageRenderer alt={name} src={imgSrc}/>}
    >
      <Meta title={<p style={{ textAlign: "center", margin: 0, }}>{name}</p>} />
    </StyledCard>
  )
}

export default CollectionCard;