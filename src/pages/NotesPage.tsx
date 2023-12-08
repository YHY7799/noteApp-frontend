import { Container } from "react-bootstrap";
import NotesPageLoggedInView from "../coomponents/NotesPageLoggedInView";
import NotesPageLoggedOutView from "../coomponents/NotesPageLoggedOutView";
import { User } from "../models/user";
import styles from "../styles/NotesPage.module.css";

interface NotesPageProps {
  loggedInUser: User | null;
}

const NotesPage = ({ loggedInUser }: NotesPageProps) => {
  return (
    <Container className={styles.notesPage}>
      <>
        {loggedInUser ? <NotesPageLoggedInView /> : <NotesPageLoggedOutView />}
      </>
    </Container>
  );
};

export default NotesPage;
