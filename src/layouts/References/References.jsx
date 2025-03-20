export const References = ({contentReference = "",styleReference}) => {
    return (
        <>
            <li className={styleReference}>
                <a href="">{contentReference}</a>
            </li>
        </>
    )
}