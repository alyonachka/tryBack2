export const Form = ({
    header,
    btnText,
    onSubmit,
    setTitle,
    title,
    ...params
}) => {
    return (
        <form onSubmit={onSubmit}>
            <h3>{header}</h3>
            <input
                type="text"
                {...params}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">{btnText}</button>
        </form>
    );
};
