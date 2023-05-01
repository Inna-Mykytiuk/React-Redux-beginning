import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { Section, Title, MainTitle, Img } from './AppBar.styled';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
// import { deleteCompleted } from 'redux/actions';
import { deleteCompleted } from 'redux/tasksSlice';
import { AppWrapper } from 'components/App.styled';
import arrowImg from '../../pictures/arrows4w.png';

export const AppBar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <MainTitle>Todo List</MainTitle>
      <Img src={arrowImg} alt="arrows" />
      <AppWrapper>
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
      </AppWrapper>
    </>
  );
};
