import instaLogo from '../../assets/instaLogo.png';


export function InstaTitle({ classname }) {
    return (
    <div>
        <img
        src={instaLogo}
        alt="IG Logo"
        className={classname}
        />
    </div>
);
}