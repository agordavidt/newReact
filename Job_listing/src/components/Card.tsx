
function Card({ children : string })
{
    return (
        <div className="card bg-light p-3 rounded shadow-sm">
            {children}
        </div>
    );
}


export default Card;