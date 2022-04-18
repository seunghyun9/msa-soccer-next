import Link from "next/link";
import styles from "common/styles/Nav.module.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='basic/basic'>Basic</Link> </li>
        <li className={styles.li}> <Link href='board/addArticle'>게시글 등록</Link> </li>
        <li className={styles.li}> <Link href='board/getArticles'>게시글목록</Link> </li>
        <li className={styles.li}> <Link href='board/modifyArticle'>게시글수정</Link> </li>
        <li className={styles.li}> <Link href='board/removeArticle'>게시글삭제</Link> </li>
        {/*
        <li className={styles.li}> <Link href='admin/dashboard'>DashBoard</Link> </li>
        <li className={styles.li}> <Link href='user/index'>User</Link> </li>
        
        <li className={styles.li}> <Link href='game/addGame'>게임등록</Link> </li>
        <li className={styles.li}> <Link href='game/getGames'>게임목록</Link> </li>
        <li className={styles.li}> <Link href='game/modifyGame'>게임수정</Link> </li>
        <li className={styles.li}> <Link href='game/removeGame'>게임삭제</Link> </li>

        <li className={styles.li}> <Link href='game/team-form'>팀등록</Link> </li>
        <li className={styles.li}> <Link href='game/team-list'>팀목록</Link> </li> 
        <li className={styles.li}> <Link href='game/modifyTeam'>팀수정</Link> </li>
        <li className={styles.li}> <Link href='game/removeTeam'>팀삭제</Link> </li>
        */}
        <li className={styles.li}> <Link href='todo/addTodo'>일정추가</Link> </li>
        <li className={styles.li}> <Link href='todo/getTodos'>일정목록</Link> </li>
        <li className={styles.li}> <Link href='todo/modifyTodo'>일정수정</Link> </li>
        <li className={styles.li}> <Link href='todo/removeTodo'>일정삭제</Link> </li>

        <li className={styles.li}> <Link href='user/join'>회원가입</Link> </li>
        <li className={styles.li}> <Link href='user/login'>로그인</Link> </li>
        <li className={styles.li}> <Link href='user/logout'>로그아웃</Link> </li>
        <li className={styles.li}> <Link href='user/user-list'>사용자목록</Link> </li>
        <li className={styles.li}> <Link href='user/updateUser'>사용자수정</Link> </li>
        <li className={styles.li}> <Link href='user/withdrawUser'>회원탈퇴</Link> </li>
      </ul>
    </nav>

    
  );
};
