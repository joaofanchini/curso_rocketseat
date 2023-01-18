import styles from './Avatar.module.css'
import {ImgHTMLAttributes} from "react";

export interface AvatarType extends ImgHTMLAttributes<HTMLElement> {
    hasBorder?: boolean
}

const Avatar = (props: AvatarType) => {
    // https://avatars.githubusercontent.com/u/31604369?v=4
    return <img className={!!props.hasBorder ? styles.avatarWithBorder : styles.avatar}
                {...props}
                alt='Imagem do autor'/>

}

export default Avatar;