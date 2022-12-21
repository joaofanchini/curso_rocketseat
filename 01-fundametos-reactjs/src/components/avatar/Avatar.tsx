import styles from './Avatar.module.css'

export type AvatarType = {
    src: string
    hasBorder?: boolean
}

const Avatar = (props: AvatarType) => {
    // https://avatars.githubusercontent.com/u/31604369?v=4
    return <img className={!!props.hasBorder ? styles.avatarWithBorder : styles.avatar} src={props.src} alt='Imagem do autor'/>

}

export default Avatar;