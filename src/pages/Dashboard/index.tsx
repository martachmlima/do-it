/* import { Box, Grid } from "@chakra-ui/react";
import { SearchBox } from "../../components/Form/Searchbox";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { useTasks } from "../../contexts/TasksContext";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { tasks, loadTasks } = useTasks();
  const { user, accessToken } = useAuth();

  useEffect(() => {
    loadTasks(user.id, accessToken).then((res) => setLoading(false));
  }, []);
  return (
    <Box>
      <Header />
      <SearchBox />
      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(420px, 1fr)"
        gap={10}
        paddingX="8"
        mt="8"
      >
        {tasks.map((task) => (
          <Card task={task} />
        ))}
      </Grid>
    </Box>
  );
}; */

import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { ModalTaskDetail } from "../../components/Modal/ModalTaskDetail";
import { useAuth } from "../../contexts/AuthContext";
import { useTasks } from "../../contexts/TasksContext";
import { FirstTask } from "./FirstTask";
import { NotFound } from "./NotFound";
import { TaskList } from "./TasksList";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { user, accessToken } = useAuth();
  const { tasks, loadTasks, notFound, taskNotFound } = useTasks();

  const [selectedTask, setSelectedTask] = useState<Task>({} as Task);

  const {
    isOpen: isTaskDetailOpen,
    onOpen: onTaskDetailOpen,
    onClose: onTaskDetailClose,
  } = useDisclosure();

  useEffect(() => {
    loadTasks(user.id, accessToken).then((res) => setLoading(false));
  }, []);

  const handleClick = (task: Task) => {
    setSelectedTask(task);
    onTaskDetailOpen();
  };

  if (notFound) {
    return (
      <NotFound
        isTaskDetailOpen={isTaskDetailOpen}
        onTaskDetailClose={onTaskDetailClose}
        selectedTask={selectedTask}
        taskNotFound={taskNotFound}
      />
    );
  }

  return (
    <>
      <ModalTaskDetail
        isOpen={isTaskDetailOpen}
        onClose={onTaskDetailClose}
        task={selectedTask}
      />
      {!loading && !tasks.length ? (
        <FirstTask />
      ) : (
        <TaskList handleClick={handleClick} loading={loading} tasks={tasks} />
      )}
    </>
  );
};
