import { Card } from 'antd';
import styled from '@emotion/styled';
import IconButton from 'components/atoms/IconButton';
import DeleteIcon from 'components/atoms/TrashIcon';
import EditIcon from 'components/atoms/EditIcon';

const { Meta } = Card;

const StyledCard = styled(Card)`
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
      cover={<img alt={name} src={imgSrc}/>}
    >
      <Meta title={<p style={{ textAlign: "center", margin: 0, }}>{name}</p>} />
    </StyledCard>
  )
}

export default CollectionCard;