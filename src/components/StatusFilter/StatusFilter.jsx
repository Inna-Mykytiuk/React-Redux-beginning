import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { Wrapper } from './StatusFilter.styled';
// Імпортуємо генератор екшену
import { setStatusFilter } from '../../redux/actions';
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from '../../redux/constants';
import { getStatusFilter } from '../../redux/selectors';

export const StatusFilter = () => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  // Викликаємо генератор екшену та передаємо значення фільтра
  // Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <Wrapper>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </Wrapper>
  );
};
