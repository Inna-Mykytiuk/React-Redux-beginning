// Імпортуємо хук
import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { List, ListItem } from './TaskList.styled';
import { statusFilters } from '../../redux/constants';
import { getTasks, getStatusFilter } from '../../redux/selectors';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(getTasks);
  // Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector(getStatusFilter);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <List>
      {visibleTasks.map(task => (
        <ListItem key={task.id}>
          <Task task={task} />
        </ListItem>
      ))}
    </List>
  );
};
