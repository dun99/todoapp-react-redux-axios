import TaskActionPage from "./pages/ActionPage/TaskActionPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/task/add",
    exact: false,
    main: ({ history }) => <TaskActionPage history={history} />,
  },
  {
    path: "/task/:id/edit",
    exact: false,
    main: ({ match, history }) => (
      <TaskActionPage match={match} history={history} />
    ),
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];
export default routes;
