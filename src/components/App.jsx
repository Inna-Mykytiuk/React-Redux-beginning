import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { AppWrapperColumn } from './App.styled';

export const App = () => {
  return (
    <Layout>
      <AppWrapperColumn>
        <AppBar />
        <TaskForm />
        {/* <TaskList /> */}
      </AppWrapperColumn>
    </Layout>
  );
};
