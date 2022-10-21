import "./styles.css";

export const TodosListSkeleton = ({ components=3 }={}) => {

    const renderComponents = () => {
        return [...Array(components)].map((v, index) => <div className="loading" key={`sk-${index}`}></div>)
    }

    return(
        <>
            {renderComponents()}
        </>
    )
}