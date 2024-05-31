export default function FormatUserName({ username }) {
    return (
        <>
            {
                username.map(element => (
                    <div>
                        @ {element.name}
                    </div>
                ))
            }
        </>
    )
}