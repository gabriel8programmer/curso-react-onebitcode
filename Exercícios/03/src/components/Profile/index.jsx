
import LinkButton from "../LinkButton"
import Title from "../Title"
import styles from "./styles.module.css"
import ProfileSection from "./ProfileSection"

export default ({ avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl }) => {

    const handleFollow = (e) => {
        console.log(e.target)
        alert("Seguindo agora!")
    }

    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={avatar} alt={`avatar de ${name}`} />
            <Title>
                <span>{name}</span>
                <button
                    className={styles.followButton}
                    onClick={handleFollow}
                >Follow</button>
            </Title>
            <ProfileSection className={styles.contactLine}>{bio}</ProfileSection>
            <ProfileSection className={styles.contactLine}>{phone}</ProfileSection>
            <ProfileSection className={styles.contactLine}>{email}</ProfileSection>
            <LinkButton url={githubUrl}>Github</LinkButton>
            <LinkButton url={linkedinUrl}>LinkedIn</LinkButton>
            <LinkButton url={twitterUrl}>Twitter</LinkButton>
        </div>
    )
}