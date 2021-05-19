export default function LeveleScreen (props) {
const level = props.level;
    return (
        <div className="row">
            <div className="col-12 text-center bg-dark">
                <img 
                className="img-m"
                src={ `./assets/${level}.png` }
                 alt="nivel"  />
            </div>
        </div>
    )
    
}