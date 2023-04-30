import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { Wrapper, Section, Title } from './AppBar.styled';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteCompleted } from 'redux/actions';

export const AppBar = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Section>
        <Title>Tasks</Title>
        <TaskCounter />
      </Section>
      <Section>
        <Title>Tasks to delete</Title>
        <Button onClick={() => dispatch(deleteCompleted())}>
          Delete completed
        </Button>
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </Wrapper>
  );
};
